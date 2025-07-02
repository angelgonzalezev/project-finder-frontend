# 🚀 Project Finder Front

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

---

## 🛠️ Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

---

## 📁 Project Structure

<details>
<summary>Click to expand</summary>

```bash
├── public/
├── src/
│   ├── app/
│   │   ├── [projectId]/         # Dynamic project pages
│   │   │   ├── components/      # Project-specific components
│   │   │   ├── page.tsx         # Project page entry
│   │   │   └── utils/           # Utilities for project pages
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx           # App layout
│   │   └── page.tsx             # Main app page
│   ├── assets/
│   │   ├── icons/               # SVGs and icon assets
│   │   └── images/              # Image assets
│   ├── components/
│   │   ├── AccordionComponent/
│   │   ├── CustomModalComponent/
│   │   ├── CustomSelectComponent/
│   │   ├── CustomToasterComponent/
│   │   ├── FilterModalComponent/
│   │   ├── HeaderComponent/
│   │   ├── PositionDetailsComponent/
│   │   ├── SelectedFiltersComponent/
│   │   ├── ui/
│   │   │   ├── FilterOptionsComponent.tsx
│   │   │   ├── IconComponent.tsx
│   │   │   └── TagComponent.tsx
│   ├── fonts/                   # Custom fonts
│   ├── lib/                     # Library utilities
│   ├── mockData/                # Mock data for development/testing
│   ├── services/                # API and service layer
│   ├── theme/                   # Theme and styling
│   ├── types/                   # TypeScript types
│   └── utils/                   # Utility functions
├── .env
├── package.json
└── README.md
```

</details>

---

## 🙌 Prerequisites

- Node.js ≥ 16
- npm ≥ 8

---

## 📚 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

---

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
