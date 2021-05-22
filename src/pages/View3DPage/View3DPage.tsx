import React, {Suspense} from 'react';
import {useLoader} from '@react-three/fiber';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

const Buildings = () => {
  const gltf = useLoader(GLTFLoader, './../../models/buildings.gltf');
  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  );
};

const View3DPage = () => {
  return (
    <Suspense fallback={null}>
      <Buildings />
    </Suspense>
  );
};

export default View3DPage;
