/** @format */

import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ButtonProps = React.ComponentProps<typeof Button>;

type WhatsAppButtonProps = {
	href: string;
	children: ReactNode;
	className?: string;
	size?: ButtonProps['size'];
	target?: ComponentPropsWithoutRef<'a'>['target'];
	rel?: ComponentPropsWithoutRef<'a'>['rel'];
};

type WhatsAppButtonsRowProps = {
	className?: string;
	buttonClassName?: string;
	size?: ButtonProps['size'];
	target?: ComponentPropsWithoutRef<'a'>['target'];
	rel?: ComponentPropsWithoutRef<'a'>['rel'];
	contacts?: Array<{
		href: string;
		label: string;
	}>;
};

const defaultContacts = [
	{
		href: 'https://wa.me/5521971386634',
		label: 'WhatsApp 97138-6634',
	},
	{
		href: 'https://wa.me/5521996643987',
		label: 'WhatsApp 99664-3987',
	},
];

export function WhatsAppLogo({ className }: { className?: string }) {
	return (
		<svg
			viewBox='0 0 24 24'
			aria-hidden='true'
			className={cn('size-4', className)}
			fill='currentColor'>
			<path d='M20.52 3.48A11.8 11.8 0 0012.08 0C5.64 0 .4 5.24.4 11.68c0 2.06.54 4.08 1.56 5.87L0 24l6.61-1.73a11.65 11.65 0 005.47 1.39h.01c6.44 0 11.68-5.24 11.68-11.68 0-3.12-1.22-6.05-3.25-8.5zm-8.44 18.2h-.01a9.68 9.68 0 01-4.94-1.35l-.35-.21-3.93 1.03 1.05-3.84-.23-.4a9.7 9.7 0 01-1.49-5.23C2.18 6.42 6.83 1.77 12.1 1.77c2.59 0 5.02 1.01 6.85 2.84a9.63 9.63 0 012.83 6.85c-.01 5.36-4.38 9.72-9.7 9.72zm5.27-7.24c-.29-.14-1.72-.84-1.99-.94-.27-.1-.46-.14-.65.15-.19.29-.75.93-.92 1.12-.17.19-.34.21-.63.07-.29-.14-1.22-.45-2.33-1.43-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.12-.59.12-.12.29-.31.43-.46.14-.15.19-.26.29-.43.1-.17.05-.31-.02-.45-.07-.14-.65-1.57-.89-2.15-.23-.55-.47-.47-.65-.48h-.55c-.19 0-.49.07-.75.36-.26.29-.98.96-.98 2.35 0 1.39 1.01 2.73 1.15 2.92.14.19 1.98 3.02 4.8 4.23.67.29 1.2.46 1.61.58.68.22 1.3.19 1.79.12.55-.08 1.72-.7 1.96-1.37.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z' />
		</svg>
	);
}

export function WhatsAppButton({
	href,
	children,
	className,
	size = 'lg',
	target,
	rel,
}: WhatsAppButtonProps) {
	return (
		<Button
			asChild
			variant='whatsapp'
			size={size}
			className={className}>
			<a
				href={href}
				target={target}
				rel={rel}>
				<WhatsAppLogo />
				{children}
			</a>
		</Button>
	);
}

export function WhatsAppButtonsRow({
	className,
	buttonClassName,
	size = 'lg',
	target,
	rel,
	contacts = defaultContacts,
}: WhatsAppButtonsRowProps) {
	return (
		<div className={cn('flex flex-col gap-4 sm:flex-row', className)}>
			{contacts.map((contact) => (
				<WhatsAppButton
					key={contact.href}
					href={contact.href}
					size={size}
					target={target}
					rel={rel}
					className={cn('w-full sm:w-auto text-white!', buttonClassName)}>
					{contact.label}
				</WhatsAppButton>
			))}
		</div>
	);
}
