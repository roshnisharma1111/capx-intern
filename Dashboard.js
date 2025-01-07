import React from 'react';

const Dashboard = ({ totalValue, topStock, distribution }) => (
  <div className="p-4 bg-gray-100 rounded-md">
    <h2 className="text-lg font-bold">Portfolio Metrics</h2>
    <p>Total Value: ${totalValue}</p>
    <p>Top Stock: {topStock}</p>
    <div>
      <h3>Portfolio Distribution</h3>
      {Object.entries(distribution).map(([ticker, percent]) => (
        <p key={ticker}>{ticker}: {percent}%</p>
      ))}
    </div>
  </div>
);

export default Dashboard;
