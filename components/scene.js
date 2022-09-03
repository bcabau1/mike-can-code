import { Suspense} from 'react'
import { useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import {  Box, Flex } from '@chakra-ui/layout';

export function Model() {

  const meshref = useRef();

  useFrame(({ clock }) => {
    meshref.current.rotation.y = Math.sin(clock.getElapsedTime()/2)/2
  })

  const materials = useLoader(MTLLoader, "/racer-0.mtl");
  const obj = useLoader(OBJLoader, "/racer-0.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  console.log(obj);
  return (
    <mesh ref={meshref}>
       <primitive object={obj} scale={.8} position={[0,-2.65,0]}/>
    </mesh> 
    )
  
};

export default function Scene() {
  return (
        <Box position='relative' w='100%' h = 'calc(125px + 20vw)' >
          <Canvas >
            <ambientLight/>
            <Suspense fallback={null}>
              <Model/>
            </Suspense>
          </Canvas>
        </Box>    
  );
}

