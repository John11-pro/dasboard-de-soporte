import React, { useState } from 'react';
import './Transactions.css'; // Importa el archivo de estilos

const Transactions = () => {
  // Estado para almacenar las transacciones
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      name: 'Jerlyth Cristina Torres',
      date: '2024/12/6 : 13:28 pm',
      voucherLink: 'link',
      status: 'En proceso',
    },
    {
      id: 2,
      name: 'Juan Pérez',
      date: '2024/12/7 : 14:30 pm',
      voucherLink: 'link',
      status: 'En proceso',
    },
    // Agrega más transacciones según sea necesario
  ]);

  // Función para cambiar el estado de la transacción
  const changeStatus = (id, newStatus) => {
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction.id === id ? { ...transaction, status: newStatus } : transaction
      )
    );
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
              <td>{transaction.voucherLink}</td>
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
    </div>
  );
};

export default Transactions;
