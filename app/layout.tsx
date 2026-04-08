/** @format */

import type React from 'react';
import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import FloatingChat from '@/components/floating-chat';
import MobileOptimization from '@/components/mobile-optimization';
import SEOSchema from '@/components/seo-schema';
import Script from 'next/script';

const geist = Geist({
	subsets: ['latin'],
	display: 'swap',
	preload: true,
	variable: '--font-geist',
});

export const metadata: Metadata = {
	metadataBase: new URL('https://jdinfoblog.jdinformatica.com.br'),
	title: {
		default: 'JDINFO - AssistÃªncia TÃ©cnica Especializada em NiterÃ³i',
		template: '%s | JDINFO - AssistÃªncia TÃ©cnica NiterÃ³i',
	},
	description:
		'AssistÃªncia tÃ©cnica especializada em conserto de PlayStation, Xbox, Nintendo, Apple, Notebooks, PC Gamer, GoPro, JBL e Smartphones em NiterÃ³i. Mais de 18 anos de experiÃªncia.',
	keywords: [
		'assistÃªncia tÃ©cnica',
		'conserto',
		'reparo',
		'NiterÃ³i',
		'PlayStation',
		'Xbox',
		'Nintendo',
		'Apple',
		'MacBook',
		'iPhone',
		'notebook',
		'PC Gamer',
		'GoPro',
		'JBL',
		'smartphone',
		'assistÃªncia tÃ©cnica NiterÃ³i',
		'conserto PlayStation NiterÃ³i',
		'conserto Xbox NiterÃ³i',
		'conserto Nintendo NiterÃ³i',
		'conserto MacBook NiterÃ³i',
		'conserto iPhone NiterÃ³i',
		'conserto notebook NiterÃ³i',
		'conserto PC Gamer NiterÃ³i',
		'conserto GoPro NiterÃ³i',
		'conserto JBL NiterÃ³i',
		'conserto tablet NiterÃ³i',
	],
	authors: [{ name: 'JDINFO', url: 'https://jdinfoblog.jdinformatica.com.br' }],
	creator: 'JDINFO',
	publisher: 'JDINFO',
	verification: {
		google: 'wpEc8PTNxWKIrlh-0Wy4hQxmpITPcvTyH4S0j_kdITk',
	},
	alternates: {
		canonical: 'https://jdinfoblog.jdinformatica.com.br',
	},
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		type: 'website',
		locale: 'pt_BR',
		url: 'https://jdinfoblog.jdinformatica.com.br',
		siteName: 'JDINFO',
		title: 'JDINFO - AssistÃªncia TÃ©cnica Especializada em NiterÃ³i',
		description:
			'AssistÃªncia tÃ©cnica especializada em conserto de PlayStation, Xbox, Nintendo, Apple, Notebooks, PC Gamer, GoPro, JBL e Smartphones em NiterÃ³i.',
		images: [
			{
				url: 'https://jdinfoblog.jdinformatica.com.br/images/logo-full.png',
				width: 1200,
				height: 630,
				alt: 'JDINFO - AssistÃªncia TÃ©cnica Especializada',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'JDINFO - AssistÃªncia TÃ©cnica Especializada em NiterÃ³i',
		description:
			'AssistÃªncia tÃ©cnica especializada em conserto de PlayStation, Xbox, Nintendo, Apple, Notebooks, PC Gamer, GoPro, JBL e Smartphones em NiterÃ³i.',
		images: ['https://jdinfoblog.jdinformatica.com.br/images/logo-full.png'],
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
	category: 'AssistÃªncia TÃ©cnica',
	generator: 'v0.app',
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 5,
	themeColor: '#081122',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='pt-BR'
			className={geist.variable}
			suppressHydrationWarning>
			<head>
				{/* Google Tag Manager */}
				<Script
					id='gtm-script'
					strategy='afterInteractive'
					dangerouslySetInnerHTML={{
						__html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KN4QFMP2');
            `,
					}}
				/>
				{/* End Google Tag Manager */}

				{/* Preload critical resources */}
				{/* <link
					rel='preload'
					href='/images/logo-full.png'
					as='image'
				/>
				<link
					rel='preload'
					href='/images/store-image.png'
					as='image'
				/> */}

				{/* DNS Prefetch */}
				{/* <link
					rel='dns-prefetch'
					href='//fonts.googleapis.com'
				/>
				<link
					rel='dns-prefetch'
					href='//images.unsplash.com'
				/> */}
				<link
					rel='dns-prefetch'
					href='//www.googletagmanager.com'
				/>
			</head>
			<body
				className={geist.className}
				suppressHydrationWarning>
				{/* Google Tag Manager (noscript) */}
				<noscript>
					<iframe
						src='https://www.googletagmanager.com/ns.html?id=GTM-KN4QFMP2'
						height='0'
						width='0'
						style={{ display: 'none', visibility: 'hidden' }}
					/>
				</noscript>
				{/* End Google Tag Manager (noscript) */}

				{/* Organization Schema */}
				<SEOSchema type='organization' />

				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem>
					<MobileOptimization />
					{children}
					<FloatingChat />
				</ThemeProvider>
			</body>
		</html>
	);
}
