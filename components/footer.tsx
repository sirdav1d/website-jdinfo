/** @format */

import Image from 'next/image';
import Link from 'next/link';

const serviceLinks = [
	{
		href: '/blog/playstation-niteroi',
		label: 'PlayStation e consoles',
	},
	{ href: '/blog/xbox-niteroi', label: 'Xbox e consoles' },
	{
		href: '/blog/nintendo-niteroi',
		label: 'Nintendo Switch',
	},
	{
		href: '/blog/iphone-niteroi',
		label: 'Linha Apple',
	},
	{
		href: '/blog/notebooks-apple-niteroi',
		label: 'Notebook Apple',
	},
	{
		href: '/blog/notebook-niteroi',
		label: 'Notebooks',
	},
	{
		href: '/blog/pc-gamer-niteroi',
		label: 'PC Gamer',
	},
	{ href: '/blog/gopro-niteroi', label: 'Câmeras de ação' },
	{
		href: '/blog/caixas-jbl-niteroi',
		label: 'Áudio portátil',
	},
	{ href: '/blog/tablet-niteroi', label: 'Tablets' },
];

const companyLinks = [
	{ href: '/sobre', label: 'Sobre Nós' },
	{ href: '/servicos', label: 'Serviços' },
	{ href: '/contato', label: 'Contato' },
	{ href: '/blog', label: 'Blog' },
	{ href: '/rastreamento', label: 'Rastreamento' },
	{ href: '/politica-de-privacidade', label: 'Política de Privacidade' },
];

export default function Footer() {
	return (
		<footer className='border-t border-jdblue/40 bg-jdblue text-white'>
			<div className='container mx-auto px-4 py-8 md:px-6 md:py-12'>
				<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
					<div className='space-y-4'>
						<Link
							href='/'
							className='flex items-center space-x-2'>
							<div className='relative h-12 w-30'>
								<Image
									src='/logo.png'
									alt='JDINFO Logo'
									fill
									sizes='120px'
									className='object-cover size-full'
								/>
							</div>
						</Link>
						<p className='text-sm text-gray-300'>
							Atendimento especializado em Niterói com mais de 20 anos
							de experiência no mercado.
						</p>
						<div className='flex space-x-4'>
							<a
								href='#'
								className='text-gray-300 hover:text-jdred'
								aria-label='Facebook'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
									className='h-5 w-5'
									aria-hidden='true'>
									<path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path>
								</svg>
							</a>
							<a
								href='#'
								className='text-gray-300 hover:text-jdred'
								aria-label='Instagram'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
									className='h-5 w-5'
									aria-hidden='true'>
									<rect
										x='2'
										y='2'
										width='20'
										height='20'
										rx='5'
										ry='5'></rect>
									<path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
									<line
										x1='17.5'
										y1='6.5'
										x2='17.51'
										y2='6.5'></line>
								</svg>
							</a>
							<a
								href='#'
								className='text-gray-300 hover:text-jdred'
								aria-label='Twitter'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
									className='h-5 w-5'
									aria-hidden='true'>
									<path d='M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z'></path>
								</svg>
							</a>
							<a
								href='#'
								className='text-gray-300 hover:text-jdred'
								aria-label='LinkedIn'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
									className='h-5 w-5'
									aria-hidden='true'>
									<path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
									<rect
										x='2'
										y='9'
										width='4'
										height='12'></rect>
									<circle
										cx='4'
										cy='4'
										r='2'></circle>
								</svg>
							</a>
						</div>
					</div>

					<div>
						<h3 className='mb-3 text-sm font-semibold uppercase tracking-wider text-white md:mb-4'>
							Serviços
						</h3>
						<ul className='space-y-1 md:space-y-2'>
							{serviceLinks.map((item) => (
								<li key={item.href}>
									<Link
										href={item.href}
										className='block py-1 text-sm text-gray-300 hover:text-jdred'>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className='mb-4 text-sm font-semibold uppercase tracking-wider text-white'>
							Empresa
						</h3>
						<ul className='space-y-2'>
							{companyLinks.map((item) => (
								<li key={item.href}>
									<Link
										href={item.href}
										className='text-sm text-gray-300 hover:text-jdred'>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className='mb-4 text-sm font-semibold uppercase tracking-wider text-white'>
							Contato
						</h3>
						<ul className='space-y-2'>
							<li className='flex items-start'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='mr-2 mt-0.5 h-5 w-5 shrink-0 text-jdred'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									aria-hidden='true'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
									/>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
									/>
								</svg>
								<div>
									<p className='text-sm font-medium text-gray-300'>Endereço:</p>
									<p className='text-sm text-gray-300'>
										R. Gen. Pereira da Silva, 146 - Loja 107 - Icaraí, Niterói -
										RJ, 24220-031
									</p>
								</div>
							</li>
							<li className='flex items-start'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='mr-2 mt-0.5 h-5 w-5 shrink-0 text-jdred'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									aria-hidden='true'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
									/>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
									/>
								</svg>
								<div>
									<p className='text-sm font-medium text-gray-300'>
										Referência:
									</p>
									<p className='text-sm text-gray-300'>
										Atendimento presencial em Icaraí, com fácil acesso pela
										região da Rua Gavião Peixoto.
									</p>
								</div>
							</li>
							<li className='flex items-start'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='mr-2 mt-0.5 h-5 w-5 shrink-0 text-jdred'
									fill='currentColor'
									viewBox='0 0 24 24'
									aria-hidden='true'>
									<path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
								</svg>
								<div>
									<p className='text-sm text-gray-300'>WhatsApp:</p>
									<p className='text-sm text-gray-300'>(21) 97138-6634</p>
									<p className='text-sm text-gray-300'>(21) 99664-3987</p>
								</div>
							</li>
							<li className='flex items-start'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='mr-2 mt-0.5 h-5 w-5 shrink-0 text-jdred'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									aria-hidden='true'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
									/>
								</svg>
								<p className='text-sm text-gray-300'>contato@jdinfo.com.br</p>
							</li>
						</ul>
					</div>
				</div>
				<div className='mt-8 border-t border-jdblue/40 pt-8 text-center'>
					<p className='text-sm text-gray-400'>
						&copy; {new Date().getFullYear()} JDINFO. Todos os direitos
						reservados.
					</p>
				</div>
			</div>
		</footer>
	);
}
