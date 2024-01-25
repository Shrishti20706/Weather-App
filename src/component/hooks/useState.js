import React, { useState } from 'react'
import "./style.css"
const UseState = () => {
    const intialData=10;
    const[myNum,setMyNum]=React.useState(intialData)

    //hooks--useState is a type of hook---its return an array with two elements (myNum)---current state and updated function
    //initially myNum=intialData but when we update it in future it change state variable value i.e.setMyNum
  return (
    <>
    
      <div className='center_div'>
        <p>{myNum}</p>
        <div class="button2" onClick={()=> setMyNum(myNum+1)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        INCR
        </div>
        <div class="button2" onClick={()=> myNum>0?setMyNum(myNum-1):setMyNum(0)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        DECR
        </div>
      </div>
    </>
  )
}

export default UseState
