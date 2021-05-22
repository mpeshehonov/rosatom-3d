import React, {useRef} from 'react';
import * as THREE from 'three';
import {useGLTF} from '@react-three/drei';
import {GLTF} from 'three/examples/jsm/loaders/GLTFLoader';

type GLTFResult = GLTF & {
  nodes: {
    ['8_sm_tr_after_zb']: THREE.Mesh;
    GeoSphere07: THREE.Mesh;
    Object03: THREE.Mesh;
    UTypeStair001: THREE.Mesh;
  };
  materials: {};
};

const Buildings = (props: JSX.IntrinsicElements['group']) => {
  const group = useRef<THREE.Group>();
  const {nodes, materials} = useGLTF('/buildings.gltf') as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <mesh
          name="8_sm_tr_after_zb"
          castShadow
          receiveShadow
          geometry={nodes['8_sm_tr_after_zb'].geometry}
          material={nodes['8_sm_tr_after_zb'].material}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{name: '8 sm tr after zb'}}
        />
        <mesh
          name="GeoSphere07"
          castShadow
          receiveShadow
          geometry={nodes.GeoSphere07.geometry}
          material={nodes.GeoSphere07.material}
          position={[21.14, -0.62, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.68, 0.68, 0.68]}
          userData={{name: 'GeoSphere07'}}
        />
        <mesh
          name="Object03"
          castShadow
          receiveShadow
          geometry={nodes.Object03.geometry}
          material={nodes.Object03.material}
          position={[21.14, -0.62, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.68, 0.68, 0.68]}
          userData={{name: 'Object03'}}
        />
        <mesh
          name="UTypeStair001"
          castShadow
          receiveShadow
          geometry={nodes.UTypeStair001.geometry}
          material={nodes.UTypeStair001.material}
          position={[0, -0.62, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{name: 'UTypeStair001'}}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/buildings.gltf');

export default Buildings;
