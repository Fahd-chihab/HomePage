"use client"

import { useRef, useMemo } from "react"
import { motion } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, MeshDistortMaterial, Points, PointMaterial } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import * as THREE from "three"

const AnimatedSphere = () => {
  const mesh = useRef<THREE.Mesh>(null!)
  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.25
    mesh.current.rotation.y += delta * 0.25
  })

  return (
    <Sphere args={[1, 100, 200]} scale={2.5} ref={mesh}>
      <MeshDistortMaterial color="#2563EB" attach="material" distort={0.3} speed={1.5} roughness={0.5} />
    </Sphere>
  )
}

const FloatingParticles = () => {
  const particlesRef = useRef<THREE.Points>(null!)

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < 5000; i++) {
      const x = THREE.MathUtils.randFloatSpread(2000)
      const y = THREE.MathUtils.randFloatSpread(2000)
      const z = THREE.MathUtils.randFloatSpread(2000)
      temp.push(x, y, z)
    }
    return new Float32Array(temp)
  }, [])

  useFrame(() => {
    particlesRef.current.rotation.x += 0.0005
    particlesRef.current.rotation.y += 0.0005
  })

  return (
    <Points ref={particlesRef}>
      <PointMaterial transparent color="#60A5FA" size={2} sizeAttenuation depthWrite={false} />
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[particles, 3]} />
      </bufferGeometry>
    </Points>
  )
}

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700" dir="rtl">
      <div className="absolute inset-0">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedSphere />
          <FloatingParticles />
        </Canvas>
      </div>
      <div className="relative z-10 text-right text-white max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold mb-4 leading-tight"
        >
          منصة التعلم الشاملة الخاصة بك
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl mb-8"
        >
          اكتشف الدورات، شارك المعرفة من خلال المدونات، واستكشف المنتجات الرقمية - كل ذلك في مكان واحد
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-x-4 rtl:space-x-reverse"
        >
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3">
            استكشف الدورات
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent text-white border-white hover:bg-white hover:text-blue-900 text-lg px-8 py-3"
          >
            سجل مجانًا
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

