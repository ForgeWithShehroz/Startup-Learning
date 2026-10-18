import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Home from "./components/Home"
import Contact from "./components/Contact"
import Login from "./components/Login"
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
const router = createBrowserRouter([
  {
    path: "/",
    element: (<><Navbar /><Home /></>)
  },
  {
    path: "/contact",
    element: (<><Navbar /><Contact /></>)
  },
  {
    path: "/login",
    element: (<><Navbar /><Login /></>)
  }
]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
