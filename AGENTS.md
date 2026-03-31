# AGENTS.md — brume-bar (3D scroll experience)

## Setup
- `npm install` avant tout build (pas besoin de --include=dev, tailwind v3 est en deps normales)
- Build : `npm run build`
- Remote push : `git remote set-url origin "https://Wissko:${GITHUB_TOKEN}@github.com/Wissko/brume-bar.git"`

## Stack
- Next.js 14 (pages router ou app router — utilise app router)
- React 18, TypeScript
- Three.js + React Three Fiber (@react-three/fiber) + @react-three/drei
- GSAP 3
- Tailwind 3

## Concept
Site 3D scroll-driven pour "Brume" — bar à cocktails parisien.
3 cocktails signature. Le scroll fait tourner/transitionner les objets 3D d'un produit à l'autre.

## Architecture 3D
- Utilise `ScrollControls` de @react-three/drei pour lier le scroll au canvas
- Utilise `useScroll()` dans les composants 3D pour lire la progression (0→1)
- 3 objets 3D (primitives Three.js — pas de GLTF externe) positionnés en scène
- À scroll 0→0.33 : objet 1 centré, rotation Y douce
- À scroll 0.33→0.66 : objet 1 sort (rotation + translateZ), objet 2 entre
- À scroll 0.66→1 : objet 2 sort, objet 3 entre
- Les overlays HTML (nom du cocktail, description, CTA) synchronisés via useScroll

## DA
- Fond : #0A0804
- Or : #C9A45A
- Crème : #F2EDE4
- Typo : Cormorant Garamond (titres) + DM Sans 300 (corps)
- ZÉRO emoji, ZÉRO em dash

## TypeScript
- `ease` Framer Motion : `as [number, number, number, number]`
- Canvas R3F dans un composant 'use client', jamais dans un Server Component
