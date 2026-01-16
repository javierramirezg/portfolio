import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
	const baseUrl = site?.href || 'https://example.com';
	
	// Get all work projects
	const workProjects = await getCollection('work');
	
	// Static pages
	const staticPages = [
		{ url: '', changefreq: 'daily', priority: '1.0', lastmod: new Date().toISOString() },
		{ url: 'about/', changefreq: 'monthly', priority: '0.8', lastmod: new Date().toISOString() },
		{ url: 'work/', changefreq: 'weekly', priority: '0.9', lastmod: new Date().toISOString() },
	];
	
	// Dynamic pages from work projects
	const dynamicPages = workProjects.map((project) => ({
		url: `work/${project.id}/`,
		changefreq: 'monthly',
		priority: '0.7',
		lastmod: project.data.publishDate.toISOString(),
	}));
	
	// Combine all pages
	const allPages = [...staticPages, ...dynamicPages];
	
	// Generate sitemap XML
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(
	(page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
).join('\n')}
</urlset>`.trim();
	
	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
		},
	});
};
