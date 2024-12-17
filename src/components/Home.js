import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';  // Asegúrate de tener el archivo CSS para los estilos de Home.js

const Home = () => {
  return (
    <div className="home">
      <h1>Bienvenido al Dashboard</h1>
      <div className="buttons-container">
        <Link to="/user-list" className="button-link">
          <button className="button">Usuarios</button>
        </Link>
        <Link to="/transactions" className="button-link">
          <button className="button">Transacciones</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
