import React, {useRef, useState} from 'react';
import * as THREE from 'three';
import {useFrame} from '@react-three/fiber';

const Box = (props: JSX.IntrinsicElements['mesh']) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef<THREE.Mesh>(null!);
  const hemisphere = useRef<THREE.HemisphereLight>(null!);
  const perspectiveCamera = useRef<THREE.PerspectiveCamera>(null!);
  const vector3 = new THREE.Vector3(-14, 8, 16);
  const euler = new THREE.Euler(-14, 8, 16, 'YXZ');
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <perspectiveCamera
        ref={perspectiveCamera}
        position={vector3}
        rotation={euler}
      />
      <hemisphereLight ref={hemisphere} />
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

export default Box;
