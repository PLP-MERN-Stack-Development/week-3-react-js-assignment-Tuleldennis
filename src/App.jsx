import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/footer'
import Card from './components/card'
import TaskManager from './components/TaskManager'
import APIData from './components/APIData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <Card title="Counter">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Count is {count}
        </button>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </Card>

      <Card title="Task Manager">
        <TaskManager />
      </Card>

      <Card title="Public Posts">
        <APIData />
      </Card>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Footer />
    </>
  )
}

export default App
