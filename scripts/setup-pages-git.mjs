import fs from 'node:fs';

const toml = fs.readFileSync(
  `${process.env.APPDATA}/xdg.config/.wrangler/config/default.toml`,
  'utf8',
);
const token = toml.match(/oauth_token = "([^"]+)"/)?.[1];
if (!token) throw new Error('No wrangler oauth token found');

const accountId = 'd53f5e239245a237a4b9cc7ec499ccad';
const project = 'beautiful-vegan';
const repo = 'beautiful-vegan';

async function api(path, method = 'GET', body) {
  const res = await fetch(`https://api.cloudflare.com/client/v4${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const json = await res.json();
  console.log(`${method} ${path} → ${res.status}`);
  if (!json.success) console.log(JSON.stringify(json, null, 2));
  return json;
}

const action = process.argv[2] ?? 'create';

if (action === 'inspect') {
  const projectData = await api(`/accounts/${accountId}/pages/projects/${project}`);
  if (projectData.success) {
    const r = projectData.result;
    console.log(JSON.stringify({
      name: r.name,
      subdomain: r.subdomain,
      domains: r.domains,
      github: r.source?.config,
      latest_stage: r.latest_deployment?.latest_stage,
      trigger: r.latest_deployment?.deployment_trigger,
      url: r.latest_deployment?.url,
    }, null, 2));
  }
  const domains = await api(`/accounts/${accountId}/pages/projects/${project}/domains`);
  if (domains.success) console.log('Domains:', JSON.stringify(domains.result, null, 2));
  const deployments = await api(`/accounts/${accountId}/pages/projects/${project}/deployments?per_page=3`);
  if (deployments.success) {
    for (const d of deployments.result) {
      console.log(d.id.slice(0,8), d.latest_stage?.name, d.latest_stage?.status, d.deployment_trigger?.type, d.url);
    }
  }
}

if (action === 'create') {
  const created = await api(`/accounts/${accountId}/pages/projects`, 'POST', {
    name: project,
    production_branch: 'main',
    source: {
      type: 'github',
      config: {
        owner: 'michelborrer',
        owner_id: '241949766',
        repo_name: repo,
        repo_id: '1292422409',
        production_branch: 'main',
        pr_comments_enabled: true,
        deployments_enabled: true,
        production_deployments_enabled: true,
        preview_deployment_setting: 'all',
        preview_branch_includes: ['*'],
      },
    },
    build_config: {
      build_command: 'npm run build',
      destination_dir: 'dist',
      root_dir: '',
    },
    deployment_configs: {
      production: {
        compatibility_date: '2026-07-07',
        env_vars: {
          NODE_VERSION: { type: 'plain_text', value: '22' },
        },
      },
      preview: {
        compatibility_date: '2026-07-07',
        env_vars: {
          NODE_VERSION: { type: 'plain_text', value: '22' },
        },
      },
    },
  });
  if (!created.success) process.exit(1);
  console.log('Project created:', created.result?.id);
}

if (action === 'domains') {
  for (const name of ['beautiful-vegan.com', 'www.beautiful-vegan.com']) {
    await api(`/accounts/${accountId}/pages/projects/${project}/domains`, 'POST', { name });
  }
  await api(`/accounts/${accountId}/pages/projects/${project}/domains`);
}

if (action === 'restore-worker-domain') {
  const created = await api(`/accounts/${accountId}/workers/domains`, 'POST', {
    hostname: 'beautiful-vegan.com',
    service: 'long-pond-37c9',
    environment: 'production',
  });
  if (!created.success) process.exit(1);
}

if (action === 'migrate-domain') {
  const workerDomains = await api(`/accounts/${accountId}/workers/domains`);
  const apex = workerDomains.result?.find((d) => d.hostname === 'beautiful-vegan.com');
  if (apex) {
    await api(`/accounts/${accountId}/workers/domains/${apex.id}`, 'DELETE');
    console.log('Removed worker domain binding for beautiful-vegan.com');
  }
  for (const name of ['beautiful-vegan.com', 'www.beautiful-vegan.com']) {
    await api(`/accounts/${accountId}/pages/projects/${project}/domains`, 'POST', { name });
  }
  await api(`/accounts/${accountId}/pages/projects/${project}/domains`);
}

if (action === 'deploy') {
  await api(`/accounts/${accountId}/pages/projects/${project}/deployments`, 'POST', {
    branch: 'main',
  });
}
