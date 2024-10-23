import React from 'react';
import './Footer.css'; // Para agregar estilos personalizados

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Comercio de Productos Biodegradables. Todos los derechos reservados.</p>
      <p>
        Contacto: <a href="mailto:info@biodegradables.com">info@biodegradables.com</a> | Tel: 123-456-789
      </p>
    </footer>
  );
};

export default Footer;
