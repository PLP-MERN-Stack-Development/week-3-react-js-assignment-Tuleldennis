# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



PLP Task Manager - Week 3 React Assignment

This is a React-based task management app built for the Power Learn Project (PLP) Week 3 Assignment. It features task CRUD operations, API data fetching, reusable components, and responsive design with Tailwind CSS.

---

 Features

- ✅ Add, delete, and filter tasks (All, Active, Completed)
- ✅ Task persistence using `localStorage`
- ✅ Reusable `Button`, `Card`, `Navbar`, and `Footer` components
- ✅ Fetch and display posts from an external API (`JSONPlaceholder`)
- ✅ Dark/Light theme switcher using `React Context`
- ✅ Responsive layout for mobile, tablet, and desktop
- ✅ Tailwind CSS for styling

---

 Project Structure

src/
├── api/ # API integration (JSONPlaceholder)
├── components/ # Reusable UI components (Navbar, Footer, Button, Card, etc.)
├── context/ # Theme context for dark/light mode
├── hooks/ # Custom React hooks
├── pages/ # Page-level components (if extended)
├── utils/ # Utility/helper functions (optional)
├── App.jsx # Root application component
└── main.jsx # Application entry point

yaml
Copy
Edit

---

 Technologies Used

- React
- Vite
- Tailwind CSS
- React Context API
- JSONPlaceholder API

---

Setup Instructions

1. Clone the repository 
   ```bash
   git clone https://github.com/PLP-MERN-Stack-Development/week-3-react-js-assignment-Tuleldennis.git
   cd week-3-react-js-assignment-Tuleldennis
   
Install dependencies
npm install
Run the development server

npm run dev
🌐 API Used
JSONPlaceholder - A free fake REST API for testing and prototyping.

📸 Screenshots

(public/screenshots/screenshot1.png)

(public/screenshots/screenshot2.png)

👨‍🎓 Author
Dennis Tulel
Week 3 Assignment - Power Learn Project (MERN Stack Track)

