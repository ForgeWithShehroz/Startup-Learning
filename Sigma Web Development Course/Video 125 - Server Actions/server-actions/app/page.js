"use client"
import Image from "next/image";
import { submitAction } from "@/action/form";
import { useRef } from "react";

// const submitAction= async (e) => {
//   "use server"
//   console.log(e.get("name"), e.get("adress"))
//   let a = await fs.writeFile("Shehroz.txt", `Name is ${e.get("name")} Adress is ${e.get("adress")}`)
//   console.log(a);
// }

export default function Home() {
  let ref = useRef()
  return (
    <div className="p-8 bg-slate-900 min-h-screen text-white"> {/* Added a dark background to make white text look good */}
      <form ref={ref} action={(e)=>{submitAction(e); ref.current.reset()}}>
        
        {/* Name Input Group */}
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">Name</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            className="border border-gray-500 rounded px-2 py-1 text-black bg-white" 
          />
        </div>

        {/* Address Input Group */}
        <div className="mb-4">
          <label htmlFor="adress" className="block mb-1">Address</label> {/* Fixed htmlFor to match id */}
          <input 
            type="text" 
            name="adress" 
            id="adress" 
            className="border border-gray-500 rounded px-2 py-1 text-black bg-white" 
          />
        </div>

        {/* Submit Button */}
        <div>
          <button 
            type="submit" 
            className="bg-blue-600 hover:bg-blue-700 hover:cursor-pointer text-white font-bold py-2 px-4 rounded"
          >
            Submit Data
          </button>
        </div>

      </form>
    </div>
  );
}
