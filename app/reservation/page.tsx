'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number]

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid var(--border)',
  padding: '0.75rem 0',
  fontFamily: 'var(--font-dm-sans), sans-serif',
  fontSize: '0.85rem',
  fontWeight: 300,
  color: 'var(--cream)',
  outline: 'none',
  transition: 'border-color 0.25s ease',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-dm-sans), sans-serif',
  fontSize: '0.55rem',
  fontWeight: 400,
  letterSpacing: '0.25em',
  textTransform: 'uppercase',
  color: 'var(--gold)',
  marginBottom: '0.4rem',
}

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  )
}

export default function ReservationPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    date: '',
    time: '',
    guests: '2',
    name: '',
    email: '',
    message: '',
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

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
          Table pour 2 ou pour 10
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
          Réserver
        </motion.h1>
      </section>

      {/* Form / Success */}
      <section
        style={{
          padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 6rem)',
          maxWidth: '680px',
        }}
      >
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease }}
              style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '2rem',
                }}
              >
                <Field label="Date">
                  <input
                    name="date"
                    type="date"
                    required
                    value={form.date}
                    onChange={handleChange}
                    style={{ ...inputStyle, colorScheme: 'dark' }}
                  />
                </Field>
                <Field label="Heure">
                  <input
                    name="time"
                    type="time"
                    required
                    value={form.time}
                    onChange={handleChange}
                    min="18:00"
                    max="23:30"
                    style={{ ...inputStyle, colorScheme: 'dark' }}
                  />
                </Field>
                <Field label="Personnes">
                  <select
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                      <option key={n} value={n} style={{ background: '#0A0804' }}>
                        {n} {n === 1 ? 'personne' : 'personnes'}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '2rem',
                }}
              >
                <Field label="Nom complet">
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Votre nom"
                    value={form.name}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </Field>
                <Field label="Email">
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="votre@email.fr"
                    value={form.email}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </Field>
              </div>

              <Field label="Message (optionnel)">
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Occasion speciale, allergies, demande particuliere..."
                  value={form.message}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    resize: 'none',
                    lineHeight: 1.7,
                  }}
                />
              </Field>

              <div>
                <motion.button
                  type="submit"
                  whileHover={{ opacity: 0.85 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: 'var(--gold)',
                    color: 'var(--bg)',
                    border: 'none',
                    padding: '1rem 3rem',
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontSize: '0.6rem',
                    fontWeight: 400,
                    letterSpacing: '0.28em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                  }}
                >
                  Confirmer la réservation
                </motion.button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: '0.58rem',
                  fontWeight: 400,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  marginBottom: '1.5rem',
                }}
              >
                Reservation confirmee
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  color: 'var(--cream)',
                  lineHeight: 1.2,
                  marginBottom: '1.5rem',
                }}
              >
                À bientôt, {form.name}.
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: '0.8rem',
                  fontWeight: 300,
                  color: 'var(--muted)',
                  lineHeight: 1.8,
                  maxWidth: '440px',
                }}
              >
                Nous avons bien reçu votre demande pour{' '}
                {form.guests} {parseInt(form.guests) === 1 ? 'personne' : 'personnes'} le{' '}
                {form.date} à {form.time}. Un email de confirmation a été envoyé à{' '}
                {form.email}.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: 300,
                  color: 'var(--muted)',
                  lineHeight: 1.8,
                  maxWidth: '440px',
                  marginTop: '1rem',
                }}
              >
                Pour toute modification, contactez-nous au +33 1 45 67 89 10.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setForm({ date: '', time: '', guests: '2', name: '', email: '', message: '' })
                }}
                style={{
                  marginTop: '2.5rem',
                  background: 'none',
                  border: 'none',
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: '0.58rem',
                  fontWeight: 400,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  cursor: 'pointer',
                  borderBottom: '1px solid var(--gold)',
                  padding: '0 0 2px',
                }}
              >
                Nouvelle reservation
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Info sidebar-ish */}
      <section
        style={{
          padding: '0 clamp(1.5rem, 6vw, 6rem) clamp(5rem, 10vw, 7rem)',
          borderTop: '1px solid var(--border)',
          paddingTop: 'clamp(3rem, 6vw, 5rem)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2.5rem',
            maxWidth: '680px',
          }}
        >
          <div>
            <p style={{ ...labelStyle, marginBottom: '0.75rem' }}>Arrhes</p>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '0.75rem',
                fontWeight: 300,
                color: 'var(--muted)',
                lineHeight: 1.7,
              }}
            >
              Aucune carte bancaire requise. Nous faisons confiance.
            </p>
          </div>
          <div>
            <p style={{ ...labelStyle, marginBottom: '0.75rem' }}>Annulation</p>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '0.75rem',
                fontWeight: 300,
                color: 'var(--muted)',
                lineHeight: 1.7,
              }}
            >
              Jusqu'à 2h avant votre réservation, sans frais.
            </p>
          </div>
          <div>
            <p style={{ ...labelStyle, marginBottom: '0.75rem' }}>Groupes</p>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '0.75rem',
                fontWeight: 300,
                color: 'var(--muted)',
                lineHeight: 1.7,
              }}
            >
              Pour plus de 10 personnes, appelez-nous directement.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
