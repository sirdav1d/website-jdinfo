/** @format */

import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { buildPageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/site-config';
import { WhatsAppButton, WhatsAppButtonsRow } from '@/components/whatsapp-button';

export const metadata: Metadata = buildPageMetadata({
	title: 'Contato',
	description:
		'Entre em contato com a JDINFO para solicitar orçamento, tirar dúvidas e falar com a equipe técnica em Niterói.',
	path: '/contato',
	keywords: ['contato jdinfo', 'whatsapp atendimento especializado', 'endereço jdinfo'],
});

export default function ContactPage() {
	return (
			<main className='flex-1'>
				<section className='py-12 md:py-16 bg-jdblue text-white'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='text-center max-w-3xl mx-auto'>
							<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
								Entre em Contato
							</h1>
							<p className='text-gray-200 mb-6'>
								Estamos prontos para atender você. Entre em contato conosco para
								tirar dúvidas, solicitar orçamentos ou agendar um atendimento.
							</p>
						</div>
					</div>
				</section>

				<section className='py-16 px-4 md:px-6'>
					<div className='container mx-auto max-w-6xl'>
						<div className='grid md:grid-cols-2 gap-12'>
							<div>
								<h2 className='text-2xl font-bold mb-6 text-jdblue'>
									Informações de Contato
								</h2>

								<div className='space-y-6'>
									<div>
										<h3 className='text-xl font-semibold mb-4 text-jdblue'>
											Nosso endereço
										</h3>
										<div className='space-y-4'>
											<div className='flex items-start'>
												<MapPin className='h-5 w-5 text-jdred mr-3 mt-0.5 shrink-0' />
												<p className='text-gray-600'>
													R. Gen. Pereira da Silva, 146 - Loja 107 - Icaraí,
													Niterói - RJ, 24220-031
												</p>
											</div>
										</div>
									</div>

									<div>
										<h3 className='text-xl font-semibold mb-4 text-jdblue'>
											Telefones e WhatsApp
										</h3>
										<div className='space-y-4'>
											<div className='flex items-center'>
												<Phone className='h-5 w-5 text-jdred mr-3 shrink-0' />
												<p className='text-gray-600'>
													<a
														href='https://wa.me/5521971386634'
														className='hover:text-jdred'>
														(21) 97138-6634
													</a>
												</p>
											</div>
											<div className='flex items-center'>
												<Phone className='h-5 w-5 text-jdred mr-3 shrink-0' />
												<p className='text-gray-600'>
													<a
														href='https://wa.me/5521996643987'
														className='hover:text-jdred'>
														(21) 99664-3987
													</a>
												</p>
											</div>
										</div>
									</div>

									<div className='space-y-4'>
										<div className='flex items-center'>
											<Mail className='h-5 w-5 text-jdred mr-3 shrink-0' />
											<p className='text-gray-600'>
												<a
													href='mailto:contato@jdinfo.com.br'
													className='hover:text-jdred'>
													contato@jdinfo.com.br
												</a>
											</p>
										</div>
										<div className='flex items-start'>
											<Clock className='h-5 w-5 text-jdred mr-3 mt-0.5 shrink-0' />
											<div>
												<p className='text-gray-600'>
													Segunda a Sexta: 9h às 18h
												</p>
												<p className='text-gray-600'>Sábado: 9h às 13h</p>
												<p className='text-gray-600'>
													Domingo e Feriados: Fechado
												</p>
											</div>
										</div>
									</div>

									<div className='space-y-4'>
										<h3 className='text-xl font-semibold text-jdblue'>
											Atendimento via WhatsApp
										</h3>
										<p className='text-gray-600'>
											Para maior comodidade, você também pode entrar em contato
											conosco diretamente pelo WhatsApp. Basta clicar em um dos
											botões abaixo:
										</p>
										<WhatsAppButtonsRow size='default' />
									</div>
								</div>
							</div>

							<div>
								<h2 className='text-2xl font-bold mb-6 text-jdblue'>
									Envie uma Mensagem
								</h2>
								<form className='space-y-4'>
									<div>
										<label
											htmlFor='name'
											className='block text-sm font-medium text-gray-700 mb-1'>
											Nome completo
										</label>
										<Input
											id='name'
											type='text'
											placeholder='Digite seu nome completo'
											className='w-full'
										/>
									</div>
									<div>
										<label
											htmlFor='email'
											className='block text-sm font-medium text-gray-700 mb-1'>
											E-mail
										</label>
										<Input
											id='email'
											type='email'
											placeholder='Digite seu e-mail'
											className='w-full'
										/>
									</div>
									<div>
										<label
											htmlFor='phone'
											className='block text-sm font-medium text-gray-700 mb-1'>
											Telefone
										</label>
										<Input
											id='phone'
											type='tel'
											placeholder='Digite seu telefone'
											className='w-full'
										/>
									</div>
									<div>
										<label
											htmlFor='service'
											className='block text-sm font-medium text-gray-700 mb-1'>
											Serviço de interesse
										</label>
										<select
											id='service'
											className='w-full px-3 py-2 border border-gray-300/40 rounded-md shadow-sm focus:outline-none focus:ring-jdred focus:border-jdred/40'>
											<option value=''>Selecione o serviço</option>
											<option value='playstation'>
												Atendimento PlayStation (PS4/PS5)
											</option>
											<option value='xbox'>Atendimento Xbox</option>
											<option value='nintendo'>Atendimento Nintendo</option>
											<option value='apple'>Atendimento linha Apple</option>
											<option value='notebook'>Atendimento Notebook</option>
											<option value='pc-gamer'>Atendimento PC Gamer</option>
											<option value='gopro'>Atendimento GoPro</option>
											<option value='jbl'>Atendimento caixas JBL</option>
											<option value='smartphone'>Atendimento Smartphone</option>
											<option value='outro'>Outro</option>
										</select>
									</div>
									<div>
										<label
											htmlFor='message'
											className='block text-sm font-medium text-gray-700 mb-1'>
											Mensagem
										</label>
										<textarea
											id='message'
											rows={5}
											placeholder='Descreva seu problema ou dúvida'
											className='w-full px-3 py-2 border border-gray-300/40 rounded-md shadow-sm focus:outline-none focus:ring-jdred focus:border-jdred/40'></textarea>
									</div>
									<div>
										<Button
											type='submit'
											className='w-full bg-jdblue hover:bg-jdblue/90'>
											Enviar mensagem
										</Button>
									</div>
									<p className='text-xs text-gray-500 text-center'>
										Ao enviar, você concorda com nossa política de privacidade.
									</p>
								</form>
							</div>
						</div>
					</div>
				</section>

				<section className='py-16 px-4 md:px-6 bg-gray-50'>
					<div className='container mx-auto max-w-4xl'>
						<h2 className='text-2xl font-bold mb-8 text-jdblue text-center'>
							Nosso endereço em Niterói
						</h2>
						<div className='bg-white rounded-lg overflow-hidden shadow-sm'>
							<div className='relative h-72'>
								<iframe
									src={siteConfig.maps.embedUrl}
									width='100%'
									height='100%'
									style={{ border: 0 }}
									allowFullScreen
									loading='lazy'
									referrerPolicy='no-referrer-when-downgrade'
									className='absolute inset-0'></iframe>
							</div>
							<div className='p-6'>
								<h3 className='text-xl font-semibold mb-2 text-jdblue'>
									Endereço presencial
								</h3>
								<p className='text-gray-600 mb-6'>
									R. Gen. Pereira da Silva, 146 - Loja 107 - Icaraí, Niterói -
									RJ, 24220-031
								</p>
								<div className='flex flex-col sm:flex-row gap-3'>
									<WhatsAppButton
										href='https://wa.me/5521971386634'
										size='default'
										className='w-full sm:w-auto'>
										WhatsApp 97138-6634
									</WhatsAppButton>
									<WhatsAppButton
										href='https://wa.me/5521996643987'
										size='default'
										className='w-full sm:w-auto'>
										WhatsApp 99664-3987
									</WhatsAppButton>
									<a
										href={siteConfig.maps.directionsUrl}
										target='_blank'
										rel='noopener noreferrer'
										className='w-full sm:w-auto'>
										<Button className='w-full bg-jdred hover:bg-jdred/90'>
											Como Chegar
										</Button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className='py-16 px-4 md:px-6 bg-jdblue text-white'>
					<div className='container mx-auto max-w-6xl'>
						<div className='text-center'>
							<h2 className='text-3xl font-bold mb-4'>
								Precisa de atendimento especializado?
							</h2>
							<p className='text-gray-200 mb-8 max-w-2xl mx-auto'>
								Entre em contato conosco hoje mesmo para um diagnóstico gratuito
								e descubra como podemos ajudar a recuperar seu equipamento com
								rapidez e qualidade.
							</p>
							<WhatsAppButtonsRow className='justify-center' />
						</div>
					</div>
				</section>
			</main>
	);
}


