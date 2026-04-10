/** @format */

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
	{
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground hover:bg-primary/92',
				accent:
					'bg-accent text-accent-foreground shadow-[0_12px_28px_rgba(254,0,0,0.18)] hover:-translate-y-0.5 hover:bg-[#ff1f1f] hover:shadow-[0_20px_40px_rgba(254,0,0,0.26)] active:translate-y-0 active:bg-[#e00000] focus-visible:ring-accent/30',
				whatsapp:
					'bg-[#25D366] text-white shadow-[0_12px_28px_rgba(37,211,102,0.24)] hover:-translate-y-0.5 hover:bg-[#1ebe57] hover:shadow-[0_20px_40px_rgba(37,211,102,0.32)] active:translate-y-0 active:bg-[#18a94c] focus-visible:ring-[#25D366]/35',
				destructive:
					'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
				outline:
					'border-border bg-card text-foreground shadow-xs hover:bg-secondary hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
				secondary:
					'bg-secondary text-secondary-foreground hover:bg-secondary/85',
				ghost:
					'hover:bg-secondary hover:text-foreground dark:hover:bg-secondary/70',
				link: 'text-accent underline-offset-4 hover:underline',
			},
			size: {
				default: 'h-9 px-4 py-2 has-[>svg]:px-3',
				sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
				lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
				icon: 'size-9',
				'icon-sm': 'size-8',
				'icon-lg': 'size-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
);

function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<'button'> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot : 'button';

	return (
		<Comp
			data-slot='button'
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
