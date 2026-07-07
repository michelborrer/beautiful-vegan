import fs from 'node:fs';

const toml = fs.readFileSync(
  `${process.env.APPDATA}/xdg.config/.wrangler/config/default.toml`,
  'utf8',
);
const token = toml.match(/oauth_token = "([^"]+)"/)?.[1];
if (!token) throw new Error('No wrangler oauth token found');

const zoneId = '1201fe229b7508e85b77a9722d883784';
const pagesTarget = 'beautiful-vegan.pages.dev';

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

const records = await api(`/zones/${zoneId}/dns_records`);
if (!records.success) process.exit(1);

console.log('\nCurrent DNS records:');
for (const r of records.result) {
  console.log(`${r.type.padEnd(6)} ${r.name.padEnd(30)} → ${r.content}`);
}

const apexName = 'beautiful-vegan.com';
const wwwName = 'www.beautiful-vegan.com';
const apex = records.result.find((r) => r.name === apexName && r.type === 'CNAME');
const www = records.result.find((r) => r.name === wwwName);

if (!apex) {
  await api(`/zones/${zoneId}/dns_records`, 'POST', {
    type: 'CNAME',
    name: '@',
    content: pagesTarget,
    proxied: true,
    ttl: 1,
  });
} else if (apex.content !== pagesTarget) {
  await api(`/zones/${zoneId}/dns_records/${apex.id}`, 'PATCH', {
    content: pagesTarget,
    proxied: true,
  });
}

if (www && (www.type !== 'CNAME' || www.content !== pagesTarget)) {
  for (const r of records.result.filter((x) => x.name === wwwName)) {
    await api(`/zones/${zoneId}/dns_records/${r.id}`, 'DELETE');
  }
  await api(`/zones/${zoneId}/dns_records`, 'POST', {
    type: 'CNAME',
    name: 'www',
    content: pagesTarget,
    proxied: true,
    ttl: 1,
  });
} else if (!www) {
  await api(`/zones/${zoneId}/dns_records`, 'POST', {
    type: 'CNAME',
    name: 'www',
    content: pagesTarget,
    proxied: true,
    ttl: 1,
  });
}

const updated = await api(`/zones/${zoneId}/dns_records`);
if (updated.success) {
  console.log('\nUpdated DNS records:');
  for (const r of updated.result) {
    console.log(`${r.type.padEnd(6)} ${r.name.padEnd(30)} → ${r.content}`);
  }
}
