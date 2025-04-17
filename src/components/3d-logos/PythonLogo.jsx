import React, { useEffect, useRef, useState } from 'react'
import { Float, OrbitControls, useGLTF } from '@react-three/drei'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function PythonLogo(props) {
  const scene = useGLTF('/models/python.glb');
  const targetRef = useRef();
  const [position, setPosition] = useState([-21, -9, 0]);
    const [scale, setScale] = useState(0.008);
  
    useEffect(() => {
      const updateDimensions = () => {
        const width = window.innerWidth;
        if (width < 640) {
          setPosition([-6, -9, 0]);
          setScale(0.004);
        } else if (width < 768) {
          setPosition([-8, -9, 0]);
          setScale(0.004);
        } else if (width < 1024) {
          setPosition([-10, -9, 0]);
          setScale(0.005)
        }  else if (width < 1280) {
          setPosition([-15, -9, 0]);
          setScale(0.006)
        } else {
          setPosition([-21, -9, 0]);
          setScale(0.006);
        }
      };
      window.addEventListener('resize', updateDimensions);
      updateDimensions();
      return () => window.removeEventListener('resize', updateDimensions);
    }, []);
  
    useEffect(() => {
      if (targetRef.current) {
        targetRef.current.position.set(...position);
        targetRef.current.scale.set(scale, scale, scale);    
      }
    }, [position, scale]);

  useGSAP(() => {
    if (targetRef.current) {
      gsap.to(targetRef.current.position, {duration: 1, repeat: -1, yoyo: true})
    }
  })
  return (
    <Float floatIntensity={1}>
      <group {...props} ref={targetRef} dispose={null} scale={0.005}>
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

