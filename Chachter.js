import React, { useState } from "react";

function Charachters(){
    const [likeCount, SetLikeCount] = useState(0)

 //condtional styling 
  const [like, setLike] = useState(false)
  const [color, SetColor] = useState("crimson")
 //javascript functions 
 const incrementLikes = ()=>{
  SetLikeCount(likeCount+1); 
 }

 //styling function 
 const stylingFunction = ()=>{
  incrementLikes(); 
  setLike(!like); 
  like === true ? SetColor("teal") : SetColor("crimson"); 
 }
    return (
        <div>

        <div className='card-component'>
        <img src="https://www.denofgeek.com/wp-content/uploads/2019/02/mcu-1-iron-man.jpg?fit=1200%2C675" alt="" />
        <p>Tony Stark</p>
        <button
        onClick={incrementLikes}
        > 
        Like  {likeCount}
        </button>
        <button 
        onClick={stylingFunction}
        style={{background:color}}>
          Like 
        </button>
      </div>

      </div>
    )
}

export {Charachters}; 