'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import * as THREE from 'three'

export default function CocktailScene() {
  const mesh1 = useRef<THREE.Mesh>(null!)
  const mesh2 = useRef<THREE.Mesh>(null!)
  const mesh3 = useRef<THREE.Mesh>(null!)

  const scroll = useScroll()

  useFrame((_state, delta) => {
    const offset = scroll.offset // 0 → 1

    // Produit 1 : visible de 0 à 0.4, sort entre 0.3 et 0.45
    const p1Visible = 1 - THREE.MathUtils.smoothstep(offset, 0.3, 0.45)
    mesh1.current.position.z = THREE.MathUtils.lerp(0, -4, 1 - p1Visible)
    mesh1.current.rotation.y += delta * 0.5 * p1Visible
    mesh1.current.scale.setScalar(Math.max(p1Visible, 0.0001))

    // Produit 2 : entre entre 0.3 et 0.45, sort entre 0.65 et 0.8
    const p2In = THREE.MathUtils.smoothstep(offset, 0.3, 0.45)
    const p2Out = 1 - THREE.MathUtils.smoothstep(offset, 0.65, 0.8)
    const p2Visible = p2In * p2Out
    mesh2.current.position.z =
      THREE.MathUtils.lerp(-4, 0, p2In) + THREE.MathUtils.lerp(0, -4, 1 - p2Out)
    mesh2.current.rotation.y += delta * 0.5 * p2Visible
    mesh2.current.scale.setScalar(Math.max(p2Visible, 0.0001))

    // Produit 3 : entre entre 0.65 et 0.8, reste jusqu'à 1
    const p3Visible = THREE.MathUtils.smoothstep(offset, 0.65, 0.8)
    mesh3.current.position.z = THREE.MathUtils.lerp(-4, 0, p3Visible)
    mesh3.current.rotation.y += delta * 0.5 * p3Visible
    mesh3.current.scale.setScalar(Math.max(p3Visible, 0.0001))
  })

  return (
    <>
      {/* Nuit de Paris — cylindre élancé (verre à cocktail) */}
      <mesh ref={mesh1} position={[0, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.8, 2.5, 32]} />
        <meshStandardMaterial
          color="#C9A45A"
          wireframe={true}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Brume Dorée — sphère facettée */}
      <mesh ref={mesh2} position={[0, 0, -4]}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#C9A45A"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Minuit Fumé — tore */}
      <mesh ref={mesh3} position={[0, 0, -4]}>
        <torusGeometry args={[0.8, 0.3, 16, 50]} />
        <meshStandardMaterial
          color="#2A1F10"
          metalness={1}
          roughness={0}
        />
      </mesh>
    </>
  )
}
