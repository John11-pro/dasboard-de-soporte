import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import Transactions from './components/Transactions';
import UserDetails from './components/UserDetails'; // Asegúrate de importar UserDetails
import Home from './components/Home'; // Página principal
import './App.css';  // Asegúrate de importar el archivo CSS

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Página de inicio */}
        <Route path="/user-list" element={<UserList />} />  {/* Página de usuarios */}
        <Route path="/user-details/:id" element={<UserDetails />} />  {/* Detalles del usuario */}
        <Route path="/transactions" element={<Transactions />} />  {/* Página de transacciones */}
      </Routes>
    </Router>
  );
}

export default App;
