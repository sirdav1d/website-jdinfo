/** @format */

import { Button } from '@/components/ui/button';
import { WhatsAppLogo } from '@/components/whatsapp-button';

export default function FloatingChat() {
	return (
		<div className='fixed right-4 bottom-4 z-50 md:right-6 md:bottom-6'>
			<Button
				asChild
				variant='whatsapp'
				size='icon-lg'
				className='h-12 w-12 rounded-full shadow-lg md:h-14 md:w-14'>
				<a
					href='https://wa.me/5521971386634'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Abrir conversa no WhatsApp'>
					<WhatsAppLogo className='h-5 w-5 md:h-6 md:w-6' />
				</a>
			</Button>
		</div>
	);
}

