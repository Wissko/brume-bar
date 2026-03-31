# AGENTS.md — brume-bar

## Setup
- `npm install --include=dev` avant tout build
- Build : `npm run build`
- Push : `git remote set-url origin "https://Wissko:${GITHUB_TOKEN}@github.com/Wissko/brume-bar.git"`

## Stack
- Next.js 16.2.1 (Turbopack), React 19, TypeScript
- Framer Motion 12, Tailwind 4

## Framer Motion — règle obligatoire
```tsx
ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
```

## DA — Brume Bar
- Fond : `#0A0804` (noir chaud presque marron)
- Accent or : `#C9A45A`
- Crème : `#F2EDE4`
- Muted : `rgba(242,237,228,0.4)`
- Border : `rgba(201,164,90,0.15)`
- Typo titres : Cormorant Garamond italic (Google Fonts)
- Typo corps : DM Sans 300
- ZÉRO emoji, ZÉRO em dash visible, ZÉRO cards blanches avec bordures colorées
- Esprit : speakeasy parisien, sombre, luxueux, editorial
