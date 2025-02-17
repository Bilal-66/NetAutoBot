import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export const HologramEffect = ({ color = '#00f3ff', size = 1, position }) => {
  const meshRef = useRef()
  
  useFrame(({ clock }) => {
    meshRef.current.rotation.x = clock.getElapsedTime() * 0.5
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.5
  })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial 
        color={color}
        transparent
        opacity={0.5}
        wireframe
        emissive={color}
        emissiveIntensity={0.5}
        metalness={0.9}
        roughness={0.5}
      />
    </mesh>
  )
}