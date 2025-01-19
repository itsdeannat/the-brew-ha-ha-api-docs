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
						{ label: 'About the API', slug: 'guides/about-the-api'},
						{ label: 'Quick start guide', slug: 'guides/quickstart' }
					],
				},
				{
					label: 'Feature guides',
					items: [
						{ label: 'Authentication', slug: 'guides/authentication' },
						{ label: 'How to get a collection of products', slug: 'guides/get-products' },
						{ label: 'How to get a product by ID', slug: 'guides/get-product-by-id' },
						{ label: 'How to create an order', slug: 'guides/create-an-order' },
						{ label: 'How to get an order', slug: 'guides/get-order-by-id' }
					]
				},
				{
					label: ' API reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
