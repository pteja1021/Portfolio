import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import "./styles.css";

const roles = [
  "Full Stack Developer",
  "Team Player",
  "Machine Learning Enthusiast",
  "Fast Learner",
  "Software Engineer",
  "Problem Solver",
  "Cloud and Automation",
  "Tech Enthusiast",
];

function CameraRig() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    camera.position.x += (mouse.current.x * 3 - camera.position.x) * 0.05;
    camera.position.y += (mouse.current.y * 3 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function ShootingStars() {
  const group = useRef(null);
  const stars = Array.from({ length: 20 }, () => ({
    pos: new THREE.Vector3(
      (Math.random() - 0.5) * 100,
      (Math.random() - 0.5) * 100,
      -Math.random() * 100
    ),
    speed: 0.5 + Math.random(),
  }));

  useFrame(() => {
    group.current?.children.forEach((star, i) => {
      star.position.z += stars[i].speed;
      if (star.position.z > 0) {
        star.position.z = -100;
        star.position.x = (Math.random() - 0.5) * 100;
        star.position.y = (Math.random() - 0.5) * 100;
      }
    });
  });

  return (
    <group ref={group}>
      {stars.map((s, i) => (
        <mesh key={i} position={s.pos}>
          <sphereGeometry args={[0.05, 4, 4]} />
          <meshBasicMaterial color="white" />
        </mesh>
      ))}
    </group>
  );
}

export function Intro() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="intro" className="intro-section">
      <Canvas
        className="intro-canvas"
        camera={{ position: [0, 0, 10], fov: 75 }}
      >
        <Stars
          radius={100}
          depth={20}
          count={5000}
          factor={6}
          saturation={0}
          fade
          speed={1}
        />
        <ShootingStars />
        <CameraRig />
      </Canvas>

      <div className="intro-content">
        <h1 className="intro-heading">Hello World! I'm Teja</h1>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="intro-role">{roles[index]}</h2>
        </motion.div>
      </div>
    </section>
  );
}
