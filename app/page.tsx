import dynamic from 'next/dynamic'

const BrumeScene = dynamic(() => import('../components/BrumeScene'), { ssr: false })

export default function Home() {
  return (
    <main>
      <BrumeScene />
    </main>
  )
}
