import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  // Obtener el ID del usuario desde la URL
  const { id } = useParams();

  // Los usuarios (aquí puedes obtenerlos de una API o base de datos)
  const users = [
    { id: 1, name: 'Jerlyth Cristina Torres', email: 'jerlythtorres87@gmail.com', dni: '73010039', whatsapp: '965041479', code: 'ABC123', dniLink: 'link_dni.pdf', reverseLink: 'link_reverse.pdf', photoLink: 'link_photo_dni.jpg', cardLink: 'link_photo_card.jpg' },
    { id: 2, name: 'Juan Pérez', email: 'juanperez@gmail.com', dni: '12345678', whatsapp: '987654321', code: 'DEF456', dniLink: 'link_dni.pdf', reverseLink: 'link_reverse.pdf', photoLink: 'link_photo_dni.jpg', cardLink: 'link_photo_card.jpg' },
    { id: 3, name: 'Carlos Mendoza', email: 'carlosmendoza@gmail.com', dni: '23456789', whatsapp: '965432123', code: 'GHI789', dniLink: 'link_dni.pdf', reverseLink: 'link_reverse.pdf', photoLink: 'link_photo_dni.jpg', cardLink: 'link_photo_card.jpg' },
    { id: 4, name: 'Ana García', email: 'anagarcia@gmail.com', dni: '34567890', whatsapp: '945678901', code: 'JKL012', dniLink: 'link_dni.pdf', reverseLink: 'link_reverse.pdf', photoLink: 'link_photo_dni.jpg', cardLink: 'link_photo_card.jpg' },
    { id: 5, name: 'Pedro Ruiz', email: 'pedroruiz@gmail.com', dni: '45678901', whatsapp: '935987654', code: 'MNO345', dniLink: 'link_dni.pdf', reverseLink: 'link_reverse.pdf', photoLink: 'link_photo_dni.jpg', cardLink: 'link_photo_card.jpg' },
    { id: 6, name: 'María López', email: 'marialopez@gmail.com', dni: '56789012', whatsapp: '925876543', code: 'PQR678', dniLink: 'link_dni.pdf', reverseLink: 'link_reverse.pdf', photoLink: 'link_photo_dni.jpg', cardLink: 'link_photo_card.jpg' },
    { id: 7, name: 'Luis Martínez', email: 'luismartinez@gmail.com', dni: '67890123', whatsapp: '915765432', code: 'STU901', dniLink: 'link_dni.pdf', reverseLink: 'link_reverse.pdf', photoLink: 'link_photo_dni.jpg', cardLink: 'link_photo_card.jpg' },
    { id: 8, name: 'Laura González', email: 'lauragonzalez@gmail.com', dni: '78901234', whatsapp: '905654321', code: 'VWX234', dniLink: 'link_dni.pdf', reverseLink: 'link_reverse.pdf', photoLink: 'link_photo_dni.jpg', cardLink: 'link_photo_card.jpg' },
    { id: 9, name: 'Sergio Hernández', email: 'sergiohernandez@gmail.com', dni: '89012345', whatsapp: '895543210', code: 'YZA567', dniLink: 'link_dni.pdf', reverseLink: 'link_reverse.pdf', photoLink: 'link_photo_dni.jpg', cardLink: 'link_photo_card.jpg' },
    { id: 10, name: 'Elena Pérez', email: 'elenaperez@gmail.com', dni: '90123456', whatsapp: '885432109', code: 'BCD890', dniLink: 'link_dni.pdf', reverseLink: 'link_reverse.pdf', photoLink: 'link_photo_dni.jpg', cardLink: 'link_photo_card.jpg' },
  ];

  // Encontrar el usuario con el ID proporcionado en la URL
  const user = users.find(user => user.id === parseInt(id));

  // Si el usuario no existe, mostramos un mensaje de error
  if (!user) {
    return <div>Usuario no encontrado</div>;
  }

  // Función para enviar el correo
  const sendConfirmationEmail = (email) => {
    window.location.href = `mailto:${email}?subject=Confirmación de cuenta&body=Hola, por favor confirma tu cuenta haciendo clic en el siguiente enlace: [Enlace de confirmación]`;
  };

  return (
    <div className="user-details">
      <h1>Detalles de {user.name}</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>DNI:</strong> {user.dni}</p>
      <p><strong>Whatsapp:</strong> {user.whatsapp}</p>
      <p><strong>Código promocional:</strong> {user.code}</p>
      <p><strong>Link DNI anverso:</strong> <a href={user.dniLink} target="_blank" rel="noopener noreferrer">Ver</a></p>
      <p><strong>Link DNI reverso:</strong> <a href={user.reverseLink} target="_blank" rel="noopener noreferrer">Ver</a></p>
      <p><strong>Link foto perfil con DNI:</strong> <a href={user.photoLink} target="_blank" rel="noopener noreferrer">Ver</a></p>
      <p><strong>Link foto tarjeta:</strong> <a href={user.cardLink} target="_blank" rel="noopener noreferrer">Ver</a></p>

      {/* Enviar email de confirmación */}
      <button onClick={() => sendConfirmationEmail(user.email)}>
        Enviar Email de Confirmación
      </button>
    </div>
  );
};

export default UserDetails;
