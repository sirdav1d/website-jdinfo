/** @format */

import type { Metadata } from 'next';
import HeroSection from '@/components/hero-section';
import DiagnosticHighlights from '@/components/diagnostic-highlights';
import SpecializedServices from '@/components/specialized-services';
import VerifiedReviews from '@/components/verified-reviews';
import LocationsSection from '@/components/locations-section';
import FAQSection from '@/components/faq-section';
import SEOSchema from '@/components/seo-schema';
import { homepageFaqItems } from '@/lib/homepage-faq';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildPageMetadata({
	title: 'JD Info — Loja de Informática em Niterói',
	description:
		'Loja de informática em Niterói com computadores, acessórios, componentes, upgrades, diagnóstico e atendimento presencial em Icaraí.',
	path: '/',
	keywords: [
		'loja de informática em niterói',
		'computadores em niterói',
		'acessórios de informática',
		'componentes de computador',
		'upgrade pc gamer niterói',
	],
});

export default function Home() {
	return (
		<>
			<SEOSchema
				type='faq'
				data={{ faqs: homepageFaqItems }}
			/>

			<main className='flex-1'>
				<HeroSection />

				<section
					id='diagnostico'
					className='relative overflow-hidden bg-[linear-gradient(180deg,rgba(229,234,243,0.45),rgba(250,250,250,1))] px-4 py-18 md:px-6 lg:px-8 lg:py-24'>
					<div className='absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent' />
					<div className='container mx-auto max-w-5xl'>
						<DiagnosticHighlights />
					</div>
				</section>

				<SpecializedServices />
				<VerifiedReviews />
				<LocationsSection />
				<FAQSection />
			</main>
		</>
	);
}
