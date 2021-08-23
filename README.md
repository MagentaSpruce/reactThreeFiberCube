# Getting Started with React Three Fiberr

1) run npx create-react-app app
2) run npm install three react-three-fiber
3) Handle the imports:
```React
import React from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
```
4) Set up the function for the object.
```React
function MyRotatingBox() {
  return (
    <mesh>
      <boxBufferGeometry />
      <meshPhongMaterial color="royalblue" />
    </mesh>
  );
}
```
5) Setup the function for the canvas.
```React
export default function App() {
  return (
    <div className="App">
      <Canvas>
        <MyRotatingBox />
        <ambientLight intensity={0.1} />
        <directionalLight />
      </Canvas>
    </div>
  );
}
```
That will create the blue cube. Next it will be made to rotate in animation. 
6) Import useState and useRef then use.
```React
import React, { useState, useEffect, useRef } from "react";

function MyRotatingBox() {
  const myMesh = React.useRef();
  const [active, setActive] = useState(false);
```
7) Connect the mesh to the object function using the useRef and setup the mesh to respond to onClick event.
```React
  return (
    <mesh
    scale={active ? 1.5 : 1}
    onClick={() => setActive(!active)}
    ref={myMesh}
    >
```
8) Setup the animation function inside of the object function.
```React
function MyRotatingBox() {
  const myMesh = React.useRef();
  const [active, setActive] = useState(false);

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = a;
  });
```

Now the cube should be rotating. 

***End setup





