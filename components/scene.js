import { Suspense} from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import {  Box, Flex } from '@chakra-ui/layout';

export function Model() {

  const materials = useLoader(MTLLoader, "/racer-0.mtl");
  const obj = useLoader(OBJLoader, "/racer-0.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  console.log(obj);
  return (
    <mesh>
      <primitive object={obj} scale={.95} position={[0,-2.90,0]}/>
    </mesh> 
    )
  
};

export default function Scene() {
  return (
        <Box position='relative' w='100%' h = 'calc(150px + 20vw)' border='1px solid blue'>
          <Canvas >
            <ambientLight/>
            <OrbitControls/>
            <Suspense fallback={null}>
              <Model/>
            </Suspense>
          </Canvas>
        </Box>    
  );
}

