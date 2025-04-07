import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import "./styles.css";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        {
          title: "Contacted Via Portfolio",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("Error:", error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        📬 Contact Me
      </motion.h2>

      <motion.form
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-button">
          {submitted ? "Message Sent ✅" : "Send Message"}
        </button>
      </motion.form>
      <div className="contact-socials">
        <a
          href="https://www.linkedin.com/in/teja-puvvula-a98368210/"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          🔗 LinkedIn
        </a>
      </div>

      <footer className="contact-footer">
        &copy; {new Date().getFullYear()} Teja Puvvula. All rights reserved.
      </footer>
    </section>
  );
}
