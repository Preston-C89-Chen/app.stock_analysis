import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data }) => {
  // Assuming 'data' is an array of your data objects

  // Aggregate data by month
  console.log('data',data)
  const aggregatedData = data.reduce((acc, cur) => {
    const month = new Date(cur.date).toLocaleString('default', { month: 'short', year: 'numeric' });
    if (!acc[month]) {
      acc[month] = {
        close: 0,
        count: 0
      };
    }
    acc[month].close += cur.close;
    acc[month].count++;
    return acc;
  }, {});
  console.log(aggregatedData)
  const chartData = {
    labels: Object.keys(aggregatedData),
    datasets: [{
      label: 'Close',
      data: Object.values(aggregatedData).map(item => item.close / item.count), // Average close value if multiple per month
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    }]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: false // Set to true if you want to display the legend
      }
    }
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
