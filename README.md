# Shinrai Connect

Shinrai Connect is a digital marketing and creative services website. It presents the brand, its services, its working process, and a contact form for prospective clients.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home page with a brand introduction and featured services |
| `/about` | Mission, vision, and brand story |
| `/services` | Digital services catalogue |
| `/how-it-works` | Three-stage client engagement process |
| `/contact` | Contact form and contact information |

The services page currently lists social media marketing, SEO and Google Ads, brand strategy, web design and development, content creation, lead generation, email marketing, e-commerce marketing, and video production and editing.

## Tech stack

- React 18 and TypeScript
- Vite with the SWC React plugin
- React Router for client-side routes
- Tailwind CSS, shadcn/ui, and Radix UI components
- TanStack Query and Lucide icons

## Getting started

Use Node.js and npm.

```sh
git clone https://github.com/mylaramshashank/shinrai-connect.git
cd shinrai-connect
npm install
npm run dev
```

Vite prints the local development URL in the terminal after the server starts.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run build:dev` | Create a development-mode build |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the generated production build |

## Contact form integration

The contact form in `src/pages/Contact.tsx` sends the submitted name, email, selected services, and message to the configured n8n `webhook-test` endpoint. This is a test-mode URL; verify the n8n workflow is actively listening before testing submissions. Before using the form for production enquiries, confirm that the endpoint is intentionally configured for production.

## Lovable workspace

This repository is linked to the [Shinrai Connect Lovable project](https://lovable.dev/projects/0415b28e-52e4-4a3b-bf65-750297af62d4). Changes pushed to the repository can also be reflected in the linked Lovable project.
