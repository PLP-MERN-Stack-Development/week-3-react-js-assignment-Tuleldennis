// src/components/Card.jsx

export default function Card({ title, children, className = '' }) {
  return (
    <div className={`bg-white dark:bg-gray-800 shadow rounded-lg p-6 ${className}`}>
      {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
      {children}
    </div>
  );
}
