import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const UserDetails = () => {
  const { id } = useParams();
  const [modalImage, setModalImage] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const openImageModal = (imageUrl) => {
    setModalImage(imageUrl);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const sendConfirmationEmail = (user) => {
    setIsSending(true);

    const templateParams = {
      to_name: user.name,
      to_email: user.email,
      from_email: "altoqueperuwk@gmail.com",
      message: `Hola ${user.name}, por favor confirma tu cuenta haciendo clic en el siguiente enlace: [Enlace de confirmación]`,
    };

    emailjs
      .send(
        'service_bpyvcoi', // Reemplaza con tu Service ID
        'template_xmrnpd7', // Reemplaza con tu Template ID
        templateParams,
        'd5zN3w-yJkY_Q-etV' // Reemplaza con tu Public Key de EmailJS
      )
      .then(() => {
        alert('Correo enviado exitosamente');
        setIsSending(false);
      })
      .catch((error) => {
        alert('Error al enviar el correo: ' + error.text);
        setIsSending(false);
      });
  };

  const users = [
    {
      id: 1,
      name: 'Jerlyth Cristina Torres',
      email: 'john9jcg@gmail.com',
      dni: '73010039',
      whatsapp: '965041479',
      code: 'ABC123',
      dniLink: '/placeholders/dni_anverso_jerlyth.jpg',
      reverseLink: '/placeholders/dni_reverso_jerlyth.jpg',
      photoLink: '/placeholders/foto_perfil_jerlyth.jpg',
      cardLink: '/placeholders/foto_tarjeta_jerlyth.jpg',
    },
    {
      id: 2,
      name: 'Juan Pérez',
      email: 'juanperez@gmail.com',
      dni: '12345678',
      whatsapp: '987654321',
      code: 'DEF456',
      dniLink: '/placeholders/dni_anverso_juan.jpg',
      reverseLink: '/placeholders/dni_reverso_juan.jpg',
      photoLink: '/placeholders/foto_perfil_juan.jpg',
      cardLink: '/placeholders/foto_tarjeta_juan.jpg',
    },
    {
      id: 3,
      name: 'Carlos Mendoza',
      email: 'carlosmendoza@gmail.com',
      dni: '23456789',
      whatsapp: '965432123',
      code: 'GHI789',
      dniLink: '/placeholders/dni_anverso_carlos.jpg',
      reverseLink: '/placeholders/dni_reverso_carlos.jpg',
      photoLink: '/placeholders/foto_perfil_carlos.jpg',
      cardLink: '/placeholders/foto_tarjeta_carlos.jpg',
    },
    {
      id: 4,
      name: 'Ana García',
      email: 'anagarcia@gmail.com',
      dni: '34567890',
      whatsapp: '945678901',
      code: 'JKL012',
      dniLink: '/placeholders/dni_anverso_ana.jpg',
      reverseLink: '/placeholders/dni_reverso_ana.jpg',
      photoLink: '/placeholders/foto_perfil_ana.jpg',
      cardLink: '/placeholders/foto_tarjeta_ana.jpg',
    },
    {
      id: 5,
      name: 'Pedro Ruiz',
      email: 'pedroruiz@gmail.com',
      dni: '45678901',
      whatsapp: '935987654',
      code: 'MNO345',
      dniLink: '/placeholders/dni_anverso_pedro.jpg',
      reverseLink: '/placeholders/dni_reverso_pedro.jpg',
      photoLink: '/placeholders/foto_perfil_pedro.jpg',
      cardLink: '/placeholders/foto_tarjeta_pedro.jpg',
    },
    {
      id: 6,
      name: 'María López',
      email: 'marialopez@gmail.com',
      dni: '56789012',
      whatsapp: '925876543',
      code: 'PQR678',
      dniLink: '/placeholders/dni_anverso_maria.jpg',
      reverseLink: '/placeholders/dni_reverso_maria.jpg',
      photoLink: '/placeholders/foto_perfil_maria.jpg',
      cardLink: '/placeholders/foto_tarjeta_maria.jpg',
    },
    {
      id: 7,
      name: 'Luis Martínez',
      email: 'luismartinez@gmail.com',
      dni: '67890123',
      whatsapp: '915765432',
      code: 'STU901',
      dniLink: '/placeholders/dni_anverso_luis.jpg',
      reverseLink: '/placeholders/dni_reverso_luis.jpg',
      photoLink: '/placeholders/foto_perfil_luis.jpg',
      cardLink: '/placeholders/foto_tarjeta_luis.jpg',
    },
    {
      id: 8,
      name: 'Laura González',
      email: 'lauragonzalez@gmail.com',
      dni: '78901234',
      whatsapp: '905654321',
      code: 'VWX234',
      dniLink: '/placeholders/dni_anverso_laura.jpg',
      reverseLink: '/placeholders/dni_reverso_laura.jpg',
      photoLink: '/placeholders/foto_perfil_laura.jpg',
      cardLink: '/placeholders/foto_tarjeta_laura.jpg',
    },
    {
      id: 9,
      name: 'Sergio Hernández',
      email: 'sergiohernandez@gmail.com',
      dni: '89012345',
      whatsapp: '895543210',
      code: 'YZA567',
      dniLink: '/placeholders/dni_anverso_sergio.jpg',
      reverseLink: '/placeholders/dni_reverso_sergio.jpg',
      photoLink: '/placeholders/foto_perfil_sergio.jpg',
      cardLink: '/placeholders/foto_tarjeta_sergio.jpg',
    },
    {
      id: 10,
      name: 'Elena Pérez',
      email: 'elenaperez@gmail.com',
      dni: '90123456',
      whatsapp: '885432109',
      code: 'BCD890',
      dniLink: '/placeholders/dni_anverso_elena.jpg',
      reverseLink: '/placeholders/dni_reverso_elena.jpg',
      photoLink: '/placeholders/foto_perfil_elena.jpg',
      cardLink: '/placeholders/foto_tarjeta_elena.jpg',
    },
  ];

  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return <div>Usuario no encontrado</div>;
  }

  return (
    <div className="user-details">
      <h1>Detalles de {user.name}</h1>
      <div className="detail-item"><label>Email:</label> <span>{user.email}</span></div>
      <div className="detail-item"><label>DNI:</label> <span>{user.dni}</span></div>
      <div className="detail-item"><label>Whatsapp:</label> <span>{user.whatsapp}</span></div>
      <div className="detail-item"><label>Código promocional:</label> <span>{user.code}</span></div>
      <div className="detail-item"><label>Link DNI anverso:</label> <button onClick={() => openImageModal(user.dniLink)}>Ver</button></div>
      <div className="detail-item"><label>Link DNI reverso:</label> <button onClick={() => openImageModal(user.reverseLink)}>Ver</button></div>
      <div className="detail-item"><label>Link foto perfil con DNI:</label> <button onClick={() => openImageModal(user.photoLink)}>Ver</button></div>
      <div className="detail-item"><label>Link foto tarjeta:</label> <button onClick={() => openImageModal(user.cardLink)}>Ver</button></div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          onClick={() => sendConfirmationEmail(user)}
          className="send-email-button"
          disabled={isSending}
        >
          {isSending ? 'Enviando...' : 'Enviar Email de Confirmación'}
        </button>
      </div>

      {modalImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Vista previa" />
            <button onClick={closeModal} className="close-modal-button">
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
