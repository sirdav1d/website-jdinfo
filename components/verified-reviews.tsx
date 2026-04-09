/** @format */

import { ArrowUpRight, Quote, Star } from 'lucide-react';

const reviews = [
	{
		date: '15 jan 2025',
		rating: 5,
		service: 'Conserto de PlayStation 5',
		review:
			'Meu PS5 estava com problema no leitor. A equipe explicou a causa com clareza, alinhou o prazo e entregou o console funcionando sem enrolação.',
	},
	{
		date: '22 fev 2025',
		rating: 5,
		service: 'Reparo de MacBook Pro',
		review:
			'Levei em outra assistência e me passaram um cenário muito mais caro. Na JDINFO a leitura foi mais precisa e o reparo ficou viável.',
	},
	{
		date: '07 mar 2025',
		rating: 4,
		service: 'Troca de tela de iPhone',
		review:
			'Atendimento ágil, serviço bem feito e comunicação boa durante o processo. A qualidade compensou o investimento.',
	},
];

const featuredReview = reviews[0];
const secondaryReviews = reviews.slice(1);

export default function VerifiedReviews() {
	return (
		<section className='relative overflow-hidden bg-secondary/35 px-4 py-18 md:px-6 lg:px-8 lg:py-24'>
			<div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(8,17,34,0.06),transparent_32%)]' />

			<div className='container relative z-10 mx-auto max-w-6xl'>
				<div className='mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between'>
					<div className='max-w-3xl'>
						<h2 className='text-balance text-3xl font-semibold tracking-[-0.04em] text-jdblue md:text-4xl'>
							Avaliações reais que ajudam a transformar reputação em confiança
							concreta.
						</h2>
					</div>

					<div className='rounded-3xl border border-border/40 bg-card/95 px-5 py-4 shadow-[0_18px_40px_rgba(8,17,34,0.08)]'>
						<div className='flex items-center gap-3'>
							<div className='flex text-amber-400'>
								{[...Array(5)].map((_, index) => (
									<Star
										key={index}
										className='h-5 w-5 fill-current'
										aria-hidden='true'
									/>
								))}
							</div>
							<div>
								<div className='text-lg font-semibold text-jdblue'>
									4,9/5 no Google
								</div>
								<div className='text-sm text-muted-foreground'>
									1.136 avaliações verificadas
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]'>
					<article className='rounded-4xl bg-primary p-8 text-primary-foreground shadow-[0_32px_90px_rgba(8,17,34,0.2)] md:p-10'>
						<div className='flex flex-wrap items-center justify-between gap-3'>
							<div className='text-sm text-white/55'>{featuredReview.date}</div>
						</div>

						<div className='mt-8'>
							<Quote
								className='h-10 w-10 text-accent'
								aria-hidden='true'
							/>
							<p className='mt-6 max-w-2xl text-xl leading-9 text-white/86 md:text-2xl md:leading-10'>
								“{featuredReview.review}”
							</p>
						</div>

						<div className='mt-8 border-t border-white/40 pt-6'>
							<div className='text-sm font-semibold uppercase tracking-[0.18em] text-white/55'>
								Serviço
							</div>
							<div className='mt-2 text-lg font-semibold text-white'>
								{featuredReview.service}
							</div>
						</div>
					</article>

					<div className='grid gap-4'>
						{secondaryReviews.map((review) => (
							<article
								key={review.service}
								className='rounded-[1.7rem] border border-border/40 bg-card/96 p-6 shadow-[0_20px_50px_rgba(8,17,34,0.08)]'>
								<div className='flex items-center justify-between gap-4'>
									<div className='text-sm font-semibold uppercase tracking-[0.18em] text-jdblue/55'>
										{review.service}
									</div>
									<div className='flex text-amber-400'>
										{[...Array(review.rating)].map((_, index) => (
											<Star
												key={index}
												className='h-4 w-4 fill-current'
												aria-hidden='true'
											/>
										))}
									</div>
								</div>
								<p className='mt-4 text-sm leading-7 text-muted-foreground md:text-base'>
									{review.review}
								</p>
								<div className='mt-5 text-xs font-medium uppercase tracking-[0.18em] text-jdblue/45'>
									{review.date}
								</div>
							</article>
						))}

						<a
							href='https://g.page/jdinfo'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center gap-2 px-1 text-sm font-semibold text-jdblue transition-colors hover:text-accent'>
							Ver reputação completa no Google
							<ArrowUpRight className='h-4 w-4' />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

