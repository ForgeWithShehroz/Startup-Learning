import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // 1. Initialize state as an empty array
  const [apidocs, setApiDocs] = useState([])

  // 2. Fetch data inside useEffect when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        let a = await fetch("https://jsonplaceholder.typicode.com/posts");
        let b = await a.json();
        setApiDocs(b); // Save the actual data into state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty array means this runs exactly once

  return (
    <>
      {/* 3. Loop through the state array using .map() to render the cards */}
     
        <div className="flex flex-row flex-wrap gap-4 p-6">
          {apidocs.map((post) => (
            <div key={post.id} className="max-w-md p-6 bg-white border-2 border-blackrounded-xl shadow-sm">
              <div className="flex justify-between items-center text-xs font-mono text-gray-500 mb-3">
                <span>User ID: <strong class="text-gray-800">{post.userId}</strong></span>
                <span>Post ID: <strong class="text-gray-800">{post.id}</strong></span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2 capitalize">
                {post.title}
              </h3>
              <p class="text-sm text-gray-600 leading-relaxed">
                {post.body}
              </p>
            </div>
          ))}
        </div>
    
    </>
  )
}

export default App
