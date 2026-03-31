'use client'

import { motion } from 'framer-motion'

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number]

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease, delay },
  }
}

const team = [
  {
    name: 'Arnaud Lefèvre',
    role: 'Fondateur & Head Bartender',
    bio: 'Formé à Londres et à Tokyo, Arnaud revient à Paris en 2019 avec une vision simple : faire de chaque verre une expérience complète. Quinze ans de métier, aucun compromis.',
  },
  {
    name: 'Lena Moreau',
    role: 'Bar Manager',
    bio: 'Ancienne sommelière chez un deux-étoiles parisien, Lena orchestre la carte des vins et supervise l\'harmonie entre les équipes. Sa rigueur silencieuse tient le bar debout.',
  },
  {
    name: 'Théo Vasquez',
    role: 'Bartender & Créateur de Sirops',
    bio: 'Passionné de botanique et de fermentation, Théo fabrique tous les sirops et infusions de la maison. Chaque semaine, il explore une nouvelle saveur.',
  },
]

const valeurs = [
  { title: 'Le Produit', text: 'Rien n\'est à la légère. Chaque spiritueux est choisi pour ce qu\'il dit, pas pour ce qu\'il coûte.' },
  { title: 'Le Silence', text: 'Chez Brume, on parle doucement. La musique est basse, les lumières sont basses. L\'intention est haute.' },
  { title: 'La Précision', text: 'Un cocktail raté se voit, se sent, se ressent. Nous recommençons plutôt que de livrer quelque chose d\'imparfait.' },
]

export default function HistoirePage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: 'clamp(7rem, 16vw, 12rem)',
          paddingBottom: 'clamp(3rem, 6vw, 5rem)',
          paddingLeft: 'clamp(1.5rem, 6vw, 6rem)',
          paddingRight: 'clamp(1.5rem, 6vw, 6rem)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: '0.58rem',
            fontWeight: 400,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '1rem',
          }}
        >
          Fondé en 2019
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(3.5rem, 9vw, 7rem)',
            color: 'var(--cream)',
            lineHeight: 0.95,
          }}
        >
          Notre Histoire
        </motion.h1>
      </section>

      {/* Editorial text */}
      <section
        style={{
          padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 6rem)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(3rem, 6vw, 6rem)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <motion.div {...fadeUp(0)}>
          <p
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontStyle: 'italic',
              fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
              fontWeight: 300,
              color: 'var(--cream)',
              lineHeight: 1.4,
              marginBottom: '2rem',
            }}
          >
            Un sous-sol de la rue de l'Odeon. Une porte sans enseigne. Un escalier en pierre.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '0.82rem',
              fontWeight: 300,
              color: 'var(--muted)',
              lineHeight: 1.9,
            }}
          >
            Brume est né d'un pari absurde : ouvrir un bar que personne ne trouverait par hasard.
            Arnaud Lefèvre avait passé quinze ans dans les meilleurs établissements d'Europe,
            de Tokyo et de New York. En 2019, il est rentré à Paris avec une seule certitude :
            le meilleur bar du monde serait le plus discret.
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.12)}>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '0.82rem',
              fontWeight: 300,
              color: 'var(--muted)',
              lineHeight: 1.9,
              marginBottom: '1.5rem',
            }}
          >
            Le lieu a été pensé comme une antichambre. Ni le bruit de la rue, ni les smartphones
            brandis, ni les fêtes qui débordent. Juste la mise en scène du verre, la précision
            des gestes, et le murmure des conversations que l'on garde pour soi.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '0.82rem',
              fontWeight: 300,
              color: 'var(--muted)',
              lineHeight: 1.9,
            }}
          >
            Le nom, Brume, évoque cette heure entre chien et loup où Paris bascule.
            Ni jour, ni nuit. L'instant suspendu où l'on décide d'allonger la soirée d'une heure,
            puis d'une autre.
          </p>
        </motion.div>
      </section>

      {/* Photo break */}
      <div
        style={{
          height: 'clamp(280px, 40vw, 520px)',
          background: `
            radial-gradient(ellipse at 40% 50%, rgba(201,164,90,0.08) 0%, transparent 55%),
            radial-gradient(ellipse at 75% 30%, rgba(201,164,90,0.04) 0%, transparent 50%),
            linear-gradient(135deg, #0f0c07 0%, #0A0804 50%, #130f08 100%)
          `,
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.p
          {...fadeUp(0)}
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontStyle: 'italic',
            fontSize: 'clamp(1.4rem, 4vw, 2.5rem)',
            color: 'rgba(242, 237, 228, 0.15)',
            letterSpacing: '0.05em',
            userSelect: 'none',
          }}
        >
          14, rue de l'Odeon &nbsp;&middot;&nbsp; Paris 6e
        </motion.p>
      </div>

      {/* Valeurs */}
      <section
        style={{
          padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 6rem)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <motion.h2
          {...fadeUp(0)}
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontStyle: 'italic',
            fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
            fontWeight: 400,
            color: 'var(--gold)',
            marginBottom: '3rem',
          }}
        >
          Ce qui nous guide
        </motion.h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '0',
          }}
        >
          {valeurs.map(({ title, text }, i) => (
            <motion.div
              key={title}
              {...fadeUp(i * 0.1)}
              style={{
                padding: '2rem 2rem 2rem 0',
                borderTop: '1px solid var(--border)',
                paddingRight: i < valeurs.length - 1 ? '3rem' : 0,
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontStyle: 'italic',
                  fontSize: '1.4rem',
                  color: 'var(--cream)',
                  marginBottom: '0.75rem',
                }}
              >
                {title}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: '0.78rem',
                  fontWeight: 300,
                  color: 'var(--muted)',
                  lineHeight: 1.8,
                }}
              >
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section
        style={{
          padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 6rem)',
        }}
      >
        <motion.h2
          {...fadeUp(0)}
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontStyle: 'italic',
            fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
            fontWeight: 400,
            color: 'var(--gold)',
            marginBottom: '3rem',
          }}
        >
          L'equipe
        </motion.h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '0',
          }}
        >
          {team.map(({ name, role, bio }, i) => (
            <motion.div
              key={name}
              {...fadeUp(i * 0.1)}
              style={{
                padding: '2rem 2.5rem 2rem 0',
                borderTop: '1px solid var(--border)',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontStyle: 'italic',
                  fontSize: '1.4rem',
                  fontWeight: 400,
                  color: 'var(--cream)',
                  marginBottom: '0.25rem',
                }}
              >
                {name}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: '0.58rem',
                  fontWeight: 400,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  marginBottom: '1rem',
                }}
              >
                {role}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: '0.78rem',
                  fontWeight: 300,
                  color: 'var(--muted)',
                  lineHeight: 1.8,
                }}
              >
                {bio}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
