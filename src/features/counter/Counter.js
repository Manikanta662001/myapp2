import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { decrement, increment,reset,incrementNum } from './counterSlice'
const Counter = () => {
    const [incrementvalue,setincrementvalue]=useState('2')
    const countvalue=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch()
    console.log(countvalue,"STORECOUNT")
  return (
    <div>
        {countvalue}<br/>
        <button onClick={()=>dispatch(increment())}>click to +</button><br/>
        <button onClick={()=>dispatch(decrement())}>click to -</button><br/>
        <button onClick={()=>dispatch(reset())}>click to reset</button><br/>
        <input type='text' value={incrementvalue} onChange={(e)=>setincrementvalue(e.target.value)}/><br/>
        <button onClick={()=>dispatch(incrementNum(Number(incrementvalue)))}>incrementNum</button><br/>
    </div>
  )
}
export default Counter
