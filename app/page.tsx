'use client'

import { motion } from 'framer-motion'

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number]

const signature = [
  {
    name: 'Brume Noire',
    description: 'Mezcal, charbon végétal, sirop de violette, citron Meyer, fumée de bois de hêtre',
    price: '18',
  },
  {
    name: 'Vieux Carré du 6e',
    description: 'Rye whiskey, cognac Armagnac, Bénédictine, Carpano Antica, Peychaud\'s',
    price: '19',
  },
  {
    name: 'Nuit Blanche',
    description: 'Gin Hendrick\'s, eau de rose, kombucha de thé blanc, zeste de yuzu, poivre de Sichuan',
    price: '17',
  },
]

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease, delay },
  }
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: `
            radial-gradient(ellipse at 30% 60%, rgba(201,164,90,0.06) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(201,164,90,0.04) 0%, transparent 50%),
            linear-gradient(180deg, #0A0804 0%, #0f0c07 50%, #0A0804 100%)
          `,
        }}
      >
        {/* Grain overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
            pointerEvents: 'none',
            opacity: 0.6,
          }}
        />

        <div style={{ textAlign: 'center', position: 'relative', zIndex: 1, padding: '0 1.5rem' }}>
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.8em' }}
            animate={{ opacity: 1, letterSpacing: '0.55em' }}
            transition={{ duration: 1.2, ease, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '0.6rem',
              fontWeight: 400,
              letterSpacing: '0.55em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '1.5rem',
            }}
          >
            Paris 6e · Depuis 2019
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease, delay: 0.4 }}
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(6rem, 18vw, 16rem)',
              lineHeight: 0.88,
              color: 'var(--cream)',
              letterSpacing: '-0.02em',
              marginBottom: '2rem',
            }}
          >
            Brume
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.9 }}
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '0.7rem',
              fontWeight: 300,
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
            }}
          >
            Bar à Cocktails &nbsp;·&nbsp; Paris 6e
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease, delay: 1.3 }}
            style={{
              marginTop: '3rem',
              width: '1px',
              height: '4rem',
              background: 'linear-gradient(to bottom, var(--gold), transparent)',
              margin: '3rem auto 0',
              transformOrigin: 'top',
            }}
          />
        </div>
      </section>

      {/* Statement */}
      <section
        style={{
          padding: 'clamp(5rem, 12vw, 9rem) clamp(1.5rem, 8vw, 8rem)',
          textAlign: 'center',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <motion.blockquote {...fadeUp(0)}>
          <p
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontStyle: 'italic',
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 300,
              color: 'var(--cream)',
              lineHeight: 1.4,
              maxWidth: '780px',
              margin: '0 auto 1.5rem',
            }}
          >
            L'ivresse n'est pas dans le verre. Elle commence avant, dans l'obscurité qui prépare.
          </p>
          <cite
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '0.6rem',
              fontWeight: 400,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
            }}
          >
            Brume, Paris
          </cite>
        </motion.blockquote>
      </section>

      {/* Cocktails signature */}
      <section style={{ padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 6rem)' }}>
        <motion.div {...fadeUp(0)} style={{ marginBottom: '4rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '0.6rem',
              fontWeight: 400,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '0.75rem',
            }}
          >
            Sélection du moment
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontStyle: 'italic',
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: 400,
              color: 'var(--cream)',
              lineHeight: 1.1,
            }}
          >
            Cocktails Signature
          </h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '0',
          }}
        >
          {signature.map(({ name, description, price }, i) => (
            <motion.article
              key={name}
              {...fadeUp(i * 0.12)}
              style={{
                padding: '2.5rem 2rem',
                borderTop: '1px solid var(--border)',
                borderRight: i < signature.length - 1 ? '1px solid var(--border)' : 'none',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '1rem',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontStyle: 'italic',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: 'var(--cream)',
                  }}
                >
                  {name}
                </h3>
                <span
                  style={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontStyle: 'italic',
                    fontSize: '1.2rem',
                    color: 'var(--gold)',
                    flexShrink: 0,
                    marginLeft: '1rem',
                  }}
                >
                  {price} &euro;
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: '0.78rem',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: 'var(--muted)',
                }}
              >
                {description}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div {...fadeUp(0.3)} style={{ marginTop: '3rem', textAlign: 'center' }}>
          <a
            href="/carte"
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '0.6rem',
              fontWeight: 400,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              borderBottom: '1px solid var(--gold)',
              paddingBottom: '2px',
            }}
          >
            Voir la carte complete
          </a>
        </motion.div>
      </section>

      {/* Horaires & Adresse */}
      <section
        style={{
          padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 6rem)',
          borderTop: '1px solid var(--border)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '4rem',
        }}
      >
        <motion.div {...fadeUp(0)}>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '0.58rem',
              fontWeight: 400,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '1.25rem',
            }}
          >
            Adresse
          </p>
          <p
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontStyle: 'italic',
              fontSize: '1.4rem',
              fontWeight: 300,
              color: 'var(--cream)',
              lineHeight: 1.6,
            }}
          >
            14, rue de l'Odeon
            <br />
            75006 Paris
          </p>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '0.72rem',
              fontWeight: 300,
              color: 'var(--muted)',
              marginTop: '0.75rem',
              lineHeight: 1.6,
            }}
          >
            Metro Odeon · Ligne 4 &amp; 10
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.1)}>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '0.58rem',
              fontWeight: 400,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '1.25rem',
            }}
          >
            Horaires
          </p>
          <div
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '0.78rem',
              fontWeight: 300,
              color: 'var(--cream)',
              lineHeight: 2,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '260px' }}>
              <span>Mardi au jeudi</span>
              <span style={{ color: 'var(--muted)' }}>18h &ndash; 01h</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '260px' }}>
              <span>Vendredi &amp; samedi</span>
              <span style={{ color: 'var(--muted)' }}>18h &ndash; 02h</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '260px' }}>
              <span>Dimanche</span>
              <span style={{ color: 'var(--muted)' }}>17h &ndash; 23h30</span>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                maxWidth: '260px',
                color: 'var(--muted)',
              }}
            >
              <span>Lundi</span>
              <span>Ferme</span>
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.2)}>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '0.58rem',
              fontWeight: 400,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '1.25rem',
            }}
          >
            Contact
          </p>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '0.78rem',
              fontWeight: 300,
              color: 'var(--cream)',
              lineHeight: 2,
            }}
          >
            +33 1 45 67 89 10
            <br />
            contact@brume-paris.fr
          </p>
          <a
            href="/reservation"
            style={{
              display: 'inline-block',
              marginTop: '1.5rem',
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '0.6rem',
              fontWeight: 400,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              borderBottom: '1px solid var(--gold)',
              paddingBottom: '2px',
            }}
          >
            Reserver une table
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid var(--border)',
          padding: '2rem clamp(1.5rem, 6vw, 6rem)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontStyle: 'italic',
            fontSize: '1rem',
            color: 'var(--gold)',
          }}
        >
          Brume
        </span>
        <span
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: '0.6rem',
            fontWeight: 300,
            letterSpacing: '0.1em',
            color: 'var(--muted)',
          }}
        >
          &copy; 2025 Brume Paris. Tous droits reserves.
        </span>
      </footer>
    </>
  )
}
