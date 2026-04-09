/** @format */

import Image from 'next/image';
import Link from 'next/link';
import {
	ArrowRight,
	Cpu,
	Gamepad2,
	HardDrive,
	Laptop,
	Speaker,
	TabletSmartphone,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const featuredService = {
	title: 'Notebook, MacBook, Consoles, e PC Gamer',
	description:
		'O núcleo da operação da JDINFO está em diagnóstico de placa, recuperação de desempenho, upgrades e reparos para quem depende do equipamento funcionando de verdade.',
	image: '/images/tablet-repair.png',
	url: '/blog/onde-consertar-notebook-niteroi',
	bullets: [
		'Diagnóstico de hardware com leitura clara',
		'Upgrade, manutenção e reparo com garantia',
		'Atendimento para uso profissional, criativo e gamer',
	],
};

const services = [
	{
		title: 'Conserto de PlayStation',
		description:
			'PS4, PS5 e controles com foco em reparo confiável e orientação objetiva.',
		url: '/blog/onde-consertar-playstation-niteroi',
		icon: Gamepad2,
	},
	{
		title: 'Conserto de Xbox',
		description:
			'Xbox One e Series com triagem técnica e suporte para controles e acessórios.',
		url: '/blog/onde-consertar-xbox-niteroi',
		icon: Cpu,
	},
	{
		title: 'Linha Apple',
		description:
			'iPhone, iPad, MacBook e outros dispositivos Apple com atendimento especializado.',
		url: '/blog/onde-consertar-iphone-niteroi',
		icon: Laptop,
	},
	{
		title: 'Nintendo e portáteis',
		description:
			'Nintendo Switch, tablets e eletrônicos compactos com foco em recuperação funcional.',
		url: '/blog/onde-consertar-nintendo-niteroi',
		icon: TabletSmartphone,
	},
	{
		title: 'GoPro e eletrônicos técnicos',
		description:
			'Câmeras de ação, acessórios e outros equipamentos de uso intenso.',
		url: '/blog/onde-consertar-gopro-niteroi',
		icon: HardDrive,
	},
	{
		title: 'Áudio e caixas JBL',
		description:
			'Reparo de áudio portátil com avaliação objetiva de custo x benefício.',
		url: '/blog/onde-consertar-caixas-jbl-niteroi',
		icon: Speaker,
	},
];

export default function SpecializedServices() {
	return (
		<section className='relative overflow-hidden px-4 py-18 md:px-6 lg:px-8 lg:py-24'>
			<div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(250,250,250,1),rgba(238,242,247,0.55))]' />

			<div className='container relative z-10 mx-auto max-w-6xl'>
				<div className='mb-12 max-w-3xl'>
					<h2 className='text-balance text-3xl font-semibold tracking-[-0.04em] text-jdblue md:text-4xl'>
						Atuação especializada para os equipamentos que exigem diagnóstico e
						reparo confiável.
					</h2>
				</div>

				<div className='grid gap-6 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)]'>
					<div className='relative overflow-hidden rounded-[2.2rem] border border-border/40 bg-primary text-primary-foreground shadow-[0_32px_90px_rgba(8,17,34,0.18)]'>
						<Image
							src={featuredService.image}
							alt={featuredService.title}
							fill
							className='object-cover object-left brightness-[0.9] saturate-[0.92]'
							sizes='(max-width: 1024px) 100vw, 52vw'
							priority={false}
						/>
						<div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(8,17,34,0.12)_0%,rgba(8,17,34,0.28)_30%,rgba(8,17,34,0.64)_68%,rgba(8,17,34,0.95)_100%)]' />
						<div className='absolute inset-0 bg-[radial-gradient(circle_at_22%_76%,rgba(8,17,34,0.88),transparent_38%),radial-gradient(circle_at_78%_18%,rgba(8,17,34,0.24),transparent_28%)]' />
						<div className='absolute inset-x-0 bottom-0 h-52 bg-linear-to-t from-[#081122] via-[#081122]/72 to-transparent' />

						<div className='relative z-10 flex h-full min-h-[430px] flex-col justify-end p-8 md:p-10'>
							<div className='max-w-xl'>
								<h3 className='max-w-lg text-balance text-3xl font-semibold tracking-[-0.04em] text-white [text-shadow:0_10px_35px_rgba(0,0,0,0.35)] md:text-4xl 2xl:text-6xl'>
									{featuredService.title}
								</h3>
							</div>

							<Link
								href={featuredService.url}
								className='mt-10 flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-accent group'>
								Saiba mais
								<ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
							</Link>
						</div>
					</div>

					<div className='grid gap-4 sm:grid-cols-2'>
						{services.map(({ title, description, url, icon: Icon }) => (
							<Link
								key={title}
								href={url}
								className='group rounded-[1.7rem] border border-border/40 bg-card/96 p-6 shadow-[0_22px_60px_rgba(8,17,34,0.08)] transition-transform duration-300 hover:-translate-y-1 hover:border-jdblue/40 hover:shadow-[0_28px_70px_rgba(8,17,34,0.12)]'>
								<div className='flex h-full flex-col'>
									<div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-accent'>
										<Icon
											className='h-5 w-5'
											aria-hidden='true'
										/>
									</div>
									<h3 className='mt-5 text-xl font-semibold tracking-[-0.03em] text-jdblue'>
										{title}
									</h3>
									<p className='mt-3 flex-1 text-sm leading-7 text-muted-foreground'>
										{description}
									</p>
									<div className='mt-5 inline-flex items-center gap-2 text-sm font-semibold text-jdblue transition-colors group-hover:text-accent'>
										Ver detalhes
										<ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>

				<div className='mt-10 text-center'>
					<Button
						asChild
						variant='outline'
						size='lg'
						className='rounded-full border-jdblue/40 bg-card px-7 shadow-[0_16px_40px_rgba(8,17,34,0.06)] hover:border-jdblue/40 hover:text-jdblue'>
						<Link href='/servicos'>Ver todos os serviços</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
