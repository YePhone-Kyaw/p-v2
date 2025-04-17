import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations, Float } from '@react-three/drei'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function JavaLogo(props) {
    const { nodes, materials, animations } = useGLTF('/models/java.glb')
    const targetRef = useRef();
  const { actions } = useAnimations(animations, targetRef);
  const [position, setPosition] = useState([1, 8, 5])
  const [scale, setScale] = useState(0.008)

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth
      if (width < 640) {
        setPosition([5, 8, 5])
        setScale(0.004)
      } else if (width < 768) {
        setPosition([6, 8, 5])
        setScale(0.004)
      } else if (width < 1024) {
        setPosition([8, 8, 5])
        setScale(0.005)
      } else if (width < 1280) {
        setPosition([12, 8, 5])
        setScale(0.006)
      } else {
        setPosition([-15, 6, 5])
        setScale(0.006)
      }
    }
    window.addEventListener('resize', updateDimensions)
    updateDimensions();
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

//   useEffect(() => {
//     if (targetRef.current) {
//       targetRef.current.position.set(...position)
//       targetRef.current.scale.set(scale, scale, scale)
//     }
//   }, [position, scale])

useGSAP(() => {
    if (targetRef.current) {
      gsap.from(targetRef.current.position, {
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      })
    }
  }, [])
  return (
    <Float floatIntensity={1}>
        <group position={position}>
        <group ref={targetRef} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group name="Cube">
              <mesh
                name="Cube_0"
                castShadow
                receiveShadow
                geometry={nodes.Cube_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Plane" position={[0.787, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <mesh
                name="Plane_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane_0.geometry}
                material={materials.Material}
              />
            </group>
            <group
              name="Plane001"
              position={[0, 0, 1.518]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={1.218}>
              <mesh
                name="Plane001_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane001_0.geometry}
                material={materials['Material.002']}
                morphTargetDictionary={nodes.Plane001_0.morphTargetDictionary}
                morphTargetInfluences={nodes.Plane001_0.morphTargetInfluences}
              />
            </group>
            <group
              name="Torus001"
              position={[-0.138, -0.061, -0.771]}
              rotation={[-0.14, -0.02, 0.097]}
              scale={[0.467, 0.432, 0.432]}>
              <mesh
                name="Torus001_0"
                castShadow
                receiveShadow
                geometry={nodes.Torus001_0.geometry}
                material={materials.Material}
              />
            </group>
            <group
              name="Torus000"
              position={[0.095, -0.029, -0.88]}
              rotation={[-0.134, -0.046, 0.098]}
              scale={[0.454, 0.419, 0.303]}>
              <mesh
                name="Torus000_0"
                castShadow
                receiveShadow
                geometry={nodes.Torus000_0.geometry}
                material={materials.Material}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
        </group>

    </Float>
  )
}

useGLTF.preload('/models/java.glb')
