/** @format */

import { siteConfig } from '@/lib/site-config';

export default function LocationsSection() {
	return (
		<section className='relative overflow-hidden bg-background px-4 py-18 md:px-6 lg:px-8 lg:py-24'>
			<div className='absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(229,234,243,0.75),transparent_30%)]' />

			<div className='container relative z-10 mx-auto max-w-6xl'>
				<div className='mb-12 max-w-3xl'>
					<h2 className='text-balance text-3xl font-semibold tracking-[-0.04em] text-jdblue md:text-4xl'>
						Atendimento presencial em Icaraí com informação prática para chegar,
						falar e resolver.
					</h2>
				</div>

				<div className='rounded-4xl border border-border/40 bg-card/96 p-4 shadow-[0_24px_70px_rgba(8,17,34,0.1)]'>
					<div className='relative h-[360px] overflow-hidden rounded-[1.6rem] md:h-[520px]'>
						<iframe
							src={siteConfig.maps.embedUrl}
							width='100%'
							height='100%'
							style={{ border: 0 }}
							allowFullScreen
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
							className='absolute inset-0'
						></iframe>
					</div>
				</div>
			</div>
		</section>
	);
}

