/** @format */

import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { homepageFaqItems } from '@/lib/homepage-faq';

const supportPoints = [
	{
		label: 'Contato rápido',
		value: ['(21) 97138-6634', '(21) 99664-3987'],
		icon: Phone,
	},
	{
		label: 'Horários',
		value: ['Segunda a sexta: 9h às 18h', 'Sábado: 9h às 13h'],
		icon: Clock,
	},
	{
		label: 'Atendimento presencial',
		value: ['R. Gen. Pereira da Silva, 146 - Loja 107 - Icaraí, Niterói - RJ.'],
		icon: MapPin,
	},
];

export default function FAQSection() {
	return (
		<section
			id='faq'
			className='scroll-mt-24 bg-secondary/30 px-4 py-18 md:px-6 lg:px-8 lg:py-24'>
			<div className='container mx-auto max-w-6xl'>
				<div className='mb-12 max-w-3xl text-left'>
					<h2 className='mb-4 text-balance text-3xl font-semibold tracking-[-0.04em] text-jdblue md:text-4xl'>
						Perguntas frequentes para esclarecer prazos, garantia, diagnóstico e
						atendimento.
					</h2>
				</div>

				<div className='grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]'>
					<div className='rounded-4xl border border-border/40 bg-card/96 p-6 shadow-[0_24px_60px_rgba(8,17,34,0.08)] md:p-8'>
						<Accordion
							type='single'
							collapsible
							className='w-full'>
							{homepageFaqItems.map((faq, index) => (
								<AccordionItem
									key={faq.question}
									value={`item-${index}`}
									className='border-border/40'>
									<AccordionTrigger className='text-left text-base text-jdblue hover:text-jdred md:text-lg'>
										{faq.question}
									</AccordionTrigger>
									<AccordionContent className='text-sm leading-7 text-muted-foreground md:text-base'>
										{faq.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>

					<div className='flex h-full flex-col justify-between rounded-4xl bg-primary p-8 text-primary-foreground shadow-[0_30px_80px_rgba(8,17,34,0.2)]'>
						<div>
							<h3 className='text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl'>
								Fale com a equipe e confirme o melhor próximo passo para o seu
								equipamento.
							</h3>
						</div>

						<div className='mt-8'>
							{supportPoints.map(({ label, value, icon: Icon }) => (
								<div
									key={label}
									className='border-b border-white/40 py-5 first:pt-0 last:border-b-0 last:pb-0'>
									<div className='mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/60'>
										<Icon
											className='h-4 w-4 text-accent'
											aria-hidden='true'
										/>
										{label}
									</div>
									<div className='space-y-1 text-sm leading-7 text-white/82'>
										{value.map((line) => (
											<p key={line}>{line}</p>
										))}
									</div>
								</div>
							))}
						</div>

						<div className='mt-8 flex flex-col gap-3'>
							<Button
								asChild
								size='lg'
								variant='accent'
								className='rounded-full'>
								<a href='https://wa.me/5521971386634'>
									<MessageCircle className='h-5 w-5' />
									Falar pelo WhatsApp
								</a>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
