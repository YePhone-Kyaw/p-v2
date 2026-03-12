import React, { useRef, useState, useEffect } from 'react'
import { Float, useGLTF } from '@react-three/drei'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function DockerLogo(props) {
  const { nodes, materials } = useGLTF('/models/docker.glb')
  const dockerRef = useRef();
  const [position, setPosition] = useState([8, 0, 5]);

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setPosition([3, 0, 5])
      } else if (width < 768) {
        setPosition([4, 0, 5])
      } else if (width < 1024) {
        setPosition([5, 0, 5])
      } else if (width < 1280) {
        setPosition([6, 0, 5])
      } else {
        setPosition([8, 0, 5])
      }
    };
    window.addEventListener('resize', updateDimensions);
    updateDimensions();
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (dockerRef.current) {
      dockerRef.current.position.set(...position);
    }
  }, [position]);

  useGSAP(() => {
    if (dockerRef.current)  {
      gsap.from(dockerRef.current.position, {duration: 2, repeat: -1, yoyo: true, ease: 'power2.inOut'})
    }
  }, []);

  return (
    <Float floatIntensity={1}>
    <group {...props} ref={dockerRef} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.488}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_0.geometry}
          material={materials.whale}
          position={[-1.546, 0, -0.072]}
          scale={2.731}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_0.geometry}
          material={materials.crate}
          position={[-3.008, -0.43, 0.664]}
          scale={0.435}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_0.geometry}
          material={materials.crate}
          position={[-2.03, -0.43, 0.664]}
          scale={0.435}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_0.geometry}
          material={materials.crate}
          position={[-1.07, -0.43, 0.664]}
          scale={0.435}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_0.geometry}
          material={materials.crate}
          position={[-0.128, -0.43, 0.664]}
          scale={0.435}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_0.geometry}
          material={materials.crate}
          position={[0.832, -0.43, 0.664]}
          scale={0.435}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_0.geometry}
          material={materials.crate}
          position={[-0.128, -0.43, 1.552]}
          scale={0.435}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_0.geometry}
          material={materials.crate}
          position={[-1.07, 0.439, 1.552]}
          scale={0.435}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_0.geometry}
          material={materials.crate}
          position={[-2.03, -0.43, 1.534]}
          scale={0.435}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_0.geometry}
          material={materials.crate}
          position={[-0.128, -0.43, 2.439]}
          scale={0.435}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_0.geometry}
          material={materials.crate}
          position={[-2.023, 0.528, 0.679]}
          scale={0.435}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_0.geometry}
          material={materials.crate}
          position={[-0.128, 0.488, 0.664]}
          scale={0.435}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011_0.geometry}
          material={materials.crate}
          position={[-0.128, 0.469, 1.552]}
          scale={0.435}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_0.geometry}
          material={materials.crate}
          position={[-1.07, 0.482, 0.664]}
          scale={0.435}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001_0.geometry}
          material={materials.whale_outline}
          position={[-1.546, 0, -0.072]}
          scale={2.731}
        />
      </group>
    </group>
    </Float>
  )
}

useGLTF.preload('/models/docker.glb')