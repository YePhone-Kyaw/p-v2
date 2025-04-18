import React, { useEffect, useRef, useState } from 'react'
import { Float, useGLTF } from '@react-three/drei'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function ReactLogo(props) {
  const { nodes, materials } = useGLTF('/models/react_logo.glb');
  const reactRef = useRef();
  const [position, setPosition] = useState([15, 8, 5]);
  const [scale, setScale] = useState(0.008);

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setPosition([3, 8, 5]);
        setScale(0.003);
      } else if (width < 768) {
        setPosition([5, 8, 5]);
        setScale(0.003);
      } else if (width < 1024) {
        setPosition([6, 8, 5]);
        setScale(0.003)
      }  else if (width < 1280) {
        setPosition([10, 8, 5]);
        setScale(0.003);
      } else if (width < 1440) {
        setPosition([13, 8, 5]);
        setScale(0.004);
      } else {
        setPosition([15, 8, 5]);
        setScale(0.005);
      }
    };
    window.addEventListener('resize', updateDimensions);
    updateDimensions();
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (reactRef.current) {
      reactRef.current.position.set(...position);
      reactRef.current.scale.set(scale, scale, scale);    
    }
  }, [position, scale]);

  useGSAP(() => {
    if (reactRef.current)  {
      gsap.from(reactRef.current.position, {duration: 1, repeat: -1, yoyo: true, ease: 'bounce'})
    }
  }, []);

  return (
    <Float floatIntensity={1}>
      <group {...props} ref={reactRef} dispose={null}>
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
