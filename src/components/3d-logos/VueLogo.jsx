import React, { useEffect, useRef, useState } from 'react'
import { Float, useGLTF } from '@react-three/drei'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function VueLogo(props) {
  const gltf = useGLTF("/models/vue-logo.glb");
  const vueRef = useRef();
  const [scale, setScale] = useState(10);
  const [position, setPosition] = useState([-1, -9, 0]);

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setPosition([-8, 7, 3])
        setScale(8);
      } else if (width < 768) {
        setPosition([-9, 7, 3]);
        setScale(8);
      } else if (width < 1024) {
        setPosition([-10, 7, 3]);
        setScale(9)
      } else if (width < 1280) {
        setPosition([-12, 7, 3]);
      } else {
        setPosition([-14, 7, 3])
      }
    };
    window.addEventListener('resize', updateDimensions);
    updateDimensions();
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (vueRef.current) {
      vueRef.current.position.set(...position);
    }
  }, [position]);

  useGSAP(() => {
    if (vueRef.current)  {
      gsap.from(vueRef.current.position, {duration: 1.5, repeat: -1, yoyo: true, ease: 'power2.inOut'})
    }
  }, []);

  return (
    <Float floatIntensity={1}>
      <group ref={vueRef} {...props} dispose={null} scale={scale}>
        <primitive object={gltf.scene} scale={3} />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/vue-logo.glb')
