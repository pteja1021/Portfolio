import { motion } from "framer-motion";

export function Experience() {
  const timeline = [
    {
      year: "Oct 2022 – Jul 2024",
      detail: (
        <div>
          <p style={{ fontWeight: "600" }}>
            Full Stack Software Engineer, Beautiful Code LLP
          </p>
          <ul
            style={{
              paddingLeft: "1.25rem",
              fontSize: "0.875rem",
              marginTop: "0.5rem",
            }}
          >
            <li>
              Led frontend development using React and TypeScript for B2B SaaS
              platforms.
            </li>
            <li>
              Designed and developed 20+ reusable components, enhancing code
              maintainability and speeding up delivery by 30%.
            </li>
            <li>
              Built an automation tool to replace a 4-hour manual onboarding
              process, reducing human error and saving engineering time.
            </li>
            <li>
              Optimized Golang microservices and orchestrated deployments,
              improving deployment speed by 50%.
            </li>
            <li>
              Mentored 4+ junior developers, establishing code review guidelines
              and best practices.
            </li>
          </ul>
        </div>
      ),
    },
    {
      year: "Jul 2022 – Sep 2022",
      detail: (
        <div>
          <p style={{ fontWeight: "600" }}>
            Developer Trainee, Beautiful Code LLP
          </p>
          <ul
            style={{
              paddingLeft: "1.25rem",
              fontSize: "0.875rem",
              marginTop: "0.5rem",
            }}
          >
            <li>
              Created a MERN stack application for internal team collaboration.
            </li>
            <li>
              Implemented JWT-based authentication, RESTful APIs, and
              React-based frontend components.
            </li>
            <li>
              Received the “Best Project for Culture” award among 10+ intern
              submissions.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section
      id="experience"
      style={{ minHeight: "100vh", margin: "2rem" }}
    >
      <h2
        style={{ fontSize: "2rem", textAlign: "center", marginBottom: "2rem" }}
      >
        Experience
      </h2>
      <div
        style={{
          position: "relative",
          paddingLeft: "1.5rem",
        }}
      >
        {timeline.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            style={{ marginBottom: "2rem" }}
          >
            <div style={{ fontSize: "0.875rem", color: "#6b7280" }}>
              {item.year}
            </div>
            <div style={{ fontSize: "1.125rem", marginTop: "0.25rem" }}>
              {item.detail}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
