# Dr. Faith Mueni — Academic Portfolio

The official academic portfolio website for Dr. Faith Mueni Musyoka — Senior Lecturer, Researcher, Grant-Funded Project Leader, and AI/Digital Innovation Advocate at the University of Embu, Kenya. Built with Next.js.

**Live site:** [drfaithmueni.com](https://drfaithmueni.com)

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org) (App Router)
- **Styling:** Tailwind CSS (utility classes) + inline styles for custom brand colors
- **Icons:** [lucide-react](https://lucide.dev)
- **Fonts:** `Lora` (body/serif) and `Playfair Display` (headings)
- **Form handling:** [Formspree](https://formspree.io) (no backend required)
- **Hosting:** [Vercel](https://vercel.com)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. The page auto-updates as you edit files.

## Environment Variables

This project requires one environment variable for the contact form to work.

1. Copy the example file:

   ```bash
   cp .env.local.example .env.local
   ```

2. Open `.env.local` and set your Formspree endpoint:

   ```env
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
   ```

   Get your form ID by creating a form at [formspree.io](https://formspree.io/forms).

**Important:**
- The variable must be prefixed with `NEXT_PUBLIC_` because it's read in the browser (the form submits directly to Formspree client-side).
- `.env.local` is gitignored and never committed — each environment (local, Vercel) needs its own copy.
- If deployed without this variable set, the contact form shows an error toast instead of failing silently.


## Deployment

The site is deployed on [Vercel](https://vercel.com) at [drfaithmueni.com](https://drfaithmueni.com) (Vercel preview URL: `dr-faith-portfolio-bxe6.vercel.app`).

### Deploying updates
Any push to the connected Git branch (typically `main`) triggers an automatic redeploy.

### Setting environment variables on Vercel
Environment variables must be added separately in the Vercel dashboard — `.env.local` is not deployed with the code.

1. Go to your project on [vercel.com/dashboard](https://vercel.com/dashboard)
2. **Settings → Environment Variables**
3. Add:
   - **Key:** `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
   - **Value:** your Formspree endpoint URL
   - **Environments:** Production, Preview, and Development
4. Save, then redeploy (Deployments tab → latest deployment → **⋯ → Redeploy**) for the change to take effect

### Formspree domain allowlist
In your Formspree form settings, make sure the live production domain is included under allowed domains/referrers, or form submissions may be rejected.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Formspree Documentation](https://help.formspree.io)
- [Vercel Documentation](https://vercel.com/docs)