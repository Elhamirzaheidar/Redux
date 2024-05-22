import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Buymilk } from "../Redux/Milk/milkAction";
function MilkContainer() {
  const[value,setValue]=useState(0);
    const state=useSelector((state)=>state.milk);
   const dispatch =useDispatch();
    
  return (<>
    <div><h2>Milk Number: {state.numOfMilk}</h2>
    <input type="number" value={value} onChange={(e)=>setValue(e.target.value)}  /></div>
      <button onClick={()=>dispatch(Buymilk(value))}>Buy milk</button>
     
  </>
  )
}
export default MilkContainer

