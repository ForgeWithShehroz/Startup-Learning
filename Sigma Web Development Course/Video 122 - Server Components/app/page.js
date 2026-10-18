"use client" // we have to use client if we wanna use states
import Image from "next/image";
import { useState, useEffect } from "react";
// import fs from "fs/promises"

export default function Home() {
  const [count, setCount] = useState(0)
// let data = fs.readFile("AGENTS.md")
  return (<>
    <div>I am a component {count} </div>
    <button onClick={()=>{setCount(count+1)}}>ADD</button></>
  );
}
