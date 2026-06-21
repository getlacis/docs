// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightLlmsTxt from "starlight-llms-txt";
import starlightThemeTerminal from "starlight-theme-terminal";

// https://astro.build/config
export default defineConfig({
  site: "https://lacis.lycia.dev",
  integrations: [
    starlight({
      title: "Lacis",
      plugins: [starlightThemeTerminal(), starlightLlmsTxt()],
      head: [
        {
          tag: "link",
          attrs: {
            rel: "alternate",
            type: "text/plain",
            title: "LLMs.txt",
            href: "/llms.txt",
          },
        },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Lyciaa/lacis",
        },
      ],
      defaultLocale: "root",
      locales: {
        root: { label: "English", lang: "en" },
        fr: { label: "Français", lang: "fr" },
      },
      sidebar: [
        {
          label: "Getting Started",
          slug: "getting-started",
          translations: { fr: "Démarrage rapide" },
        },
        {
          label: "Core",
          translations: { fr: "Fondamentaux" },
          items: [
            {
              label: "Routing",
              slug: "core/routing",
              translations: { fr: "Routage" },
            },
            {
              label: "Request & Response",
              slug: "core/request-response",
              translations: { fr: "Request & Response" },
            },
            {
              label: "Middleware",
              slug: "core/middleware",
              translations: { fr: "Middleware" },
            },
          ],
        },
        {
          label: "Features",
          translations: { fr: "Fonctionnalités" },
          items: [
            {
              label: "Validation",
              slug: "features/validation",
              translations: { fr: "Validation" },
            },
            {
              label: "CORS",
              slug: "features/cors",
              translations: { fr: "CORS" },
            },
            {
              label: "Rate Limiting",
              slug: "features/rate-limiting",
              translations: { fr: "Rate Limiting" },
            },
            {
              label: "Caching",
              slug: "features/caching",
              translations: { fr: "Caching" },
            },
            { label: "SSE", slug: "features/sse", translations: { fr: "SSE" } },
            {
              label: "Streaming",
              slug: "features/streaming",
              translations: { fr: "Streaming" },
            },
            {
              label: "OpenAPI",
              slug: "features/openapi",
              translations: { fr: "OpenAPI" },
            },
          ],
        },
        {
          label: "Deployment",
          translations: { fr: "Déploiement" },
          items: [
            {
              label: "Node.js",
              slug: "deployment/node",
              translations: { fr: "Node.js" },
            },
            {
              label: "Bun",
              slug: "deployment/bun",
              translations: { fr: "Bun" },
            },
            {
              label: "Vercel",
              slug: "deployment/vercel",
              translations: { fr: "Vercel" },
            },
            {
              label: "Netlify",
              slug: "deployment/netlify",
              translations: { fr: "Netlify" },
            },
            {
              label: "Cloudflare Workers",
              slug: "deployment/cloudflare",
              translations: { fr: "Cloudflare Workers" },
            },
          ],
        },
        {
          label: "Guides",
          translations: { fr: "Guides" },
          items: [
            {
              label: "Migrating from Express",
              slug: "guides/migrating-from-express",
              translations: { fr: "Migration depuis Express" },
            },
            {
              label: "Error Handling",
              slug: "guides/error-handling",
              translations: { fr: "Gestion des erreurs" },
            },
            {
              label: "Testing",
              slug: "guides/testing",
              translations: { fr: "Tests" },
            },
          ],
        },
        {
          label: "Reference",
          translations: { fr: "Référence" },
          items: [
            {
              label: "Configuration",
              slug: "reference/configuration",
              translations: { fr: "Configuration" },
            },
            {
              label: "create-lacis",
              slug: "reference/create-lacis",
              translations: { fr: "create-lacis" },
            },
            {
              label: "CLI",
              slug: "reference/cli",
              translations: { fr: "CLI" },
            },
            {
              label: "API",
              slug: "reference/api",
              translations: { fr: "Référence API" },
            },
          ],
        },
      ],
    }),
  ],
});
