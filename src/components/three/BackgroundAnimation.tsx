"use client"

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useMemo } from 'react'
import { Points, BufferGeometry, BufferAttribute, PointsMaterial, Color } from 'three'
import { OrbitControls, Points as DreiPoints, SpotLight } from '@react-three/drei'

function Particles() {
  const particlesRef = useRef<Points>(null)

  const { geometry, material } = useMemo(() => {
    const geometry = new BufferGeometry()
    const verticesCount = 1000
    const vertices = new Float32Array(verticesCount * 3)

    for (let i = 0; i < verticesCount; i++) {
      vertices[i * 3] = (Math.random() - 0.5) * 10
      vertices[i * 3 + 1] = (Math.random() - 0.5) * 10
      vertices[i * 3 + 2] = (Math.random() - 0.5) * 10
    }

    geometry.setAttribute('position', new BufferAttribute(vertices, 3))

    const material = new PointsMaterial({
      size: 0.02,
      color: new Color("#D97859"),
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true
    })

    return { geometry, material }
  }, [])

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = clock.getElapsedTime() * 0.1
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.15
    }
  })

  return <DreiPoints ref={particlesRef} geometry={geometry} material={material} />
}

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 75
        }}
      >
        <OrbitControls enableZoom={false} enablePan={false} />
        {/* Lumière ambiante simulée avec un SpotLight large */}
        <SpotLight
          position={[0, 10, 0]}
          angle={Math.PI / 2}
          penumbra={1}
          intensity={0.5}
          distance={20}
        />
        {/* Lumières directionnelles */}
        <SpotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={Math.PI}
        />
        <SpotLight
          position={[-10, -10, -10]}
          angle={0.15}
          penumbra={1}
          intensity={Math.PI}
        />
        <Particles />
      </Canvas>
    </div>
  )
}