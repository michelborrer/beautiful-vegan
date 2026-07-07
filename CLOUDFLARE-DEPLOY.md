# Deploy Beautiful Vegan to Cloudflare Pages

## Option A: Direct Upload (Easiest - 5 minutes)

### 1. Go to Cloudflare Dashboard
- Sign in at https://dash.cloudflare.com
- Go to **Workers & Pages** in the left sidebar
- Click **Create application** > **Pages** > **Upload assets**

### 2. Create Project
- Project name: `beautiful-vegan`
- Click **Create project**

### 3. Upload Files
- Click **Upload a folder**
- Select the contents of the `dist/` folder (not the dist folder itself — select all files inside it)
- OR: Upload the `beautiful-vegan-dist.zip` file and extract
- Click **Deploy site**

### 4. Your site is live
- You'll get a URL like `https://beautiful-vegan.pages.dev`

---

## Option B: Git Push (Recommended for future updates)

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial launch"
git remote add origin https://github.com/YOUR_USERNAME/beautiful-vegan.git
git push -u origin main
```

### 2. Connect to Cloudflare Pages
- In Cloudflare dashboard: **Workers & Pages** > **Create** > **Pages**
- Click **Connect to Git**
- Select your GitHub repo
- Build settings:
  - Framework preset: **None**
  - Build command: `npm run build`
  - Build output directory: `dist`
- Click **Save and Deploy**

Future pushes to GitHub will auto-deploy.

---

## Step 5: Add Custom Domain (beautiful-vegan.com)

1. In your Pages project, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter `beautiful-vegan.com`
4. Cloudflare will give you DNS records to add
5. Add them in your domain registrar's DNS settings
6. Wait for SSL certificate to provision (usually 1-5 minutes)

---

## Step 6: Configure 301 Redirects

In your Pages project, go to **Redirects** and add these rules:

```
# Redirect HTTP to HTTPS (Cloudflare does this automatically with "Always Use HTTPS")

# Old domain redirects (if migrating)
# /old-page /new-page.html 301

# Redirect trailing slash versions to .html
/about/ /about.html 301
/contact/ /contact.html 301
/brands/ /brands.html 301
/guides/ /guides.html 301
/documentaries/ /documentaries.html 301
/newsletter/ /newsletter.html 301
/privacy-policy/ /privacy-policy.html 301
/reviews/skincare/ /reviews/skincare.html 301
/reviews/makeup/ /reviews/makeup.html 301
/reviews/haircare/ /reviews/haircare.html 301

# Wildcard for subdirectories
/reviews/skincare/*/ /reviews/skincare/:splat.html 301
/reviews/makeup/*/ /reviews/makeup/:splat.html 301
/reviews/haircare/*/ /reviews/haircare/:splat.html 301
/brands/*/ /brands/:splat.html 301
/guides/*/ /guides/:splat.html 301
/ingredients/*/ /ingredients/:splat.html 301
```

**Note:** Cloudflare Pages uses `_redirects` file OR dashboard rules. Use the dashboard approach above.

---

## Step 7: Verify Everything Works

Checklist:
- [ ] Homepage loads at `https://beautiful-vegan.com/`
- [ ] Internal links work (click through to article pages)
- [ ] Images load on article pages
- [ ] No 404s on main navigation
- [ ] Sitemap loads at `/sitemap.xml`
- [ ] Robots.txt loads at `/robots.txt`

---

## What I Need From You

1. **Your Cloudflare account email** (or create one at cloudflare.com — free)
2. **Your domain** — do you own `beautiful-vegan.com`? If not, what's the domain?
3. **DNS access** — can you add DNS records at your domain registrar?

Once you confirm, I can prepare the exact DNS records you'll need to add.
