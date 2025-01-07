import React from 'react';

const PortfolioTable = ({ stocks, onEdit, onDelete }) => (
  <table className="table-auto w-full">
    <thead>
      <tr>
        <th>Name</th>
        <th>Ticker</th>
        <th>Quantity</th>
        <th>Buy Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {stocks.map((stock) => (
        <tr key={stock.id}>
          <td>{stock.name}</td>
          <td>{stock.ticker}</td>
          <td>{stock.quantity}</td>
          <td>${stock.buyPrice}</td>
          <td>
            <button onClick={() => onEdit(stock)} className="text-blue-500">Edit</button>
            <button onClick={() => onDelete(stock.id)} className="text-red-500">Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default PortfolioTable;
