import React, { useRef } from 'react'
import { Float, OrbitControls, useGLTF } from '@react-three/drei'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function PythonLogo(props) {
  const scene = useGLTF('/models/python.glb');

  const targetRef = useRef();

  useGSAP(() => {
    gsap.to(targetRef.current.position, {duration: 1, repeat: -1, yoyo: true})
  })
  return (
    <Float floatIntensity={1}>
      <group {...props} ref={targetRef} dispose={null} scale={0.005} position={[-21,-9, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={scene.nodes.Python_Python_0.geometry}
          material={scene.materials.Python}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/methods/python.glb')

