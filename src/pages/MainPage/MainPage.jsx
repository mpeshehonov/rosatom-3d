import React, {Suspense, useState} from 'react';
import {Canvas} from '@react-three/fiber';
import {
  Sky,
  PointerLockControls,
  ContactShadows,
  PerspectiveCamera,
} from '@react-three/drei';
import Box from './Box';
import {Physics} from '@react-three/cannon';
import Player from './Player';
import Ground from './Ground';
import Buildings from './Buildings';
import {useControls} from 'leva';
import SockJsClient from 'react-stomp';

const MainPage = () => {
  const controls = useControls({
    sunPositionX: {value: 100, min: -200, max: 200, step: 10},
    sunPositionY: {value: 10, min: -200, max: 200, step: 10},
    sunPositionZ: {value: 100, min: -200, max: 200, step: 10},
  });
  const [message, setMessage] = useState(Array);

  return (
    <Canvas>
      <SockJsClient
        url="https://ancient-reaches-63076.herokuapp.com/ws"
        topics={['/sunposition']}
        onMessage={(msg) => {
          console.log(msg);
          setMessage(msg);
        }}
      />
      <PerspectiveCamera
        args={[75, window.innerWidth / window.innerHeight, 0.1, 200000]}
        position={[-14, 8, 16]}
      >
        <line>
          <lineBasicMaterial color={0xaaffaa} />
        </line>
      </PerspectiveCamera>
      <ContactShadows
        opacity={1}
        width={1}
        height={1}
        blur={1}
        far={10}
        resolution={256}
      />
      <PointerLockControls />
      <Sky
        sunPosition={[
          message.x ?? controls.sunPositionX,
          message.y ?? controls.sunPositionY,
          message.z ?? controls.sunPositionZ,
        ]}
      />
      <Physics gravity={[0, -30, 0]}>
        <Player />
        <Ground />
        <Box position={[-1.2, 1, 0]} />
        <Box position={[1.2, 1, 0]} />
        <Suspense fallback={null}>
          <Buildings />
        </Suspense>
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
            <cylinderGeometry args={[0.2, 0.2, 0.4, 20]} />
            <meshPhongMaterial color="#330099" />
            <spotLight
              args={[0xffffff, 0.5, 150]}
              position={[0, 2, 0]}
              rotation={[0, 2, 0]}
              castShadow={true}
              power={1.5}
              angle={0.5}
              decay={2}
              penumbra={0.1}
              distance={200}
              shadowCameraNear={0.01}
            />
          </mesh>
          <mesh position={[2, 2, 0]} rotation={[0, 2, 0]} castShadow={true}>
            <cylinderGeometry args={[0.2, 0.2, 0.4, 20]} />
            <meshPhongMaterial color="#330099" />
            <spotLight
              args={[0xffffff, 0.5, 150]}
              position={[2, 2, 0]}
              rotation={[0, 2, 0]}
              castShadow={true}
              power={1.5}
              angle={0.5}
              decay={2}
              penumbra={0.1}
              distance={200}
              shadowCameraNear={0.01}
            />
          </mesh>
        </group>
      </Physics>
    </Canvas>
  );
};

export default MainPage;
