import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form";



function App() {

  const { register, handleSubmit, watch, setError, formState: { errors, isSubmitting } } = useForm();
  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);

    })
  }

  const onSubmit = async (data) => {
    await delay(2)
    console.log(data);
    if (data.username === "Shehroz") {
      setError("adminMsg", { message: "Admin is invalid" })

    }
  }

  return (
    <>
      {isSubmitting && <div style={{ color: "red" }}>Loading...</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="" placeholder='username' {...register("username")}/> <br />


        <input {...register("password", { required: true })} placeholder='password' />     <br />

        {errors.password && <span style={{ color: "red" }}>Username is required</span>}   

        {errors.password && <span style={{ color: "red" }}>Password is required</span>}   
        <input disabled={isSubmitting} type="submit" />
        {errors.adminMsg && <div style={{color: "red"}}>  {errors.adminMsg.message} </div>}
      </form>

    </>
  )
}

export default App
