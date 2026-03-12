import React, { useEffect, useRef, useState } from 'react'
import { Float, OrbitControls, useGLTF } from '@react-three/drei'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function PythonLogo(props) {
  const scene = useGLTF('/models/python.glb');
  const pythonRef = useRef();
  const [position, setPosition] = useState([-21, -10, 0]);
    const [scale, setScale] = useState(0.006);
  
    useEffect(() => {
      const updateDimensions = () => {
        const width = window.innerWidth;
        if (width < 640) {
          setPosition([-8, -10, 0]);
          setScale(0.004);
        } else if (width < 768) {
          setPosition([-10, -10, 0]);
          setScale(0.004);
        } else if (width < 1024) {
          setPosition([-13, -10, 0]);
          setScale(0.004)
        } else if (width < 1280) {
          setPosition([-14, -10, 0]);
          setScale(0.004)
        } else if (width < 1440) {
          setPosition([-18, -10, 0]);
          setScale(0.005)
        } else {
          setPosition([-21, -10, 0]);
          setScale(0.006);
        }
      };
      window.addEventListener('resize', updateDimensions);
      updateDimensions();
      return () => window.removeEventListener('resize', updateDimensions);
    }, []);
  
    useEffect(() => {
      if (pythonRef.current) {
        pythonRef.current.position.set(...position);
        pythonRef.current.scale.set(scale, scale, scale);    
      }
    }, [position, scale]);

  // useGSAP(() => {
  //   if (pythonRef.current) {
  //     gsap.to(pythonRef.current.position, {duration: 1, repeat: -1, yoyo: true})
  //   }
  // })
  return (
    <Float floatIntensity={1}>
      <group {...props} ref={pythonRef} dispose={null} scale={scale}>
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

useGLTF.preload('/models/python.glb')

