import React,{useState} from 'react'

const  Homework=()=>  {
    const [dollars,setdollars]=useState(0)
   
    const [poin,setpoin]=useState(0)

    console.log(dollars,typeof dollars)


const handleChange=(e)=>{
    setdollars(e.target.value)
    setpoin(0)
}

const handlesubmit=(e)=>{
    e.preventDefault() 
    const doll=Number(dollars)
    console.log(doll,typeof doll)
    if (doll>50)
    {
        console.log(doll,'2424')
        setpoin((doll>50 && doll>100?50:doll-50)+(doll>100?((doll-100)*2):0) ) 
        
    }
    else 
    {
        setpoin(0)

    }
    
    
}
console.log(poin,"POIN")
  return (
    <div>
<form onSubmit={handlesubmit}>
    <h1>Points Of Customers</h1>
    <label>Amount in $: </label>
    <input type='number' placeholder='Enter Amount in Dollars' value={dollars} onChange={handleChange}/><br/>
    <input type='submit' value='get points'/>
    <h2>Total Points for {dollars} is {poin}</h2>
</form>

    </div>
  )
}
export default Homework