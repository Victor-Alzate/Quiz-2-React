import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Archivo CSS para personalizar

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bienvenido a nuestro portal de productos biodegradables</h1>
      <p>Facilitamos el comercio al por mayor de productos amigables con el medio ambiente.</p>
      
      <div className="home-cards">
        <div className="card">
          <h2>Productos</h2>
          <p>Explora nuestra variedad de productos disponibles al por mayor.</p>
          <Link to="/productos" className="btn">Ver Productos</Link>
        </div>
        <div className="card">
          <h2>Biodegradables</h2>
          <p>Descubre nuestros productos biodegradables y sus beneficios.</p>
          <Link to="/productos-biodegradables" className="btn">Ver Biodegradables</Link>
        </div>
        <div className="card">
          <h2>Contáctenos</h2>
          <p>¿Tienes preguntas? ¡Contáctanos y te ayudaremos!</p>
          <Link to="/contactenos" className="btn">Contáctanos</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
