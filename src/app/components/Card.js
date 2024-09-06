"use client";

export default function Card({ title, value }) {
  return (
    <div className="bg-white p-6 shadow rounded-md">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
