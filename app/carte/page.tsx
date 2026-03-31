'use client'

import { motion } from 'framer-motion'

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number]

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.65, ease, delay },
  }
}

const menu = [
  {
    section: 'Cocktails Signature',
    items: [
      { name: 'Brume Noire', desc: 'Mezcal, charbon végétal, sirop de violette, citron Meyer, fumée de hêtre', price: '18' },
      { name: 'Vieux Carré du 6e', desc: 'Rye whiskey, cognac Armagnac, Bénédictine, Carpano Antica, Peychaud\'s', price: '19' },
      { name: 'Nuit Blanche', desc: 'Gin Hendrick\'s, eau de rose, kombucha de thé blanc, yuzu, poivre de Sichuan', price: '17' },
      { name: 'Opium Doux', desc: 'Rhum agricole vieux, amaro Montenegro, cerise au kirsch, eau de fleur d\'oranger', price: '18' },
      { name: 'Fantôme du Palais', desc: 'Vodka infusée truffe, champagne brut, citron caviar, soda agrume', price: '22' },
    ],
  },
  {
    section: 'Cocktails Classiques',
    items: [
      { name: 'Old Fashioned', desc: 'Bourbon Knob Creek, sucre de canne, Angostura, zeste d\'orange flambé', price: '16' },
      { name: 'Negroni', desc: 'Gin Tanqueray 10, Campari, Vermouth Rosso Cocchi', price: '15' },
      { name: 'Sazerac', desc: 'Cognac Pierre Ferrand 1840, sucre, Peychaud\'s, absinthe Pernod', price: '16' },
      { name: 'Daiquiri Prestige', desc: 'Rhum Diplomatico Reserva, citron vert pressé, sirop de canne bio', price: '14' },
      { name: 'Martinez', desc: 'Gin Old Tom, Vermouth Rouge Noilly, Maraschino Luxardo, Angostura', price: '17' },
    ],
  },
  {
    section: 'Sans Alcool',
    items: [
      { name: 'Minuit Doré', desc: 'Eau pétillante, sirop de safran, citron, eau de rose, cardamome', price: '9' },
      { name: 'Jardin Secret', desc: 'Kombucha hibiscus, sirop de thym-citron, gingembre frais, poire', price: '10' },
      { name: 'Brume Blanche', desc: 'Lait de coco, vanille de Tahiti, eau pétillante, citron vert, sel fumé', price: '9' },
      { name: 'Velours Noir', desc: 'Jus de raisin Concord, réduction de grenadine maison, tonic, romarin infusé', price: '8' },
      { name: 'Solstice', desc: 'Céleri pressé, pomme verte, gingembre, citron, sirop de poivre long', price: '10' },
    ],
  },
  {
    section: 'Vins & Champagnes',
    items: [
      { name: 'Champagne Lallier R.012', desc: 'Brut, Aÿ Grand Cru, assemblage pinot noir et chardonnay', price: '22 / 95' },
      { name: 'Krug Grande Cuvée', desc: 'Multivintage, Reims — la maison de la profondeur', price: '38 / 185' },
      { name: 'Bourgogne Blanc', desc: 'Domaine Leflaive, Puligny-Montrachet 2021, minéralité et tension', price: '18 / 74' },
      { name: 'Côtes du Rhône Rouge', desc: 'Jean-Louis Chave, Saint-Joseph 2020, syrah élégante et poivrée', price: '14 / 58' },
      { name: 'Sauternes', desc: 'Château Coutet 2019, au verre — miel, abricot confit, safran', price: '14' },
    ],
  },
]

export default function CartePage() {
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
          Saison printemps 2025
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
          La Carte
        </motion.h1>
      </section>

      {/* Menu sections */}
      {menu.map(({ section, items }, sIdx) => (
        <section
          key={section}
          style={{
            padding: 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 6vw, 6rem)',
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
              marginBottom: '2.5rem',
              paddingBottom: '1.25rem',
              borderBottom: '1px solid var(--border)',
            }}
          >
            {section}
          </motion.h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {items.map(({ name, desc, price }, iIdx) => (
              <motion.div
                key={name}
                {...fadeUp(iIdx * 0.07)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  gap: '2rem',
                  padding: '1.5rem 0',
                  borderBottom: iIdx < items.length - 1 ? '1px solid var(--border)' : 'none',
                }}
              >
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontFamily: 'var(--font-cormorant), serif',
                      fontStyle: 'italic',
                      fontSize: '1.25rem',
                      fontWeight: 400,
                      color: 'var(--cream)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {name}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans), sans-serif',
                      fontSize: '0.75rem',
                      fontWeight: 300,
                      color: 'var(--muted)',
                      lineHeight: 1.6,
                      maxWidth: '520px',
                    }}
                  >
                    {desc}
                  </p>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontStyle: 'italic',
                    fontSize: '1.1rem',
                    color: 'var(--gold)',
                    flexShrink: 0,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {price} &euro;
                </span>
              </motion.div>
            ))}
          </div>
        </section>
      ))}

      {/* CTA reservation */}
      <section
        style={{
          padding: 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 6vw, 6rem)',
          textAlign: 'center',
        }}
      >
        <motion.div {...fadeUp(0)}>
          <p
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontStyle: 'italic',
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              color: 'var(--cream)',
              marginBottom: '2rem',
            }}
          >
            Une table pour ce soir ?
          </p>
          <a
            href="/reservation"
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '0.6rem',
              fontWeight: 400,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--bg)',
              background: 'var(--gold)',
              padding: '0.9rem 2.5rem',
            }}
          >
            Reserver
          </a>
        </motion.div>
      </section>
    </>
  )
}
