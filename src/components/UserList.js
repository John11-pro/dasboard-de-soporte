import React from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
  const users = [
    { id: 1, name: 'Jerlyth Cristina Torres', email: 'jerlythtorres87@gmail.com', dni: '73010039', whatsapp: '965041479' },
    { id: 2, name: 'Juan Pérez', email: 'juanperez@gmail.com', dni: '12345678', whatsapp: '987654321' },
    { id: 3, name: 'Carlos Mendoza', email: 'carlosmendoza@gmail.com', dni: '23456789', whatsapp: '965432123' },
    { id: 4, name: 'Ana García', email: 'anagarcia@gmail.com', dni: '34567890', whatsapp: '945678901' },
    { id: 5, name: 'Pedro Ruiz', email: 'pedroruiz@gmail.com', dni: '45678901', whatsapp: '935987654' },
    { id: 6, name: 'María López', email: 'marialopez@gmail.com', dni: '56789012', whatsapp: '925876543' },
    { id: 7, name: 'Luis Martínez', email: 'luismartinez@gmail.com', dni: '67890123', whatsapp: '915765432' },
    { id: 8, name: 'Laura González', email: 'lauragonzalez@gmail.com', dni: '78901234', whatsapp: '905654321' },
    { id: 9, name: 'Sergio Hernández', email: 'sergiohernandez@gmail.com', dni: '89012345', whatsapp: '895543210' },
    { id: 10, name: 'Elena Pérez', email: 'elenaperez@gmail.com', dni: '90123456', whatsapp: '885432109' },
  ];

  return (
    <div className="user-list">
      <h1>Usuarios</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre y Apellido</th>
            <th>DNI</th>
            <th>Whatsapp</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {/* Enlace en el nombre que redirige a UserDetails */}
                <Link to={`/user-details/${user.id}`} className="user-name-link">
                  {user.name}
                </Link>
              </td>
              <td>{user.dni}</td>
              <td>{user.whatsapp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
