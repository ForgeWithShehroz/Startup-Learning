import { NextResponse } from 'next/server';

export async function POST(request) {
  // Read incoming json body 
  const incomingData = await request.json();
  
  // This will print inside your VS Code terminal window
  console.log("Data arrived at backend:", incomingData);
  
  // This sends back a clean object response to the browser
  return NextResponse.json({ 
    success: true, 
    message: `Hello ${incomingData.name}, data received successfully!` 
  });
}
