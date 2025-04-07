import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Canvas, useFrame } from "@react-three/fiber";
import photo from "Images/profile-pic.png";
import "./styles.css";
import * as THREE from "three";
import { Text } from "@react-three/drei";

function FloatingTextParticles() {
  const groupRef = useRef(null);

  const symbols = ["{", "}", "</>", "λ", "π", "∑", "ƒ", "Ω", "∞", "≠"];

  const items = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    symbol: symbols[Math.floor(Math.random() * symbols.length)],
    position: new THREE.Vector3(
      (Math.random() - 0.5) * 80, // wider spread on X
      (Math.random() - 0.5) * 50, // taller spread on Y
      -Math.random() * 60 // deeper Z axis
    ),
    speed: Math.random() * 0.03,
    fontSize: Math.random() + 1,
  }));

  useFrame(() => {
    groupRef.current?.children.forEach((child, i) => {
      child.position.y += items[i].speed;
      if (child.position.y > 30) {
        child.position.y = -30;
        child.position.x = (Math.random() - 0.5) * 80;
        child.position.z = -Math.random() * 60;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {items.map((item) => (
        <Text
          key={item.id}
          position={item.position}
          fontSize={item.fontSize}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {item.symbol}
        </Text>
      ))}
    </group>
  );
}

export function About() {
  const controlsImage = useAnimation();
  const controlsText = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controlsImage.start({ opacity: 1, x: 0 });
      controlsText.start({ opacity: 1, x: 0 });
    } else {
      controlsImage.start({ opacity: 0, x: -100 });
      controlsText.start({ opacity: 0, x: 100 });
    }
  }, [inView, controlsImage, controlsText]);

  return (
    <section id="about" ref={ref} className="about-section">
      <Canvas
        className="about-canvas"
        camera={{ position: [0, 0, 15], fov: 75 }}
      >
        <ambientLight intensity={2} />
        <FloatingTextParticles />
      </Canvas>

      <motion.h2
        className="about-title"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>

      <div className="about-content-wrapper">
        <motion.div className="about-content-container">
          <motion.div
            className="about-image-container"
            initial={{ opacity: 0, x: -100 }}
            animate={controlsImage}
            transition={{ duration: 1.5 }}
          >
            <img src={photo} alt="Teja" className="about-image" />
          </motion.div>

          <motion.p
            className="about-text"
            initial={{ opacity: 0, x: 100 }}
            animate={controlsText}
            transition={{ duration: 1.5 }}
          >
            Hey there! I'm Teja, a Software Engineer with a robust foundation in full-stack
            development and automation. I bring over two years of experience
            building scalable systems using React.js, Golang, and cloud
            technologies. I'm passionate about crafting innovative solutions
            that elevate user experience and streamline deployments. Currently
            pursuing my Master's in Computer Science at the University of
            Central Florida (GPA: 4.0). I'm dedicated to continuous learning and
            staying up-to-date with the latest advancements in the tech
            industry.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
