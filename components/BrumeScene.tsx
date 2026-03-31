'use client'

import { Canvas } from '@react-three/fiber'
import { ScrollControls, Scroll } from '@react-three/drei'
import CocktailScene from './CocktailScene'
import OverlayHTML from './OverlayHTML'

export default function BrumeScene() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#C9A45A" />
        <ScrollControls pages={3} damping={0.3}>
          <CocktailScene />
          <Scroll html>
            <OverlayHTML />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  )
}
