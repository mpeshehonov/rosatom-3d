import React from 'react';
import {Canvas} from '@react-three/fiber';
import {Sky, PointerLockControls} from '@react-three/drei';
import Box from './Box';

const MainPage = () => {
  return (
    <Canvas>
      <Sky sunPosition={[100, 10, 100]} />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <PointerLockControls />
      <group name="projectors">
        <mesh position={[-45, 0, 0]} castShadow={true}>
          <boxBufferGeometry args={[2, 1, 2]} />
          <meshLambertMaterial color="#69f" />
        </mesh>
      </group>
    </Canvas>
  );
};

export default MainPage;
