import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './Contactenos.css'; // Agregamos estilos si es necesario

const Contactenos = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (!formData.nombre.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Campo vacío',
        text: 'Por favor ingresa tu nombre',
      });
      return;
    }

    if (!formData.email.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Campo vacío',
        text: 'Por favor ingresa tu correo electrónico',
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      Swal.fire({
        icon: 'error',
        title: 'Correo inválido',
        text: 'Por favor ingresa un correo válido',
      });
      return;
    }

    if (!formData.mensaje.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Campo vacío',
        text: 'Por favor ingresa tu mensaje',
      });
      return;
    }

    // Si todo está bien
    Swal.fire({
      icon: 'success',
      title: 'Formulario enviado',
      text: 'Gracias por contactarnos, te responderemos pronto',
    });

    // Limpiar el formulario
    setFormData({
      nombre: '',
      email: '',
      mensaje: ''
    });
  };

  return (
    <div className="contact-container">
      <h2>Contáctenos</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ingresa tu nombre"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ingresa tu correo electrónico"
          />
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Escribe tu mensaje"
          ></textarea>
        </div>

        <button type="submit" className="btn-submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contactenos;
