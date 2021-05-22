import React from 'react';
import {Canvas} from '@react-three/fiber';


const ReConfigPage = () => {
    return (
        <Canvas>
            <pointLight position={[10, 10, 10]}/>
            <mesh>
                <sphereBufferGeometry/>
                <meshStandardMaterial color="hotpink"/>
            </mesh>
        </Canvas>
    )
};

export default ReConfigPage