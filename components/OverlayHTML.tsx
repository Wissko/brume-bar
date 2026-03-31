'use client'

import { useRef } from 'react'
import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const cocktails = [
  {
    name: 'Nuit de Paris',
    description: 'Vodka, encre de seiche, citron noir, fumée de bois',
    price: '18€',
  },
  {
    name: 'Brume Dorée',
    description: 'Cognac XO, miel sauvage, gingembre, feuille d\'or',
    price: '22€',
  },
  {
    name: 'Minuit Fumé',
    description: 'Mezcal, cacao noir, piment d\'Espelette, sel fumé',
    price: '20€',
  },
]

function CocktailSection({
  cocktail,
  index,
}: {
  cocktail: (typeof cocktails)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const scroll = useScroll()

  useFrame(() => {
    if (!ref.current) return
    const offset = scroll.offset

    // Fade in/out per section based on scroll offset
    let opacity = 0
    if (index === 0) {
      opacity = 1 - THREE_smoothstep(offset, 0.25, 0.4)
    } else if (index === 1) {
      const fadeIn = THREE_smoothstep(offset, 0.25, 0.4)
      const fadeOut = 1 - THREE_smoothstep(offset, 0.6, 0.75)
      opacity = fadeIn * fadeOut
    } else if (index === 2) {
      opacity = THREE_smoothstep(offset, 0.6, 0.75)
    }

    ref.current.style.opacity = String(opacity)
  })

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        top: `${index * 100}vh`,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        opacity: index === 0 ? 1 : 0,
        transition: 'none',
        pointerEvents: 'none',
      }}
    >
      <h1
        style={{
          fontFamily: 'var(--font-cormorant), serif',
          fontStyle: 'italic',
          fontSize: 'clamp(3rem, 8vw, 7rem)',
          fontWeight: 300,
          color: '#F2EDE4',
          textAlign: 'center',
          lineHeight: 1.1,
          letterSpacing: '0.02em',
        }}
      >
        {cocktail.name}
      </h1>
      <p
        style={{
          fontFamily: 'var(--font-dm-sans), sans-serif',
          fontWeight: 300,
          fontSize: '0.9rem',
          color: 'rgba(242,237,228,0.6)',
          textAlign: 'center',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          maxWidth: '400px',
        }}
      >
        {cocktail.description}
      </p>
      <span
        style={{
          fontFamily: 'var(--font-cormorant), serif',
          fontSize: '1.4rem',
          color: '#C9A45A',
          letterSpacing: '0.1em',
        }}
      >
        {cocktail.price}
      </span>
    </div>
  )
}

// Pure JS smoothstep (no THREE import in HTML overlay)
function THREE_smoothstep(x: number, min: number, max: number): number {
  const t = Math.max(0, Math.min(1, (x - min) / (max - min)))
  return t * t * (3 - 2 * t)
}

export default function OverlayHTML() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '300vh' }}>
      {cocktails.map((cocktail, i) => (
        <CocktailSection key={i} cocktail={cocktail} index={i} />
      ))}
    </div>
  )
}
