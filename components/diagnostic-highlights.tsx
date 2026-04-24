/** @format */

import { Clock3, MapPin, ShieldCheck } from 'lucide-react';

const diagnosticHighlights = [
	{
		title: 'Avaliação sem ruído',
		description:
			'Avaliação objetiva antes de qualquer avanço.',
		icon: ShieldCheck,
	},
	{
		title: 'Prazo alinhado',
		description:
			'Processo claro para você saber quando vale seguir e o que esperar.',
		icon: Clock3,
	},
	{
		title: 'Atendimento em Icaraí',
		description:
			'Presencial e digital, com equipe preparada para diferentes perfis de equipamento.',
		icon: MapPin,
	},
];

export default function DiagnosticHighlights() {
	return (
		<div className='grid gap-3 md:grid-cols-3'>
			{diagnosticHighlights.map(({ title, description, icon: Icon }) => (
				<div
					key={title}
					className='rounded-3xl border border-border/40 bg-card/90 p-4 shadow-[0_16px_40px_rgba(8,17,34,0.06)] backdrop-blur md:p-5'>
					<div className='mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-accent'>
						<Icon
							className='h-5 w-5'
							aria-hidden='true'
						/>
					</div>
					<h2 className='text-base font-semibold text-jdblue'>{title}</h2>
					<p className='mt-2 text-sm leading-6 text-muted-foreground'>
						{description}
					</p>
				</div>
			))}
		</div>
	);
}
