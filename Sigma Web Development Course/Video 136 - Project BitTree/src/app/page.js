"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  const [text, setText] = useState("")
  const createTreeHandle = () => {
    router.push(`/generate/?handle=w${text}`)
  }
  
  
  return (
    <main>
     
      {/* CHANGED: min-h-[130vh] to min-h-[85vh] to prevent extreme vertical overflow */}
      <section className={`bg-[#d2e823] min-h-screen grid grid-cols-2 p-8`}>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="heading1">
            <h1 className="font-bold text-[#254f1a] text-8xl pl-3">A link in bio</h1>
            <h1 className="font-bold text-[#254f1a] text-8xl pl-3">built for you.</h1>
          </div>
          <p className="text-[#254f1a] p-5 font-bold pl-15 text-lg">
            Join 70M+ people using Linktree for their link in bio. One link to help 
            you share everything you create, curate and sell from your Instagram, 
            TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full max-w-lg mt-6 px-5">
            {/* The Prefix and Link Input Box */}
            <div className="flex items-center bg-white rounded-xl px-4 py-4 flex-1 shadow-sm border border-transparent focus-within:border-[#254f1a] transition-all ">
              <span className="text-gray-400 font-medium select-none pr-1">bittr.ee/</span>
              <input
                type="text"
                value={text}
                onChange={(e)=>{setText(e.target.value)}}
                placeholder="yourname"
                className="bg-transparent flex-1 outline-none text-gray-800 font-medium placeholder-gray-400 w-full "
              />
            </div>
            {/* The Call-To-Action Button */}
            <button onClick={()=>{createTreeHandle()}} className="bg-[#254f1a] text-[#d2e823] font-bold px-8 py-4 rounded-full :bg-[#1a3a13] active:scale-[0.98] transition-all whitespace-nowrap shadow-sm cursor-pointer">
              Claim your Bittree
            </button>
          </div>
        </div>

        {/* CHANGED: Added flex utilities to keep the image centered and responsive */}
        <div className="flex justify-center items-center p-4">
          <img 
            src="/home.png" 
            alt="homepage png" 
            className="max-h-[75vh] w-auto object-contain rounded-4xl" 
          />
        </div>
      </section>

      <section className="bg-[#2665d6] min-h-screen">
        {/* Next section */}
      </section>
    </main>
  );
}
