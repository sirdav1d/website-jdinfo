/** @format */

import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: siteConfig.name,
		short_name: siteConfig.shortName,
		description: siteConfig.description,
		start_url: '/',
		display: 'standalone',
		background_color: '#ffffff',
		theme_color: siteConfig.themeColor,
		lang: 'pt-BR',
		orientation: 'portrait-primary',
		icons: [
			{
				src: '/placeholder-logo.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: '/placeholder-logo.png',
				sizes: '512x512',
				type: 'image/png',
			},
		],
	};
}
