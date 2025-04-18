import React, { useRef } from "react";
import { Float, useGLTF } from "@react-three/drei";

export function GitLogo(props) {
  const { nodes, materials } = useGLTF("/git-svg-transformed.glb");
  const gitRef = useRef();

  return (
    <Float floatIntensity={1}>
      <group ref={gitRef} {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0.geometry}
          material={nodes.mesh_0.material}
          position={[-37.233, 50.062, 33.39]}
          rotation={[0, Math.PI / 4, -Math.PI]}
          scale={[-1.087, 1.087, 1.087]}
        />
      </group>
    </Float>
  );
}

useGLTF.preload("/git-svg-transformed.glb");
