import { motion } from "framer-motion";
export function Projects() {
  const projects = [
    {
      title: "Puntos",
      description:
        "A web app that boosts workplace engagement. Features Firebase Auth, JWT, Slack alerts, and MVC backend.",
      github: "https://github.com/teja-projects/puntos",
    },
    {
      title: "Hand Sign Recognition",
      description:
        "ML model using PyTorch and ensemble methods like DenseNet and ShuffleNet, achieving 99% accuracy.",
      github: "https://github.com/teja-projects/handsign-recognition",
    },
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        margin: "2rem",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Projects</h2>
      <motion.div
        style={{
          display: "flex",
          gap: "1.5rem",
          overflowX: "auto",
          width: "100%",
          scrollBehavior: "smooth",
          height: "100%",
        }}
        whileTap={{ cursor: "grabbing" }}
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            style={{
              border: "1px solid #ccc",
              borderRadius: "1rem",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div style={{ flex: "1" }}>
              <h3
                style={{
                  fontWeight: "bold",
                  fontSize: "1.125rem",
                  marginBottom: "0.5rem",
                }}
              >
                {project.title}
              </h3>
              <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
                {project.description}
              </p>
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#2563eb",
                fontSize: "0.875rem",
                textDecoration: "underline",
              }}
            >
              GitHub
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
