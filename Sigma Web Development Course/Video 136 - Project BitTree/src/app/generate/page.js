"use client"
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';

const Generate = () => {
  const searchParams = useSearchParams()

  const [links, setLinks] = useState([{ link: "", linktext: "" }])
  const [handle, setHandle] = useState(searchParams.get('handle'))
  const [pic, setPic] = useState("")
  const [desc, setDesc] = useState("")

  const handleChange = (index, link, linktext) => {
    setLinks((initiallinks) => {
      return initiallinks.map((item, i) => {
        if (i === index) {
          return { link, linktext }
        } else {
          return item
        }
      })
    })
  }

  const addLink = () => {

    setLinks(links.concat([{ link: "", linktext: "" }]))
  }

  const submitlinks = async () => {
    // FIX: Remove empty links
    const filteredLinks = links.filter(item => item.link.trim() !== "" && item.linktext.trim() !== "")

    if (!handle) {
      toast.error("Please enter a handle")
      return
    }

    if (filteredLinks.length === 0) {
      toast.error("Please add at least 1 link")
      return
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "links": filteredLinks, // <-- use filtered array
      "handle": handle,
      "pic": pic,
      "desc": desc
    });

    console.log(raw)

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    try {
      const host = process.env.NEXT_PUBLIC_HOST
      const r = await fetch(`${host}/api/add`, requestOptions);
      const result = await r.json();
      console.log(r)
      console.log(result)
      if (r.ok && result.success) {
        toast.success(result.message || "Link added successfully!");
        setLinks([{ link: "", linktext: "" }]) // reset form
        setHandle("")
        setPic("")
        setDesc("")
      } else if (result.error) {
        toast.error(result.message || "Something went wrong");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to connect to server");
    }
  }

  return (
    <>
      <div className='grid grid-cols-2 min-h-screen overflow-hidden bg-[#2665d6]'>
        <div className="sec-1 flex flex-col gap-4 justify-start px-24 py-40 ">
          <ToastContainer />
          <h2 className='font-bold text-3xl '>Create your Bittree</h2>

          <div className="one">
            <h2 className='font-bold text-lg'>Step 1: Claim your Handle</h2>
            <input
              onChange={(e) => { setHandle(e.target.value) }}
              value={handle || ""}
              className='bg-white mx-2 p-2 rounded-full px-4'
              type="text"
              placeholder='e.g. Shehroz'
            />
          </div>

          <h2 className='font-bold text-lg '>Step 2: Add Links</h2>
          {links && links.map((item, index) => {
            return (<div className="two flex " key={index}>
                {/* FIX: Ordered arguments exactly as (index, new_link, current_linktext) */}
                <input
                  onChange={(e) => { handleChange(index, e.target.value, item.linktext) }}
                  value={item.link || ""}
                  className='bg-white p-2 rounded-full px-4'
                  type="text"
                  placeholder='Enter link'
                />
                {/* FIX: Ordered arguments exactly as (index, current_link, new_linktext) */}
                <input
                  onChange={(e) => { handleChange(index, item.link, e.target.value) }}
                  value={item.linktext || ""}
                  className='bg-white mx-2 p-2 rounded-full px-4'
                  type="text"
                  placeholder='Enter link text'
                />
              </div>
            )
          })}
          <button
            className='text-white block mx-2 w-fit rounded-full p-2.5 px-3.5 bg-blue-950 cursor-pointer'
            onClick={() => { addLink() }}
          >
            <span className='font-extrabold'>+</span> Add Link
          </button>

          <h2 className='font-bold text-lg'>Step 3: Add Picture and Description</h2>
          <div className="three flex flex-col gap-3">
            <input
              onChange={(e) => { setPic(e.target.value) }}
              value={pic || ""}
              className='bg-white mx-2 p-2 rounded-full px-4 w-full'
              type="text"
              placeholder='Enter link to your picture'
            />
            <input
              onChange={(e) => { setDesc(e.target.value) }}
              value={desc || ""}
              className='bg-white mx-2 p-2 rounded-full px-4 w-full'
              type="text"
              placeholder='Enter your description'
            />
            <button
              onClick={() => submitlinks()}
              disabled={pic == "" || handle == "" || links[0].linktext == "" || links[0].link == ""}
              className='disabled:bg-slate-500 w-fit text-white block mx-2 my-1.5 rounded-full p-2.5 px-3.5 bg-blue-950 cursor-pointer'            >
              Create your BitLink
            </button>
          </div>
        </div>

        <div className="sec-2 p-40">
          <img src="card.png" className=' rounded-3xl' alt="" />
        </div>
      </div>
    </>
  )
}

export default Generate