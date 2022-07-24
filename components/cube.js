import { useState, useEffect, useRef, useCallback } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Box } from '@chakra-ui/layout'

function Cube(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (
      ref.current.rotation.y += 0.001)
    )
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
    {...props}
    dpr={window.devicePixelRatio}
    ref={ref}
    scale={1}>
    <boxGeometry args={[2,2,2]} />
    <meshStandardMaterial color={'black'} wireframe={true}  />
    </mesh>
    
  )
}

export default function Scene({children})  {
  return    (
    <Canvas frameloop='always'>
        <ambientLight />
        <Cube position={[.5, .5, 0]} />
    </Canvas>
    )
}
