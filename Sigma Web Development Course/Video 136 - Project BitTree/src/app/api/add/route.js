// api/add/route.js
import clientPromise from "../../../../lib/mongodb"

export async function POST(request) {
    try {
        // FIXED: Added await to correctly parse incoming JSON body data
        const body = await request.json()

        const client = await clientPromise
        const db = client.db("bittree")
        const collection = db.collection("links")

        // if handle is occupied you can't make your bittree 
        const doc = await collection.findOne({ handle: body.handle })
console.log(doc)
        if (doc) {
            return Response.json({
                success: false,
                error: true,
                message: "Handle is already claimed!"
            })
        }

        const result = await collection.insertOne(body)

        // Return a successful structured validation response
        return Response.json({
            success: true,
            message: 'Your Bittree has been genrated!',
            insertedId: result.insertedId
        })
    } catch (error) {
        // Added error handling to prevent API route from hanging on failures
        return Response.json({
            success: false,
            error: error.message
        }, { status: 500 })
    }
}
