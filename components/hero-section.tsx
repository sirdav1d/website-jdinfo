/** @format */

import { HeroVideoDialog } from '@/components/ui/hero-video-dialog';
import { WhatsAppButton } from '@/components/whatsapp-button';

const HERO_VIDEO_SRC = '/video/hero-video.mp4';

const heroStats = [
	{ value: '20+', label: 'anos de mercado' },
	{ value: '1.136', label: 'avaliações verificadas' },
	{ value: '100%', label: 'foco em atendimento consultivo' },
	{ value: '+27 mil', label: 'clientes atendidos' },
];

export default function HeroSection() {
	return (
		<section className='relative overflow-hidden bg-background px-4 py-16 md:px-6 lg:px-8 lg:py-24'>
			<div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(229,234,243,0.95),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(254,0,0,0.08),transparent_28%)]' />
			<div className='absolute inset-0 bg-[linear-gradient(rgba(8,17,34,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(8,17,34,0.06)_1px,transparent_1px)] bg-size-[28px_28px] opacity-[0.28]' />
			<div className='absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent' />

			<div className='container relative z-10 mx-auto max-w-5xl'>
				<div className='space-y-8'>
					<h1 className='max-w-4xl text-balance text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl lg:text-[4.25rem] lg:leading-[0.98]'>
						Loja de Informática em Niterói — Notebooks, PC Gamer e Consoles
					</h1>

					<div className='flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
						<WhatsAppButton
							href='https://wa.me/5521971386634'
							className='h-auto rounded-full px-7 py-4 text-base shadow-[0_18px_40px_rgba(37,211,102,0.22)] hover:shadow-[0_24px_52px_rgba(37,211,102,0.3)]'>
							Falar com especialista
						</WhatsAppButton>
					</div>

					<HeroVideoDialog
						className='block size-full'
						animationStyle='from-center'
						videoSrc={HERO_VIDEO_SRC}
						thumbnailSrc='/images/hero-placeholder.png'
						thumbnailAlt='Hero Video'
					/>

					<div className='grid justify-self-center gap-3 pt-6 sm:grid-cols-4'>
						{heroStats.map((item) => (
							<div key={item.label}>
								<div className='text-2xl font-semibold tracking-[-0.05em] text-jdblue md:text-3xl'>
									{item.value}
								</div>
								<p className='mt-1 text-sm text-muted-foreground'>
									{item.label}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
