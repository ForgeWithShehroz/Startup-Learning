import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from "uuid";
import { FaEdit } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setShowFinished] = useState(true)


  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let savedTodos = JSON.parse(todoString)
      setTodos(savedTodos)
    }
  }, [])


  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos))
    }
  }, [todos])


  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleAdd = () => {
    if (todo.trim() === "") return;
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
  }

  const handleEdit = (e, id) => {

    let t = todos.find(item => item.id === id);
    if (t) {
      setTodo(t.todo)
    }
    let newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos)
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos)
  }


  const handleCheckbox = (e) => {
    let id = e.target.name;
    let newTodos = todos.map(item => {
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });
    setTodos(newTodos)
  }


  const toggleFinished = (e) => {
    setShowFinished(!showFinished)
  }

  return (
    <>
      <Navbar />
      <div className="md:container mx-3 md:mx-auto my-5 p-5 rounded-xl bg-violet-200 min-h-[80vh] md:w-[35%] ">
        <h1 className='font-bold text-2xl text-center'>iTask - Manage your todos at on place</h1>
        <div className="addTodo my-5 flex flex-col gap-4 ">
          <h2 className='text-xl font-bold '>Add a Todo</h2>
          <div className="flex">

            <input onChange={handleChange} value={todo} type="text" className='bg-white rounded-lg px-5 py-1 w-full text-black' />
            <button onClick={handleAdd} disabled={todo.length < 3} className='bg-violet-800 disabled:bg-violet-400 hover:bg-violet-900 p-4 py-2 text-sm rounded-full hover:cursor-pointer mx-2 text-white'>Save</button>
          </div>
        </div>

        <div className='my-4'>
          <input type="checkbox" className='my-4' onChange={toggleFinished} checked={showFinished} id="showFinishedOpt" />
          <label htmlFor="showFinishedOpt" className='mx-2 select-noneCursor'>Show Finished Tasks</label>
        </div>

        <h2 className='text-xl font-bold '>Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className='m-5'>No todos to display </div>}
          {todos.map(item => {

            if (!showFinished && item.isCompleted) return null;

            return (showFinished || !item.isCompleted) && (
              <div key={item.id} className="todo flex my-3 justify-between">
                <div className="flex gap-5">
                  <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} />
                  <div className={item.isCompleted ? "line-through text-gray-500" : ""}>{item.todo}</div>
                </div>
                <div className="buttons flex h-full">
                  <button onClick={(e) => { handleEdit(e, item.id) }} className='bg-violet-800 hover:bg-violet-900 p-2 py-1 text-sm rounded-md mx-1 text-white'><FaEdit /> </button>
                  <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-violet-800 hover:bg-violet-900 p-2 py-1 text-sm rounded-md mx-1 text-white'><AiFillDelete /></button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
