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
		path: '/servicos/conserto-video-games-niteroi',
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
		path: '/blog/onde-consertar-playstation-niteroi',
		changeFrequency: 'monthly',
		priority: 0.7,
	},
	{
		path: '/blog/onde-consertar-xbox-niteroi',
		changeFrequency: 'monthly',
		priority: 0.7,
	},
	{
		path: '/blog/onde-consertar-nintendo-niteroi',
		changeFrequency: 'monthly',
		priority: 0.7,
	},
	{
		path: '/blog/onde-consertar-macbook-niteroi',
		changeFrequency: 'monthly',
		priority: 0.7,
	},
	{
		path: '/blog/onde-consertar-iphone-niteroi',
		changeFrequency: 'monthly',
		priority: 0.7,
	},
	{
		path: '/blog/onde-consertar-notebook-niteroi',
		changeFrequency: 'monthly',
		priority: 0.7,
	},
	{
		path: '/blog/onde-consertar-pc-gamer-niteroi',
		changeFrequency: 'monthly',
		priority: 0.7,
	},
	{
		path: '/blog/onde-consertar-gopro-niteroi',
		changeFrequency: 'monthly',
		priority: 0.7,
	},
	{
		path: '/blog/onde-consertar-caixas-jbl-niteroi',
		changeFrequency: 'monthly',
		priority: 0.7,
	},
	{
		path: '/blog/onde-consertar-tablet-niteroi',
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
