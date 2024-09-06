"use client";  // This marks the component as a Client Component

import { useState } from 'react';
import Card from './components/Card';
import Chart from './components/Chart';
import TimeSelector from './components/TimeSelector';

export default function HomePage() {
  const [timePeriod, setTimePeriod] = useState('1-week');

  // Example dummy data for charts and cards based on time period
  const dataByTimePeriod = {
    '1-day': {
      statistics: {
        totalSales: '$5,000',
        newCustomers: '5',
        activeUsers: '150',
        conversionRate: '3%',
      },
      pie: {
        labels: ['Sales', 'Returns', 'New Customers'],
        datasets: [{
          data: [50, 10, 5],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        }],
      },
      bar: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [{
          label: 'Sales',
          data: [5, 3, 8, 2, 1],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        }],
      },
    },
    '1-week': {
      statistics: {
        totalSales: '$35,000',
        newCustomers: '25',
        activeUsers: '1,000',
        conversionRate: '5%',
      },
      pie: {
        labels: ['Sales', 'Returns', 'New Customers'],
        datasets: [{
          data: [300, 50, 100],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        }],
      },
      bar: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [{
          label: 'Sales',
          data: [12, 19, 3, 5, 2],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        }],
      },
    },
    '1-month': {
      statistics: {
        totalSales: '$120,000',
        newCustomers: '250',
        activeUsers: '1,200',
        conversionRate: '12.5%',
      },
      pie: {
        labels: ['Sales', 'Returns', 'New Customers'],
        datasets: [{
          data: [1200, 200, 400],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        }],
      },
      bar: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
          label: 'Sales',
          data: [300, 500, 400, 600],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        }],
      },
    },
  };

  // Get data based on the selected time period
  const { statistics, pie: pieData, bar: barData } = dataByTimePeriod[timePeriod];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">CRM Statistics</h1>

      {/* Time Selector */}
      <TimeSelector onChange={setTimePeriod} />

      {/* Statistic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Total Sales" value={statistics.totalSales} />
        <Card title="New Customers" value={statistics.newCustomers} />
        <Card title="Active Users" value={statistics.activeUsers} />
        <Card title="Conversion Rate" value={statistics.conversionRate} />
      </div>

      {/* Charts */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Sales Distribution</h2>
        <Chart type="pie" data={pieData} />

        <h2 className="text-2xl font-semibold mt-10 mb-4">Sales Over Time</h2>
        <Chart type="bar" data={barData} />
      </div>
    </div>
  );
}
