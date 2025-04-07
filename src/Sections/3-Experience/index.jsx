import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./styles.css";

const experiences = [
  {
    company: "Beautiful Code LLP",
    role: "Software Engineer",
    period: "Oct 2022 – Aug 2024",
    tags: [
      "React",
      "TypeScript",
      "Golang",
      "Python",
      "GraphQL",
      "Hasura",
      "Jenkins",
      "Google Cloud Platform",
    ],
    points: [
      "Spearheaded React & TypeScript development for dynamic UIs",
      "Integrated GraphQL using Apollo for efficient data handling",
      "Improved frontend performance with route-based code splitting (15%+)",
      "Engineered DSP automation, reducing manual work by 90%",
      "Migrated 9000+ users using automation scripts",
      "Boosted system performance 30% via Pub/Sub and Cloud Tasks",
      "Cut deployment time by 50% with Golang routine optimization",
      "Mentored junior devs in React, Golang, SQL, Hasura; conducted code reviews",
      "Collaborated with PMs and engineers to align product goals",
    ],
  },
  {
    company: "Beautiful Code LLP",
    role: "Developer Trainee",
    period: "Jul 2022 – Sep 2022",
    tags: ["MERN", "Node.js", "React", "MongoDB", "MySQL"],
    points: [
      "Completed intensive full-stack web dev training (React, Node.js, Golang, SQL)",
      "Developed and deployed MERN stack app to Heroku",
      "Won 'Best Project for Culture' award during training program",
    ],
  },
];

export function Experience() {
  const [ref] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section
      id="experience"
      className="experience-section"
      style={{
        minHeight: "100vh",
        scrollMarginTop: "var(--nav-height, 80px)",
        padding: "4rem 1rem",
      }}
      ref={ref}
    >
      <h2 className="experience-title">Work Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="experience-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <div className="experience-header">
              <h3>
                {exp.role} @ {exp.company}
              </h3>
              <p className="experience-period">{exp.period}</p>
            </div>
            <ul className="experience-points">
              {exp.points.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
            <div className="experience-tags">
              {exp.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
