"use client"

export default function Home() {
  const handleClick = async () => {
    let myData = { name: "Shehroz", role: "Coder" };
    
    // 1. Send the data to the API route
    let response = await fetch("/api/hello", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(myData),
    });
    
    // 2. Await the data coming BACK from the API server
    let res = await response.json();
    
    // 3. Print the server reply to your Chrome Console
    console.log("Response from server:", res); 
  }

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
} 
