/** @format */

import type { Metadata } from 'next';
import { siteConfig, toAbsoluteUrl } from '@/lib/site-config';

type MetadataOptions = {
	title: string;
	description: string;
	path?: string;
	keywords?: string[];
	image?: string;
	type?: 'website' | 'article';
};

export function buildPageMetadata({
	title,
	description,
	path = '/',
	keywords = [],
	image = siteConfig.ogImage,
	type = 'website',
}: MetadataOptions): Metadata {
	const canonical = toAbsoluteUrl(path);
	const absoluteImage = toAbsoluteUrl(image);
	const mergedKeywords = Array.from(
		new Set([...siteConfig.defaultKeywords, ...keywords]),
	);

	return {
		title,
		description,
		keywords: mergedKeywords,
		alternates: {
			canonical,
		},
		openGraph: {
			title,
			description,
			url: canonical,
			siteName: siteConfig.brandName,
			locale: siteConfig.locale,
			type,
			images: [
				{
					url: absoluteImage,
					width: 1200,
					height: 630,
					alt: siteConfig.name,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [absoluteImage],
		},
	};
}
