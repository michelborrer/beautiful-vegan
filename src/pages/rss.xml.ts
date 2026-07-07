import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const siteUrl = 'https://beautiful-vegan.com';
  const now = new Date().toUTCString();

  const items = [
    {
      title: '7 Best Vegan Moisturizers for Every Skin Type in 2025',
      link: `${siteUrl}/reviews/skincare/best-vegan-moisturizers-2025`,
      description: 'We tested 23 vegan moisturizers over 8 weeks. These 7 actually delivered on their promises — from budget drugstore picks to luxury splurges.',
      pubDate: 'Mon, 15 May 2025 00:00:00 GMT',
      category: 'Skincare',
    },
    {
      title: 'The Best Vegan Lipsticks That Actually Last All Day',
      link: `${siteUrl}/reviews/makeup/best-vegan-lipsticks`,
      description: 'Tired of reapplying your lipstick every hour? These 6 vegan formulas stay put through coffee, lunch, and everything in between.',
      pubDate: 'Sat, 10 May 2025 00:00:00 GMT',
      category: 'Makeup',
    },
    {
      title: '5 Vegan Shampoo Bars That Replace Your Bottle',
      link: `${siteUrl}/reviews/haircare/best-vegan-shampoo-bars`,
      description: 'These concentrated bars clean better than liquid shampoo, last 3x longer, and come with zero plastic packaging.',
      pubDate: 'Mon, 05 May 2025 00:00:00 GMT',
      category: 'Haircare',
    },
    {
      title: 'Is The Ordinary Cruelty-Free in 2025? The Full Breakdown',
      link: `${siteUrl}/brands/is-the-ordinary-cruelty-free`,
      description: 'The Ordinary is beloved by skincare enthusiasts, but is it truly cruelty-free? We dig into parent company policies, certifications, and what actually matters.',
      pubDate: 'Mon, 28 Apr 2025 00:00:00 GMT',
      category: 'Brands',
    },
    {
      title: 'Avocado for Skin: Benefits, Science & Best Products',
      link: `${siteUrl}/ingredients/avocado-for-skin`,
      description: 'Discover why avocado oil is a skincare powerhouse. We break down the science, share DIY recipes, and recommend the best avocado-based products.',
      pubDate: 'Thu, 01 May 2025 00:00:00 GMT',
      category: 'Ingredients',
    },
    {
      title: 'Cruelty-Free Living: Your Complete Guide',
      link: `${siteUrl}/guides/cruelty-free-living`,
      description: 'A comprehensive guide to cruelty-free living — from understanding what "cruelty-free" really means to building a fully ethical beauty routine.',
      pubDate: 'Thu, 01 May 2025 00:00:00 GMT',
      category: 'Guides',
    },
  ];

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Beautiful Vegan</title>
    <link>${siteUrl}</link>
    <description>Honest reviews of the best vegan and cruelty-free beauty products. Since 2009.</description>
    <language>en</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${siteUrl}/images/logo.png</url>
      <title>Beautiful Vegan</title>
      <link>${siteUrl}</link>
    </image>
    ${items.map(item => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.link}</guid>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${item.pubDate}</pubDate>
      <dc:creator>Lyn Rose</dc:creator>
      <category>${item.category}</category>
    </item>`).join('')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: { 'Content-Type': 'application/xml' },
  });
};

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
