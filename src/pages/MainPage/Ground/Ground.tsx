import React from 'react';
import {PlaneProps, usePlane} from '@react-three/cannon';

export const Ground = (props: PlaneProps) => {
  const [ref] = usePlane(() => ({rotation: [-Math.PI / 2, 0, 0], ...props}));
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial />
    </mesh>
  );
};

export default Ground;
