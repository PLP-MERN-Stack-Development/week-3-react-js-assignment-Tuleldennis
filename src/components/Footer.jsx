// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow mt-10">
      <div className="max-w-7xl mx-auto py-4 px-6">
        <p className="text-center text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
