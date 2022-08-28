import { useState } from "react"

export default function Color(props) {
  const [color, setColor] = useState("orange")
  return (
    <div>
      <input 
      type="text"
      style={{background:color}}
      onChange={(event)=>setColor(event.target.value)}
      />
      <div>my name is {props.name}</div>
      <div>my age is {props.age}</div>
      <div>my position is {props.position}</div>
      <div>my company is {props.company}</div>
      
    </div>
  )
}