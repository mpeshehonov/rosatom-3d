import React from 'react';
import {Canvas} from '@react-three/fiber';
import Box from './Box';

const MainPage = () => {
  return (
    <Canvas>
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
};

export default MainPage;
