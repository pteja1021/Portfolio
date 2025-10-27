import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./styles.css";

const experiences = [
  {
    company: "Beautiful Code LLP",
    role: "Software Engineer (PRO Team)",
    period: "January 2024 - August 2024",
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
      "Spearheaded React Typescript development of 6 critical modules, transforming Figma designs into responsive User Interfaces",
      "Replicated 2 Tableau reports into in-house modules, eliminating Tableau licenses for over 800 users",
      "Slashed API response times from 400ms to 200ms by using materialized views in Hasura",
      "Implemented event-driven mechanism to automatically assign report permissions for over 20,000 users",
      "Architected report generation service, reducing failures to under 1% by migrating to a Python service",
      "Integrated Monte Carlo observability on Google BigQuery, reducing anomaly detection lag from 24 hours to under 1 hour",
      "Built CI/CD pipelines for 2 microservices with Terraform-managed infra, automating deployment",
    ],
  },
  {
    company: "Beautiful Code LLP",
    role: "Software Engineer ( PACT Team )",
    period: "July 2022 - December 2023",
    tags: [
      "MERN",
      "Node.js",
      "React",
      "MongoDB",
      "MySQL",
      "Golang",
      "Python",
      "GraphQL",
      "Hasura",
      "Jenkins",
      "Google Cloud Platform",
    ],
    points: [
      "Automated integrations with over 5 DSP platforms, eliminating 90% of manual work and enabling scalable onboarding of over 8000 accounts",
      "Managed Jenkins jobs to sync 3 Salesforce entities from Salesforce brigding gap between Sales and Engineering",
      "Implemented route-based code splitting reducing bundle size by 15% and improving frontend load times",
      "Designed data models and solutioned for contract amendments using serverless functions, collaborating with over 4 teams",
      "Moved over 5 cloud functions to Cloud Run V2 improving concurrency to 1000 requests per instance",
      "Orchestrated migration of 9000+ users and accounts using Golang Routines controlled by GRPC calls",
      "Reduced startup latency of a core service by nearly 4 minutes by migrating init cron tasks to K8s Jobs",
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
