/** @format */

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsAppButton } from '@/components/whatsapp-button';

const navigationItems = [
	{ href: '/', label: 'HOME' },
	{ href: '/sobre', label: 'SOBRE NÓS' },
	{ href: '/servicos', label: 'SERVIÇOS' },
	{ href: '/contato', label: 'CONTATO' },
	{ href: '/blog', label: 'BLOG' },
	{ href: '/rastreamento', label: 'RASTREAMENTO' },
];

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isMenuOpen]);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header
			className={`sticky top-0 z-50 w-full border-b border-white/10 bg-background/20 text-foreground backdrop-blur-xl transition-all duration-300 ${
				isScrolled
					? 'bg-background/10 shadow-[0_16px_48px_rgba(8,17,34,0.18)]'
					: ''
			}`}>
			<div className='container mx-auto flex h-18 items-center justify-between gap-4 px-4 md:px-6'>
				<Link
					href='/'
					className='flex items-center space-x-2'>
					<div className='relative h-10 w-32'>
						<Image
							src='/logo.png'
							alt='JDINFO Logo'
							fill
							sizes='128px'
							className='object-contain'
							priority
						/>
					</div>
				</Link>

				<nav className='hidden items-center px-5 py-3 md:flex'>
					<div className='flex items-center space-x-6'>
						{navigationItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className='text-sm font-medium text-foreground/88 transition-colors hover:text-accent'>
								{item.label}
							</Link>
						))}
					</div>
				</nav>

				<div className='hidden min-w-[280px] items-center justify-center md:flex'>
					<div className='flex items-center justify-center gap-5 text-sm font-medium text-foreground/86'>
						<a
							href='https://wa.me/5521971386634'
							className='transition-colors hover:text-accent'>
							(21) 97138-6634
						</a>
						<a
							href='https://wa.me/5521996643987'
							className='transition-colors hover:text-accent'>
							(21) 99664-3987
						</a>
					</div>
				</div>

				<button
					className='text-primary-foreground/92 md:hidden'
					onClick={() => setIsMenuOpen((value) => !value)}
					aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
					aria-expanded={isMenuOpen}
					aria-controls='mobile-menu'>
					{isMenuOpen ? (
						<X className='h-6 w-6' />
					) : (
						<Menu className='h-6 w-6' />
					)}
				</button>
			</div>

			{isMenuOpen && (
				<div
					id='mobile-menu'
					role='navigation'
					aria-label='Menu mobile'
					className='fixed inset-0 top-18 z-50 overflow-y-auto border-t border-border bg-card p-4 text-foreground md:hidden'>
					<nav className='flex flex-col space-y-4'>
						{navigationItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className='text-lg font-medium transition-colors hover:text-accent'
								onClick={() => setIsMenuOpen(false)}>
								{item.label}
							</Link>
						))}

						<div className='flex flex-col space-y-2 pt-4'>
							<Button
								asChild
								variant='outline'
								className='w-full justify-center'>
								<Link
									href='/#diagnostico'
									onClick={() => setIsMenuOpen(false)}>
									Orçamento grátis
								</Link>
							</Button>
							<WhatsAppButton
								href='https://wa.me/5521971386634'
								size='default'
								className='w-full justify-center'>
								WhatsApp 97138-6634
							</WhatsAppButton>
							<WhatsAppButton
								href='https://wa.me/5521996643987'
								size='default'
								className='w-full justify-center'>
								WhatsApp 99664-3987
							</WhatsAppButton>
						</div>
					</nav>
				</div>
			)}
		</header>
	);
}
