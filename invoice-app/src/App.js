import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [items] = useState([
    { id: 1, description: 'Item 1', quantity: 2, price: 10 },
    { id: 2, description: 'Item 2', quantity: 1, price: 5 },
    // Add more items here as needed
  ]);

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div className="invoice-container">
      <h1>Invoice</h1>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>Rp{item.price}</td>
              <td>Rp{item.quantity * item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total">Total: Rp{calculateTotal()}</div>
    </div>
  );
};

export default App;
