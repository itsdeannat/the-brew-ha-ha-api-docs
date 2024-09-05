import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Brew Ha Ha API Docs',
			social: {
				github: 'https://github.com/itsdeannat/the-brew-ha-ha-api-docs.git',
			},
			sidebar: [
				{
					label: 'Start here',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting started', slug: 'guides/api' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'How to get a collection of products', slug: 'guides/get-products'},
						{ label: 'How to get a product by ID', slug: 'guides/get-product-by-id'}
					]
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
