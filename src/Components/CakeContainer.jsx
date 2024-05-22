import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { buyCake } from "../Redux/Cake/cakeAction";


function CakeContainer() {
  const[value,setValue]=useState(0);
    const state=useSelector((state)=>state.cake);
   const dispatch =useDispatch();
    
  return (<>
    <div><h2>Cake Number: {state.numOfCakes}</h2>
    <input type="number" value={value} onChange={(e)=>setValue(e.target.value)}  /></div>
      <button onClick={()=>dispatch(buyCake(value))}>-</button>
     
  </>
  )
}

export default CakeContainer