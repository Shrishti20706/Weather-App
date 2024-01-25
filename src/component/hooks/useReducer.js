import React, { useReducer } from 'react'
import "./style.css"
const UseReducer = () => {
    const reducer=(state,action)=>{
        if(action.type==="INCR"){
            state=state+1
        }
        if(state>0 && action.type==="DECR"){
            state=state-1
        }
        return state;
    };
    const intialData=10;
    //const intialData=10;
    //const[myNum,setMyNum]=React.useState(intialData)

    //hooks---its return an array with two elements (myNum)
    //initially myNum=intialData but when we update it in future it change state vsriable value
   const [state,dispatch]=useReducer(reducer ,intialData);
   //useReducer takes two argument (use for big task)unlike useState which take one argument(use useState for small task)
   //here with dispatch you cant change state value dispatch is used to triger your reducer function
    return (
    <>
    
      <div className='center_div'>
        <p>{state}</p>
        <div class="button2" onClick={()=>dispatch({type:"INCR"}) }>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        INCR
        </div>
        <div class="button2" onClick={()=>dispatch({type:"DECR"}) }>
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

export default UseReducer
