import React, { useEffect, useRef, useState } from "react";
import { Float, useGLTF } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function NodeJsLogo(props) {
  const { nodes, materials } = useGLTF("/models/node-transformed.glb");
  const nodeRef = useRef();
  const [position, setPosition] = useState([15, 8, 5]);
  const [scale, setScale] = useState(0.008);

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setPosition([5, 8, 5]);
        setScale(0.004);
      } else if (width < 768) {
        setPosition([6, 8, 5]);
        setScale(0.004);
      } else if (width < 1024) {
        setPosition([8, 8, 5]);
        setScale(0.005);
      } else if (width < 1280) {
        setPosition([10, 8, 5]);
        setScale(0.006);
      } else {
        setPosition([15, 5, 5]);
        setScale(0.006);
      }
    };
    window.addEventListener("resize", updateDimensions);
    updateDimensions();
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

//   useEffect(() => {
//     if (nodeRef.current) {
//       nodeRef.current.position.set(...position);
//       nodeRef.current.scale.set(scale, scale, scale);
//     }
//   }, [position, scale]);

  useGSAP(() => {
    if (nodeRef.current) {
      gsap.from(nodeRef.current.position, {
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "bounce",
      });
    }
  }, []);
  return (
    <Float floatIntensity={1}>
      <group ref={nodeRef} {...props} dispose={null}>
        <mesh
          geometry={
            nodes["tripo_node_a2ae1f0a-576e-4d11-a22b-f4f90dd99b4b"].geometry
          }
          material={
            materials["tripo_material_a2ae1f0a-576e-4d11-a22b-f4f90dd99b4b"]
          }
          rotation={[50,-2,0]}
        />
      </group>
    </Float>
  );
}

useGLTF.preload("/models/node-transformed.glb");
