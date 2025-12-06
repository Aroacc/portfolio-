import React, { useState } from "react";
import { Github, Linkedin } from "lucide-react";
import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formData,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )

        .then(() => {
          alert("¡Mensaje enviado! Gracias por contactarme.");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch(() => {
          alert("Hubo un error al enviar el mensaje, intenta de nuevo.");
        });
    } else {
      alert("Por favor completa todos los campos");
    }
  };

  return (
    <section id="contacto" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">
          <span className="text-gradient">Contacto</span>
        </h2>

        <div className="contact-form-wrapper">
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ejemplo@email.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Cuéntame sobre tu proyecto..."
              rows={5}
            ></textarea>
          </div>
          <button className="btn-submit" onClick={handleSubmit}>
            Enviar Mensaje
          </button>

          <div className="social-links">
            <a
              href="https://github.com/Aroacc"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/aroa-clavijo-caravante-116b851a9"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
