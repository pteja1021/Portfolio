import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import "./styles.css";

const projects = [
  {
    title: "Puntos",
    tech: ["React", "Firebase", "Express", "Prisma", "MySQL"],
    description:
      "A web app for peer recognition and rewards. Integrated Slack alerts, Firebase auth, and admin tools.",
    link: "https://github.com/pteja1021/puntos",
  },
  {
    title: "Hand Sign Recognition",
    tech: ["Python", "PyTorch", "Sklearn"],
    description:
      "99% accuracy using DenseNet, ShuffleNet, ResNet ensemble. Built in PyTorch with preprocessing.",
    link: "https://github.com/pteja1021",
  },
  {
    title: "Digit and Letter Recognition",
    tech: ["Python", "PyTorch", "Sklearn"],
    description:
      "Variety of models including MLP, DenseNet, RNN, ViT were studied and compared. Trained on the EMNIST dataset.",
    link: "https://github.com/pteja1021/EMNIST-dataset",
  },
];

const skills = [
  "React",
  "Node.js",
  "Express",
  "Golang",
  "Python",
  "PyTorch",
  "Sklearn",
  "MongoDB",
  "MySQL",
  "Prisma",
  "Firebase",
  "Docker",
  "Git",
  "Linux",
];

export function Projects() {
  return (
    <section
      id="projects"
      className="projects-section"
      style={{ scrollMarginTop: "var(--nav-height, 80px)" }}
    >
      <Canvas
        className="projects-canvas"
        camera={{ position: [0, 0, 15], fov: 60 }}
      >
        <ambientLight intensity={1.5} />
      </Canvas>

      <h2 className="projects-title">🛠 Projects and Skills</h2>

      <div className="projects-flex">
        {projects.map((project, i) => (
          <motion.div
            className="project-card"
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <h3 className="card-title">{project.title}</h3>
            <p className="card-desc">{project.description}</p>
            <div className="card-tags">
              {project.tech.map((tag, j) => (
                <span key={j} className="tag">
                  #{tag}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                className="card-link"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            )}
          </motion.div>
        ))}
      </div>

      <div className="skills-section">
        <h3 className="skills-title">🧠 Technical Skills</h3>
        <div className="skills-list">
          {skills.map((skill, i) => (
            <motion.span
              className="skill-badge"
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 0.3,
                delay: i * 0.05,
              }}
              viewport={{ once: false }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
