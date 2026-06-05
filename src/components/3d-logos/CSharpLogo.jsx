import React, { useEffect, useRef, useState } from "react";
import { Float, useGLTF } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function CSharpLogo(props) {
  const { nodes, materials } = useGLTF("/models/csharp.glb");
  const csharpRef = useRef();
  const [scale, setScale] = useState(0.01);
  const [position, setPosition] = useState([14, 7, 0]);

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setPosition([-2, 7, -1]);
        setScale(0.007);
      } else if (width < 768) {
        setPosition([-2, 7, -1]);
        setScale(0.008);
      } else if (width < 1024) {
        setPosition([-2, 7, 0]);
        setScale(0.009);
      } else if (width < 1280) {
        setPosition([-2, 7, 1]);
        setScale(0.01);
      } else {
        setPosition([-2, 7, 1]);
        setScale(0.01);
      }
    };
    window.addEventListener("resize", updateDimensions);
    updateDimensions();
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (csharpRef.current) {
      csharpRef.current.position.set(...position);
      csharpRef.current.scale.set(scale, scale, scale);
    }
  }, [position, scale]);

  useGSAP(() => {
    if (csharpRef.current) {
      gsap.from(csharpRef.current.position, {
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }
  }, []);

  return (
    <Float floatIntensity={1}>
      <group ref={csharpRef} {...props} dispose={null} scale={scale}>
        <group scale={0.05}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["C#_C#_0"].geometry}
            material={materials.material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </Float>
  );
}

useGLTF.preload("/models/csharp.glb");
