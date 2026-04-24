/** @format */

import type React from 'react';
import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';
import FloatingChat from '@/components/floating-chat';
import SEOSchema from '@/components/seo-schema';
import Script from 'next/script';
import { siteConfig, toAbsoluteUrl } from '@/lib/site-config';

const geist = Geist({
	subsets: ['latin'],
	display: 'swap',
	preload: true,
	variable: '--font-geist',
});

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: `${siteConfig.name} em Niterói`,
		template: `%s | ${siteConfig.name}`,
	},
	description: `${siteConfig.description} Mais de 20 anos de experiência.`,
	keywords: [
		...siteConfig.defaultKeywords,
		'atendimento especializado Niterói',
		'atendimento PlayStation Niterói',
		'atendimento Xbox Niterói',
		'atendimento Nintendo Niterói',
		'atendimento Notebook Apple Niterói',
		'atendimento iPhone Niterói',
		'atendimento notebook Niterói',
		'atendimento PC Gamer Niterói',
		'atendimento GoPro Niterói',
		'atendimento JBL Niterói',
		'atendimento tablet Niterói',
	],
	authors: [{ name: siteConfig.brandName, url: siteConfig.url }],
	creator: siteConfig.brandName,
	publisher: siteConfig.brandName,
	manifest: '/manifest.webmanifest',
	icons: {
		icon: [{ url: '/favicon.webp', type: 'image/webp' }],
		shortcut: [{ url: '/favicon.webp', type: 'image/webp' }],
	},
	verification: {
		google: 'wpEc8PTNxWKIrlh-0Wy4hQxmpITPcvTyH4S0j_kdITk',
	},
	alternates: {
		canonical: siteConfig.url,
	},
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		type: 'website',
		locale: siteConfig.locale,
		url: siteConfig.url,
		siteName: siteConfig.brandName,
		title: `${siteConfig.name} em Niterói`,
		description: siteConfig.description,
		images: [
			{
				url: toAbsoluteUrl(siteConfig.ogImage),
				width: 1200,
				height: 630,
				alt: siteConfig.name,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: `${siteConfig.name} em Niterói`,
		description: siteConfig.description,
		images: [toAbsoluteUrl(siteConfig.ogImage)],
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	category: 'Loja de Informática',
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 5,
	themeColor: siteConfig.themeColor,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='pt-BR'
			className={geist.variable}>
			<head>
				<Script
					id='gtm-script'
					strategy='afterInteractive'
					dangerouslySetInnerHTML={{
						__html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${siteConfig.gtmId}');
            `,
					}}
				/>
				<link
					rel='dns-prefetch'
					href='//www.googletagmanager.com'
				/>
			</head>
			<body className={geist.className}>
				<noscript>
					<iframe
						src={`https://www.googletagmanager.com/ns.html?id=${siteConfig.gtmId}`}
						height='0'
						width='0'
						style={{ display: 'none', visibility: 'hidden' }}
					/>
				</noscript>
				<SEOSchema type='organization' />
				<Header />
				{children}
				<Footer />
				<FloatingChat />
			</body>
		</html>
	);
}
