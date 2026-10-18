import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className='card' style={{border:"2px solid black", backgroundColor:"black", color:"white"}}>   {/* using inline style  */}
      <h1> {props.title} </h1>
      <p>{props.desc} </p>
    </div>
  )
}

export default Card
