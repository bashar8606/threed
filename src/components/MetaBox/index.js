"use client";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  ContactShadows,
  OrbitControls,
} from "@react-three/drei";
import style from "./MetaBox.module.scss";
import { useMetaBox } from "./useMetaBox";

const MetaBox = ({ data }) => {
  const { main, width, setModel, model } = useMetaBox({ style });

  return (
    <div className={`ratio ${style.wrap}`} ref={main}>
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 25 }}>
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          shadow-mapSize={2048}
          castShadow
        />
        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
        />
        <VrBox
          rotation={[0, 0, 0]}
          position={[0, 0.25, 0]}
          onUpdate={setModel}
          scale={1}
        />
        <ContactShadows
          position={[0, -1.4, 0]}
          opacity={0.75}
          scale={10}
          blur={3}
          far={4}
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default MetaBox;

function VrBox(props) {
  const { scene } = useGLTF("/assets/oculus_quest_2.glb");
  return (
    <group {...props} dispose={null}>
      <primitive object={scene} scale={1.6} />
    </group>
  );
}
