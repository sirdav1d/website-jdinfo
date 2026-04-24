/** @format */

import { Clock, MapPin, Phone } from 'lucide-react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { homepageFaqItems } from '@/lib/homepage-faq';
import { WhatsAppButton } from '@/components/whatsapp-button';

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
						Perguntas frequentes sobre loja, canais, prazos e pagamento.
					</h2>
				</div>

				<div className='grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]'>
					<div className='rounded-4xl border border-border/40 bg-card/96 p-6 shadow-[0_24px_60px_rgba(8,17,34,0.08)] md:p-8'>
						<Accordion
							defaultValue='item-0'
							type='single'
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

					<div className='flex h-full flex-col rounded-4xl bg-primary p-8 text-primary-foreground shadow-[0_30px_80px_rgba(8,17,34,0.2)] md:p-10'>
						<div>
							<h3 className='max-w-md text-balance text-3xl leading-[1.06] font-semibold tracking-[-0.05em] text-white md:text-[2.5rem]'>
								Fale com a equipe e tire suas dúvidas.
							</h3>
						</div>

						<div className='mt-10'>
							{supportPoints.map(({ label, value, icon: Icon }) => (
								<div
									key={label}
									className='border-b border-white/40 py-6 first:pt-0 last:border-b-0 last:pb-0'>
									<div className='mb-3 flex items-center gap-2.5 text-base font-semibold uppercase tracking-[0.18em] text-white/62'>
										<Icon
											className='h-4.5 w-4.5 text-accent'
											aria-hidden='true'
										/>
										{label}
									</div>
									<div className='space-y-2 text-base leading-8 text-white/84 text-balance'>
										{value.map((line) => (
											<p key={line}>{line}</p>
										))}
									</div>
								</div>
							))}
						</div>

						<div className='mt-10 flex flex-col gap-3'>
							<WhatsAppButton
								href='https://wa.me/5521971386634'
								size='lg'
								className='h-14 rounded-full px-8 text-base font-semibold shadow-[0_16px_36px_rgba(37,211,102,0.24)]'>
								Falar pelo WhatsApp
							</WhatsAppButton>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
