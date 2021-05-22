import React from 'react';
import {PlaneProps, usePlane} from '@react-three/cannon';

export const Ground = (props: PlaneProps) => {
  const [ref] = usePlane(() => ({rotation: [-Math.PI / 2, 0, 0], ...props}));
  return (
    <mesh
      ref={ref}
      receiveShadow={true}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, -0.65, 0]}
    >
      <planeGeometry args={[2000, 2000]} />
      <meshPhongMaterial color={0x948d7d} depthWrite={false} />
    </mesh>
  );
};

export default Ground;
