// src/app/components/TimeSelector.js
"use client";

export default function TimeSelector({ onChange }) {
  const timeOptions = [
    { label: 'Last Day', value: '1-day' },
    { label: 'Last Week', value: '1-week' },
    { label: 'Last Month', value: '1-month' },
  ];

  const handleTimeChange = (event) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <div className="mb-6">
      <label htmlFor="time-period" className="mr-2">Select Time Period:</label>
      <select id="time-period" onChange={handleTimeChange} className="p-2 border border-gray-300 rounded">
        {timeOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
