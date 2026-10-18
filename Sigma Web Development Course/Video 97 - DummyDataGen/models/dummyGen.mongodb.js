import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    name: {type: String, required: true},
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean
})

export const Data = mongoose.model("Employee", dataSchema)
