import React, {useRef} from 'react';
import {useGLTF} from '@react-three/drei';

const Building = (props: any) => {
  const group = useRef();
  // @ts-ignore
  const {nodes, materials} = useGLTF('/building.gltf');

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes['8_sm_tr_after_zb'].geometry}
        material={nodes['8_sm_tr_after_zb'].material}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
};

useGLTF.preload('/building.gltf');

export default Building;
