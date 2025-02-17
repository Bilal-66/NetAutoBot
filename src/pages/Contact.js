import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Contact.css";
import { db, collection, addDoc } from "../components/firebaseConfig"; // Assure-toi que firebaseConfig.js est correctement configuré

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // 🔹 Active le statut de chargement

    try {
      // 🔹 Envoi des données vers Firestore
      await addDoc(collection(db, "messages"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date(),
      });

      setSubmitted(true);
      
      
      // 🔹 Réinitialiser le formulaire après succès
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000); // Remet le statut après 3 secondes
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }

    setLoading(false); // 🔹 Désactive le statut de chargement
  };

  return (
    <motion.section
      className="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>Contact Me</h1>
      <p>Feel free to reach out. I'll get back to you as soon as possible!</p>

      <motion.form
        onSubmit={handleSubmit}
        className="contact-form"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          whileFocus={{ scale: 1.05, borderColor: "#7c3aed" }}
          required
        />
        <motion.input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          whileFocus={{ scale: 1.05, borderColor: "#7c3aed" }}
          required
        />
        <motion.textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          whileFocus={{ scale: 1.05, borderColor: "#7c3aed" }}
          required
        />

        <motion.button
          type="submit"
          className="submit-button"
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #7c3aed" }}
          whileTap={{ scale: 0.9 }}
          disabled={loading} // 🔹 Désactive le bouton si en cours de chargement
        >
          {loading ? "Sending..." : submitted ? "Message Sent ✔" : "Send Message"}
        </motion.button>
      </motion.form>
    </motion.section>
  );
};

export default Contact;
