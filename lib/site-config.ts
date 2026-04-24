/** @format */

export const siteConfig = {
	name: 'JD Info — Loja de Informática',
	shortName: 'JDINFO',
	brandName: 'JDINFO',
	description:
		'Loja de informática em Niterói com computadores, acessórios, componentes, upgrades, diagnóstico e atendimento presencial em Icaraí.',
	url: 'https://jdinfoblog.jdinformatica.com.br',
	locale: 'pt_BR',
	themeColor: '#081122',
	ogImage: '/placeholder-logo.png',
	gtmId: 'GTM-KN4QFMP2',
	email: 'contato@jdinfo.com.br',
	phones: {
		primary: '(21) 97138-6634',
		secondary: '(21) 99664-3987',
	},
	address: {
		streetAddress: 'R. Gen. Pereira da Silva, 146 - Loja 107 - Icaraí',
		addressLocality: 'Niterói',
		addressRegion: 'RJ',
		postalCode: '24220-031',
		addressCountry: 'BR',
	},
	maps: {
		directionsUrl:
			'https://www.google.com/maps/search/?api=1&query=R.%20Gen.%20Pereira%20da%20Silva%2C%20146%20-%20Loja%20107%20-%20Icara%C3%AD%2C%20Niter%C3%B3i%20-%20RJ%2C%2024220-031',
		embedUrl:
			'https://www.google.com/maps?q=R.%20Gen.%20Pereira%20da%20Silva%2C%20146%20-%20Loja%20107%20-%20Icara%C3%AD%2C%20Niter%C3%B3i%20-%20RJ%2C%2024220-031&output=embed',
	},
	socials: {
		facebook: 'https://www.facebook.com/jdinformatica',
		instagram: 'https://www.instagram.com/jdinformatica',
	},
	defaultKeywords: [
		'loja de informática',
		'informática',
		'computadores',
		'Niterói',
		'PlayStation',
		'Xbox',
		'Nintendo',
		'Apple',
		'Notebook Apple',
		'iPhone',
		'notebook',
		'PC Gamer',
		'GoPro',
		'JBL',
		'smartphone',
	],
} as const;

export function toAbsoluteUrl(path = '/') {
	if (path.startsWith('http://') || path.startsWith('https://')) {
		return path;
	}

	return `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`;
}
