"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDb"
import User from "@/models/User"

export const initiate = async (amount, to_username, paymentform) =>{
    await connectDB()
    var options = {
    "key": "YOUR_KEY_ID", // Generated from Account & Settings -> API Keys
    "amount": "50000", // Amount in paise (e.g., 50000 = ₹500)
    "currency": "INR",
    "name": "Patreon Clone",
    "description": "Test Transaction",
    "order_id": "order_IluGWxBm9U8zJ8", // Pass the dynamic order ID from your Next.js backend
    "handler": function (response){
        alert("Payment Successful! ID: " + response.razorpay_payment_id);
    },
    "prefill": {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9999999999"
    },
    "theme": {
        "color": "#3399cc"
    }
};
}