import React, { useState } from 'react';
import './Transactions.css';

const Transactions = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      name: 'Jerlyth Cristina Torres',
      date: '2024/12/6 : 13:28 pm',
      voucherLink: '/placeholders/voucher1.webp',
      status: 'En proceso',
    },
    {
      id: 2,
      name: 'Juan Pérez',
      date: '2024/12/7 : 14:30 pm',
      voucherLink: '/placeholders/voucher2.jpg',
      status: 'En proceso',
    },
  ]);

  const [modalImage, setModalImage] = useState(null); // Estado para controlar la imagen en el modal

  const changeStatus = (id, newStatus) => {
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction.id === id ? { ...transaction, status: newStatus } : transaction
      )
    );
  };

  const openImageModal = (imageUrl) => {
    setModalImage(imageUrl); // Abrir el modal con la imagen seleccionada
  };

  const closeModal = () => {
    setModalImage(null); // Cerrar el modal
  };

  return (
    <div className="transactions">
      <h2>Transacciones</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre y Apellido</th>
            <th>Fecha y Hora</th>
            <th>Link Voucher</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.name}</td>
              <td>{transaction.date}</td>
              <td>
                {/* Botón que abre el modal con la imagen */}
                <button
                  className="link-button"
                  onClick={() => openImageModal(transaction.voucherLink)}
                >
                  Ver Voucher
                </button>
              </td>
              <td>
                {transaction.status}
                <div>
                  <button onClick={() => changeStatus(transaction.id, 'Exitoso')}>
                    Exitoso
                  </button>
                  <button onClick={() => changeStatus(transaction.id, 'Fallido')}>
                    Fallido
                  </button>
                  <button onClick={() => changeStatus(transaction.id, 'En proceso')}>
                    En proceso
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal para mostrar la imagen */}
      {modalImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Voucher" />
            <button onClick={closeModal} className="close-modal-button">
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transactions;
