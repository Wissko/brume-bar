'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { motion } from 'framer-motion'

const CanvasBackground = dynamic(
  () => import('../components/CanvasBackground'),
  { ssr: false }
)

interface Product {
  id: number
  name: string
  flavor: string
  sub: string
  image: string
  accent: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'Electric Pre',
    flavor: 'Blue Razz',
    sub: '200mg Caféine · 4g Citrulline',
    image: '/images/product-1.jpg',
    accent: '#4A9EFF',
  },
  {
    id: 2,
    name: 'Electric Pre',
    flavor: 'Mango',
    sub: '200mg Caféine · 4g Citrulline',
    image: '/images/product-2.jpg',
    accent: '#F0A830',
  },
  {
    id: 3,
    name: 'Electric Pre',
    flavor: 'Grape',
    sub: '200mg Caféine · 4g Citrulline',
    image: '/images/product-3.jpg',
    accent: '#9B59FF',
  },
]

function ProductSection({ product }: { product: Product }) {
  return (
    <section
      style={{ height: '100vh', position: 'relative', zIndex: 1 }}
      className="flex flex-col items-center justify-center px-6"
    >
      {/* Image with clip-path reveal */}
      <motion.div
        initial={{ clipPath: 'inset(100% 0 0 0)' }}
        whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1.1,
          ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
        }}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '420px',
          maxHeight: '70vh',
          marginBottom: '2.5rem',
        }}
      >
        <Image
          src={product.image}
          alt={`${product.name} ${product.flavor}`}
          width={420}
          height={560}
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '70vh',
            objectFit: 'contain',
            display: 'block',
          }}
          priority={product.id === 1}
        />
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.9,
          delay: 0.25,
          ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
        }}
        className="text-center"
      >
        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 300,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontSize: '0.7rem',
            color: product.accent,
            marginBottom: '0.5rem',
            opacity: 0.9,
          }}
        >
          Axion
        </p>

        <h2
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(4rem, 10vw, 8rem)',
            lineHeight: 1,
            color: '#F2EDE4',
            marginBottom: '0.25rem',
          }}
        >
          {product.name}
        </h2>

        <h3
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            lineHeight: 1.1,
            color: product.accent,
            marginBottom: '1.5rem',
          }}
        >
          {product.flavor}
        </h3>

        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 300,
            fontSize: '0.75rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(242, 237, 228, 0.45)',
          }}
        >
          {product.sub}
        </p>
      </motion.div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      {/* WebGL background */}
      <CanvasBackground />

      {/* Film grain overlay */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 9999,
          pointerEvents: 'none',
          opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Product sections */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        {products.map((product) => (
          <ProductSection key={product.id} product={product} />
        ))}
      </main>
    </>
  )
}
