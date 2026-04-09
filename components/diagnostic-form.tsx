/** @format */

'use client';

import type React from 'react';

import { useState } from 'react';
import Link from 'next/link';
import {
	ArrowRight,
	BadgeCheck,
	CheckCircle2,
	MessageCircle,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export default function DiagnosticForm() {
	const [submitted, setSubmitted] = useState(false);
	const [privacyAccepted, setPrivacyAccepted] = useState(false);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!privacyAccepted) {
			return;
		}

		setSubmitted(true);
	};

	if (submitted) {
		return (
			<Card className='overflow-hidden rounded-4xl border border-border/40 bg-card/95 p-0 shadow-[0_30px_90px_rgba(8,17,34,0.12)] backdrop-blur'>
				<div className='p-8 md:p-10 lg:p-12'>
					<div className='max-w-3xl'>
						<div className='inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-jdblue/70'>
							<BadgeCheck
								className='h-4 w-4 text-accent'
								aria-hidden='true'
							/>
							Solicitação recebida
						</div>
						<h2 className='mt-6 text-3xl font-semibold tracking-[-0.04em] text-jdblue md:text-4xl'>
							Seu diagnóstico entrou na fila de atendimento.
						</h2>
						<p className='mt-4 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg'>
							Nossa equipe vai usar os dados enviados para orientar o melhor
							próximo passo e retornar pelos canais informados.
						</p>
					</div>

					<div className='mt-8 rounded-[1.6rem] border border-border/40 bg-secondary/35 p-6'>
						<div className='mb-4 flex items-center gap-3'>
							<div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/12 text-green-600'>
								<CheckCircle2
									className='h-6 w-6'
									aria-hidden='true'
								/>
							</div>
							<div>
								<div className='text-sm font-semibold uppercase tracking-[0.18em] text-jdblue/60'>
									Próximo passo
								</div>
								<div className='text-xl font-semibold text-jdblue'>
									Acompanhar o contato da equipe
								</div>
							</div>
						</div>
						<p className='max-w-2xl text-sm leading-7 text-muted-foreground md:text-base'>
							Se preferir acelerar a conversa, você também pode chamar
							diretamente no WhatsApp e mencionar que o formulário já foi
							enviado.
						</p>
					</div>

					<div className='mt-6 flex flex-col gap-3 sm:flex-row'>
						<Button
							asChild
							variant='accent'
							className='h-auto rounded-full px-6 py-4'>
							<a href='https://wa.me/5521971386634'>
								<MessageCircle className='h-4 w-4' />
								Falar no WhatsApp
							</a>
						</Button>
						<Button
							asChild
							variant='outline'
							className='h-auto rounded-full px-6 py-4'>
							<Link href='/contato'>
								Ver página de contato
								<ArrowRight className='h-4 w-4' />
							</Link>
						</Button>
					</div>

					<Button
						variant='ghost'
						className='mt-4 h-auto rounded-full px-0 text-sm text-muted-foreground hover:bg-transparent hover:text-jdblue'
						onClick={() => {
							setSubmitted(false);
							setPrivacyAccepted(false);
						}}>
						Enviar uma nova solicitação
					</Button>
				</div>
			</Card>
		);
	}

	return (
		<Card className='overflow-hidden rounded-xl border border-border/40 bg-card/95 p-0 shadow-[0_30px_90px_rgba(8,17,34,0.12)] backdrop-blur'>
			<div className='p-8 md:p-10'>
				<div className='mb-8 max-w-3xl'>
					<h2 className='text-3xl font-semibold tracking-[-0.04em] text-jdblue md:text-4xl'>
						Comece pelo diagnóstico gratuito e receba uma triagem técnica
						inicial.
					</h2>
				</div>

				<form
					onSubmit={handleSubmit}
					className='space-y-5'>
					<div className='grid gap-4 md:grid-cols-2'>
						<div className='space-y-2'>
							<Label
								htmlFor='name'
								className='text-sm font-medium text-jdblue'>
								Nome completo
							</Label>
							<Input
								id='name'
								name='name'
								type='text'
								autoComplete='name'
								placeholder='Digite seu nome'
								required
								className='h-12 rounded-xl border-border/40 bg-card px-4 text-base'
							/>
						</div>

						<div className='space-y-2'>
							<Label
								htmlFor='phone'
								className='text-sm font-medium text-jdblue'>
								Telefone ou WhatsApp
							</Label>
							<Input
								id='phone'
								name='phone'
								type='tel'
								autoComplete='tel'
								placeholder='(21) 99999-9999'
								required
								className='h-12 rounded-xl border-border/40 bg-card px-4 text-base'
							/>
						</div>
					</div>

					<div className='space-y-2'>
						<Label
							htmlFor='email'
							className='text-sm font-medium text-jdblue'>
							E-mail
						</Label>
						<Input
							id='email'
							name='email'
							type='email'
							autoComplete='email'
							placeholder='seu@email.com'
							required
							className='h-12 rounded-xl border-border/40 bg-card px-4 text-base'
						/>
					</div>

					<div className='grid gap-4 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]'>
						<div className='space-y-2'>
							<Label
								htmlFor='service'
								className='text-sm font-medium text-jdblue'>
								Serviço de interesse
							</Label>
							<Select
								name='service'
								required>
								<SelectTrigger
									id='service'
									className='h-12 w-full rounded-xl border-border/40 bg-card px-4 text-base shadow-xs data-[size=default]:!h-12'>
									<SelectValue placeholder='Selecione o serviço' />
								</SelectTrigger>
								<SelectContent className='border-border/40'>
									<SelectItem value='playstation'>
										Conserto de PlayStation
									</SelectItem>
									<SelectItem value='xbox'>Conserto de Xbox</SelectItem>
									<SelectItem value='nintendo'>Conserto de Nintendo</SelectItem>
									<SelectItem value='apple'>Conserto de linha Apple</SelectItem>
									<SelectItem value='notebook'>Conserto de Notebook</SelectItem>
									<SelectItem value='pc-gamer'>Conserto de PC Gamer</SelectItem>
									<SelectItem value='gopro'>Conserto de GoPro</SelectItem>
									<SelectItem value='jbl'>Conserto de caixas JBL</SelectItem>
									<SelectItem value='smartphone'>
										Conserto de Smartphone
									</SelectItem>
									<SelectItem value='outro'>Outro</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<div className='space-y-2'>
							<Label
								htmlFor='equipment'
								className='text-sm font-medium text-jdblue'>
								Equipamento
							</Label>
							<Input
								id='equipment'
								name='equipment'
								type='text'
								placeholder='Ex.: MacBook Pro 14, PS5, Notebook Dell'
								className='h-12 rounded-xl border-border/40 bg-card px-4 text-base'
							/>
						</div>
					</div>

					<div className='space-y-2'>
						<Label
							htmlFor='problem'
							className='text-sm font-medium text-jdblue'>
							O que está acontecendo com o equipamento?
						</Label>
						<Textarea
							id='problem'
							name='problem'
							rows={5}
							placeholder='Conte os sintomas, quando o defeito começou e qualquer detalhe que ajude na triagem.'
							className='rounded-[1.2rem] border-border/40 bg-card px-4 py-3 text-base'
						/>
					</div>

					<div className='flex items-start gap-3 border-t border-border/40 pt-2'>
						<Checkbox
							id='privacy-consent'
							checked={privacyAccepted}
							onCheckedChange={(checked) =>
								setPrivacyAccepted(checked === true)
							}
							className='mt-1 size-5 rounded-md border-border/40 data-[state=checked]:border-accent data-[state=checked]:bg-accent'
						/>
						<Label
							htmlFor='privacy-consent'
							className='text-sm font-normal leading-6 text-muted-foreground'>
							Aceito a política de privacidade e o retorno da equipe.
						</Label>
					</div>

					<div>
						<Button
							type='submit'
							variant='accent'
							disabled={!privacyAccepted}
							className='h-auto w-full justify-center rounded-full px-7 py-4 text-base disabled:translate-y-0 disabled:shadow-none'>
							Solicitar diagnóstico gratuito
							<ArrowRight className='h-4 w-4' />
						</Button>
					</div>
				</form>
			</div>
		</Card>
	);
}
