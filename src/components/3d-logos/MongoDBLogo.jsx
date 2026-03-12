import React, { useRef, useState, useEffect } from 'react'
import { Float, useGLTF } from '@react-three/drei'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function MongoDBLogo(props) {
  const mongoDBRef = useRef();
  const [position, setPosition] = useState([-2, -12, 9]);
  const [scale, setScale] = useState(30);
  const { nodes, materials } = useGLTF('/models/mongodb-logo.glb');
  
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setPosition([0, -5, 5])
      } else if (width < 768) {
        setPosition([0, -5, 5])
      } else if (width < 1024) {
        setPosition([0, -5, 5])
      } else if (width < 1280) {
        setPosition([0, -5, 5])
      } else {
        setPosition([0, -5, 5])
      }
    };
    window.addEventListener('resize', updateDimensions);
    updateDimensions();
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (mongoDBRef.current) {
      mongoDBRef.current.position.set(...position);
    }
  }, [position]);

  useGSAP(() => {
    if (mongoDBRef.current)  {
      gsap.from(mongoDBRef.current.position, {duration: 1.5, repeat: -1, yoyo: true, ease: 'power2.inOut'})
    }
  }, []);

  return (
    <Float floatIntensity={1}>
    <group {...props} ref={mongoDBRef} dispose={null} scale={scale}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MongoDBsvg.geometry}
          material={materials['green-dark']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MongoDBsvg_1.geometry}
          material={materials['green-light']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MongoDBsvg_2.geometry}
          material={materials.gray}
        />
    </group>
    </Float>
  )
}

useGLTF.preload('/models/mongodb-logo.glb');
