import React, { useEffect, useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useThree } from '@react-three/fiber';

export function ReactLogo(props) {
  const { nodes, materials } = useGLTF('/models/react_logo.glb');
  const targetRef = useRef();
  const { viewport } = useThree();

  const getPosition = () => {
    if (viewport.width < 5) {
      return [8,8,5];
    } else if (viewport.width < 14) {
      return [14, 8, 5];
    } else {
      return [18,8,5]
    }
  }

  useEffect(() => {
    if (targetRef.current) {
      const [x,y,z] = getPosition();
      targetRef.current.position.set(x,y,z);
    }
  }, [viewport.width])

  useGSAP(() => {
    if (targetRef.current)  {
      gsap.from(targetRef.current.position, {duration: 1, repeat: -1, yoyo: true, ease: 'bounce'})
    }
  }, [])

  return (
    <Float floatIntensity={1}>
      <group {...props} ref={targetRef} dispose={null} scale={0.008}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[39.166, 39.166, 52.734]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/react_logo.glb') 
