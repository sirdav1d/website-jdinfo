/** @format */

import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';

const lastModified = new Date('2026-04-09T00:00:00.000Z');

const sitemapEntries: Array<{
	path: string;
	changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
	priority: number;
}> = [
	{ path: '/', changeFrequency: 'weekly', priority: 1 },
	{ path: '/servicos', changeFrequency: 'weekly', priority: 0.9 },
	{
		path: '/servicos/video-games-niteroi',
		changeFrequency: 'monthly',
		priority: 0.8,
	},
	{ path: '/sobre', changeFrequency: 'monthly', priority: 0.7 },
	{ path: '/contato', changeFrequency: 'monthly', priority: 0.8 },
	{ path: '/rastreamento', changeFrequency: 'weekly', priority: 0.7 },
	{
		path: '/politica-de-privacidade',
		changeFrequency: 'yearly',
		priority: 0.3,
	},
	{ path: '/blog', changeFrequency: 'weekly', priority: 0.8 },
	{
		path: '/blog/playstation-niteroi',
		changeFrequency: 'monthly',
		priority: 0.7,
	},
	{
		path: '/blog/xbox-niteroi',
		changeFrequency: 'monthly',
		priority: 0.7,
	},
	{
		path: '/blog/nintendo-niteroi',
		changeFrequency: 'monthly',
		priority: 0.7,
	},
	{
		path: '/blog/notebooks-apple-niteroi',
		changeFrequency: 'monthly',
		priority: 0.7,
	},
	{
		path: '/blog/iphone-niteroi',
		changeFrequency: 'monthly',
		priority: 0.7,
	},
	{
		path: '/blog/notebook-niteroi',
		changeFrequency: 'monthly',
		priority: 0.7,
	},
	{
		path: '/blog/pc-gamer-niteroi',
		changeFrequency: 'monthly',
		priority: 0.7,
	},
	{
		path: '/blog/gopro-niteroi',
		changeFrequency: 'monthly',
		priority: 0.7,
	},
	{
		path: '/blog/caixas-jbl-niteroi',
		changeFrequency: 'monthly',
		priority: 0.7,
	},
	{
		path: '/blog/tablet-niteroi',
		changeFrequency: 'monthly',
		priority: 0.7,
	},
];

export default function sitemap(): MetadataRoute.Sitemap {
	return sitemapEntries.map((entry) => ({
		url: `${siteConfig.url}${entry.path}`,
		lastModified,
		changeFrequency: entry.changeFrequency,
		priority: entry.priority,
	}));
}
