import React, { useState, useEffect } from 'react'
import "./style.css"
const UseEffect = () => {
    const intialData=10;
    const[myNum,setMyNum]=React.useState(intialData)

    //hooks---its return an array with two elements (myNum)
    //initially myNum=intialData but when we update it in future it change state vsriable value
    //use effect hooks is used when you want somehting popop in your website after sometime
    
   useEffect(()=>{
    //console.log("hii");
    document.title=`Chats(${myNum})`// to change title of our document page
   })//},[]}---if we left array depency i.e.[] empty then it will run only one time and when we reload it no change will occur later.to check we have used ---console.log("hii");
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
        
      </div>
    </>
  )
}

export default UseEffect
