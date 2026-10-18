import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setname] = useState("Shehroz")
  const [form, setForm] = useState({email:"", phone:""})

  // const clickButton = () => {
  //   alert("Button was clicked")
  // }

  // const mouseOver = () => {
  //   alert("Mouse overed on div");
  // }

  const handleChange = (e) => {
    // setname(e.target.value)
    setForm({...form, [e.target.name]:e.target.value})
  }
  return (
    <>
      {/* <div className="button"><button onClick={clickButton}>Click me</button></div>
      <div className="mouse" onMouseOver={mouseOver}></div>
      <div className="text"><input type="text" value={name} onChange={handleChange} /></div> */}

      <input type="text" name='email' value={form.email} onChange={handleChange}/>
      <input type="text" name='phone' value={form.phone} onChange={handleChange}/>
    </>
  )
}

export default App
