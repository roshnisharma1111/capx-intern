import React, { useState } from 'react';

const AddStockForm = ({ onAdd }) => {
  const [stock, setStock] = useState({ name: '', ticker: '', quantity: '', buyPrice: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStock((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(stock);
    setStock({ name: '', ticker: '', quantity: '', buyPrice: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-md">
      <input name="name" placeholder="Stock Name" value={stock.name} onChange={handleChange} />
      <input name="ticker" placeholder="Ticker" value={stock.ticker} onChange={handleChange} />
      <input name="quantity" type="number" placeholder="Quantity" value={stock.quantity} onChange={handleChange} />
      <input name="buyPrice" type="number" placeholder="Buy Price" value={stock.buyPrice} onChange={handleChange} />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Stock</button>
    </form>
  );
};

export default AddStockForm;
