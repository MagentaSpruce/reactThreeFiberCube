import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import "./App.css";

function MyRotatingBox() {
  const myMesh = React.useRef();
  const [active, setActive] = useState(false);

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = a;
  });

  return (
    <mesh
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      ref={myMesh}
    >
      <boxBufferGeometry />
      <meshPhongMaterial color="royalblue" />
    </mesh>
  );
}

// function Camera(props) {
//   const ref = useRef();
//   const set = useThree((state) => state.set);
//   // Make the camera known to the system
//   useEffect(() => void set({ camera: ref.current }), []);
//   // Update it every frame
//   useFrame(() => ref.current.updateMatrixWorld());
//   return <perspectiveCamera ref={ref} {...props} />;
// }

export default function App() {
  return (
    <div className="App">
      <Canvas>
        {/* <Camera position={[0, 0, 4]} /> */}
        <MyRotatingBox />
        <ambientLight intensity={0.1} />
        <directionalLight />
      </Canvas>
    </div>
  );
}
