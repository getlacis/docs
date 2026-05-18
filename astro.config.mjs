// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLlmsTxt from 'starlight-llms-txt';

// https://astro.build/config
export default defineConfig({
	site: 'https://lacisjs.dev',
	integrations: [
		starlight({
			title: 'Lacis',
			plugins: [starlightLlmsTxt()],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Lyciaa/lacis' }],
			defaultLocale: 'root',
			locales: {
				root: { label: 'English', lang: 'en' },
				fr: { label: 'Français', lang: 'fr' },
			},
			sidebar: [
				{ label: 'Getting Started', slug: 'getting-started' },
				{
					label: 'Core',
					items: [
						{ label: 'Routing', slug: 'core/routing' },
						{ label: 'Request & Response', slug: 'core/request-response' },
						{ label: 'Middleware', slug: 'core/middleware' },
					],
				},
				{
					label: 'Features',
					items: [
						{ label: 'Validation', slug: 'features/validation' },
						{ label: 'CORS', slug: 'features/cors' },
						{ label: 'Rate Limiting', slug: 'features/rate-limiting' },
						{ label: 'Caching', slug: 'features/caching' },
						{ label: 'SSE', slug: 'features/sse' },
						{ label: 'OpenAPI', slug: 'features/openapi' },
					],
				},
				{
					label: 'Deployment',
					items: [
						{ label: 'Node.js', slug: 'deployment/node' },
						{ label: 'Bun', slug: 'deployment/bun' },
						{ label: 'Vercel', slug: 'deployment/vercel' },
						{ label: 'Netlify', slug: 'deployment/netlify' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Configuration', slug: 'reference/configuration' },
						{ label: 'create-lacis', slug: 'reference/create-lacis' },
						{ label: 'CLI', slug: 'reference/cli' },
						{ label: 'API', slug: 'reference/api' },
					],
				},
			],
		}),
	],
});
