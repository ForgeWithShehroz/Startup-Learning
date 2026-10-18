"use client"
import Image from "next/image";

export default function Home() {
  // console.log("The id is, ", process.env.ID)
  // console.log("The name is, ", process.env.NEXT_PUBLIC_NAME);
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    {/* <div>The process id is {process.env.ID} </div> */} {/* It will now work till we make process.env.ID to process.env.NEXT_PUBLIC_ID*/}
    <div>The Public name is {process.env.NEXT_PUBLIC_NAME} </div>
    </div>
  );
}
