"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setShorturl] = useState("")
    const [generated, setGenerated] = useState("")

    const generate = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ "url": url, "shorturl": shorturl });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("/api/generate", requestOptions)
            .then(response => response.json())
            .then(result => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                seturl("")
                setShorturl("")
                console.log(result)
                alert(result.message)
            })
            .catch(error => console.log('error', error));
    }

    return (
        <div className='flex flex-col mx-auto min-w-lg my-16 p-8 rounded-lg gap-6 bg-purple-200'>
            <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
            <div className='flex flex-col gap-2'>
                <input type="text"
                    className='px-4 py-2 focus:outline-purple-600 rounded-md'
                    placeholder='Enter your URL'
                    value={url}
                    onChange={e => {
                        seturl(e.target.value)
                    }}
                />
                <input type="text"
                    className='p-4 py-2 focus:outline-purple-600 rounded-md'
                    placeholder='Enter your preferred short URL'
                    value={shorturl}
                    onChange={e => {
                        setShorturl(e.target.value)
                    }}
                />
                <button onClick={generate} className='bg-purple-500 shadow-lg p-3 py-1 rounded-lg font-bold text-white cursor-pointer'>Generate</button>
            </div>
            {generated && <><span className='text-purple-500  font-bold text-lg'>Your Link</span>
                <code><Link target='_blank' href={generated}>{generated}</Link></code>
            </>}
        </div>
    )
}

export default Shorten
