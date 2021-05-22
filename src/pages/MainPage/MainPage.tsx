import React from 'react';
import {Canvas} from '@react-three/fiber';
import {Sky, PointerLockControls} from '@react-three/drei';
import Box from './Box';
import {Physics} from '@react-three/cannon';
import Player from './Player';
import Ground from './Ground';

const MainPage = () => {
  return (
    <Canvas>
      <Sky sunPosition={[100, 10, 100]} />
      <pointLight position={[10, 10, 10]} />
      <PointerLockControls />
      <Physics gravity={[0, -30, 0]}>
        <Player />
        <Ground />
        <Box position={[-1.2, 1, 0]} />
        <Box position={[1.2, 1, 0]} />
      </Physics>
      <group name="projectors">
        <mesh position={[-45, 0, 0]} castShadow={true}>
          <boxBufferGeometry args={[2, 1, 2]} />
          <meshLambertMaterial color="#69f" />
        </mesh>
        <mesh position={[-50, 0, 0]} castShadow={true}>
          <boxBufferGeometry args={[2, 1, 2]} />
          <meshLambertMaterial color="#69f" />
        </mesh>
        <mesh position={[0, 2, 0]} rotation={[0, 2, 0]} castShadow={true}>
          <spotLight
            args={[0xffffff, 0.5, 150]}
            power={1.5}
            angle={0.5}
            decay={2}
            penumbra={0.1}
            distance={200}
          />
        </mesh>
      </group>
    </Canvas>
  );
};

export default MainPage;
