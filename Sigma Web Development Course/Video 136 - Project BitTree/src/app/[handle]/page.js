import Link from "next/link"
import clientPromise from "../../../lib/mongodb"
import { notFound } from "next/navigation"

export default async function ({ params }) {
    const handle = (await params).handle
    const client = await clientPromise
    const db = client.db("bittree")
    const collection = db.collection("links")
    const item = await collection.findOne({ handle })
   
    if(!item){
        return notFound()
    }

    return <div className="flex justify-center items-start bg-amber-300 min-h-screen py-10">
        {handle && <div className="photo flex flex-col justify-center items-center  gap-4">
            <img className="rounded-full" src="/profile.jpg" alt="" />
            <span className="font-bold text-xl">@{item.handle}</span>
            <p className="w-2xs text-center">{item.desc}</p>
            <div className="links">
                {item.links.map((item, index) => {
                    return <Link key={index} href={item.link}><div className="py-4 px-4 rounded-md bg-purple-200 my-2 min-w-2xs text-center">
                        {item.linktext}
                    </div></Link>
                })}
            </div>
        </div>}
    </div>
}