/** @format */

import Script from 'next/script';
import { siteConfig, toAbsoluteUrl } from '@/lib/site-config';

type BreadcrumbItem = {
	name: string;
	url: string;
};

type FAQItem = {
	question: string;
	answer: string;
};

type SEOData = {
	title?: string;
	description?: string;
	image?: string;
	publishedDate?: string;
	modifiedDate?: string;
	url?: string;
	faqs?: FAQItem[];
	name?: string;
	serviceType?: string;
	breadcrumbs?: BreadcrumbItem[];
};

interface SEOSchemaProps {
	type?: 'organization' | 'article' | 'faq' | 'service' | 'breadcrumb';
	data?: SEOData;
}

export default function SEOSchema({
	type = 'organization',
	data,
}: SEOSchemaProps) {
	const getSchema = () => {
		const baseUrl = siteConfig.url;

		switch (type) {
			case 'organization':
				return {
					'@context': 'https://schema.org',
					'@type': 'Organization',
					name: siteConfig.name,
					description: siteConfig.description,
					url: baseUrl,
					logo: toAbsoluteUrl(siteConfig.ogImage),
					image: toAbsoluteUrl(siteConfig.ogImage),
					telephone: '+55-21-99664-3987',
					email: siteConfig.email,
					address: {
						'@type': 'PostalAddress',
						...siteConfig.address,
					},
					geo: {
						'@type': 'GeoCoordinates',
						latitude: -22.8833,
						longitude: -43.1036,
					},
					openingHours: 'Mo-Fr 08:00-18:00, Sa 08:00-14:00',
					priceRange: '$$',
					serviceArea: {
						'@type': 'GeoCircle',
						geoMidpoint: {
							'@type': 'GeoCoordinates',
							latitude: -22.8833,
							longitude: -43.1036,
						},
						geoRadius: '50000',
					},
					sameAs: [siteConfig.socials.facebook, siteConfig.socials.instagram],
				};

			case 'article':
				return {
					'@context': 'https://schema.org',
					'@type': 'Article',
					headline: data?.title || 'Artigo JDINFO',
					description:
						data?.description ||
						'Artigo sobre assistência técnica especializada',
					image: data?.image || toAbsoluteUrl(siteConfig.ogImage),
					author: {
						'@type': 'Organization',
						name: siteConfig.brandName,
					},
					publisher: {
						'@type': 'Organization',
						name: siteConfig.brandName,
						logo: {
							'@type': 'ImageObject',
							url: toAbsoluteUrl(siteConfig.ogImage),
						},
					},
					datePublished: data?.publishedDate || '2025-01-01',
					dateModified: data?.modifiedDate || '2025-01-01',
					mainEntityOfPage: {
						'@type': 'WebPage',
						'@id': data?.url || baseUrl,
					},
				};

			case 'faq':
				return {
					'@context': 'https://schema.org',
					'@type': 'FAQPage',
					mainEntity:
						data?.faqs?.map((faq) => ({
							'@type': 'Question',
							name: faq.question,
							acceptedAnswer: {
								'@type': 'Answer',
								text: faq.answer,
							},
						})) || [],
				};

			case 'breadcrumb':
				return {
					'@context': 'https://schema.org',
					'@type': 'BreadcrumbList',
					itemListElement:
						data?.breadcrumbs?.map((breadcrumb, index) => ({
							'@type': 'ListItem',
							position: index + 1,
							name: breadcrumb.name,
							item: breadcrumb.url,
						})) || [],
				};

			case 'service':
				return {
					'@context': 'https://schema.org',
					'@type': 'Service',
					name: data?.name || 'Assistência Técnica Especializada',
					description:
						data?.description ||
						'Serviços de reparo e manutenção de eletrônicos',
					provider: {
						'@type': 'Organization',
						name: 'JDINFO',
					},
					areaServed: {
						'@type': 'City',
						name: 'Niterói',
					},
					serviceType: data?.serviceType || 'Assistência Técnica',
				};

			default:
				return {};
		}
	};

	return (
		<Script
			id={`schema-${type}`}
			type='application/ld+json'
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(getSchema()),
			}}
		/>
	);
}
