
"use client"
import Image from "next/image";
import { Canvas } from '@react-three/fiber'
import { useGLTF, PresentationControls, Environment, ContactShadows } from '@react-three/drei'
import style from "./MetaBox.module.scss"


const MetaBox = ({ data }) => {
  // const { main, width } = useHomeBanner({ style });

  return (
    <div className={`ratio ${style.wrap}`}>
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 25 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={2048} castShadow />
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 2, tension: 500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
          <Watch rotation={[0, 0, 0]} position={[0, 0.25, 0]} scale={1} />
          {/* <Watch rotation={[-Math.PI / 1, 1, 1]} position={[0, 0.25, 0]} scale={1} /> */}
        </PresentationControls>
        <ContactShadows position={[0, -1.4, 0]} opacity={0.75} scale={10} blur={3} far={4} />
        <Environment preset="city" />
      </Canvas>
    </div>

  );
};

export default MetaBox;



function Watch(props) {
  const { scene } = useGLTF('/assets/oculus_quest_2.glb')
  console.log(scene, "scenescenescene");
  return (
    <group {...props} dispose={null}>
      <primitive object={scene} scale={1} />
      {/* <mesh geometry={nodes.Object005_glass_0.geometry} material={materials.glass}> </mesh> */}
      {/* <mesh castShadow receiveShadow geometry={nodes.Object006_watch_0.geometry} material={materials.watch} /> */}
    </group>
  )
}
