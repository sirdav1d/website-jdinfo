/** @format */

import Image from 'next/image';
import type { ReactNode } from 'react';

interface BlogArticleLayoutProps {
	children: ReactNode;
	title?: string;
	date?: string;
	author?: string;
	category?: string;
	mainImage?: string;
	mainImageAlt?: string;
	excerpt?: string;
}

export default function BlogArticleLayout({
	children,
	title,
	date,
	author,
	category,
	mainImage,
	mainImageAlt,
	excerpt,
}: BlogArticleLayoutProps) {
	const metaParts = [date, category, author].filter(Boolean);

	return (
		<div className='max-w-4xl mx-auto px-4 py-6 md:py-12'>
			<article className='blog-article'>
				{title ? (
					<>
						{metaParts.length ? (
							<div className='article-meta'>{metaParts.join(' • ')}</div>
						) : null}
						<h1>{title}</h1>
						{excerpt ? (
							<p className='article-excerpt'>{excerpt}</p>
						) : null}
						{mainImage ? (
							<div className='image-container h-[400px]'>
								<Image
									src={mainImage}
									alt={mainImageAlt || title}
									fill
									className='object-cover'
									sizes='(max-width: 768px) 100vw, 896px'
									priority
								/>
							</div>
						) : null}
					</>
				) : null}
				{children}
			</article>
		</div>
	);
}
