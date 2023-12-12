import React,{useState} from "react";
import './Hooks.css'


function Hooks(){
    const [count,setCount]=useState(0)
    const [name,setName] =useState('Manikanta')
    const [showContent,setContent]=useState(true)
    const [computerDetails,setComputerdetails] = useState(
        {
            computerName:'samsung',
            computerRam :'6gb',
            computerColor : 'Black',
            computerCost : 70000

        })
    let { computerName,computerRam,computerColor, computerCost}=computerDetails
    console.log(computerName,computerRam,computerColor, computerCost)

    // console.log(React)
    


const handleClick=()=>{
    setCount(count+1)
}
const changeName=()=>{
    setName(name==='Manikanta'? 'vamsi' : 'Manikanta')
}

 const handleComputerColor=()=>{
    setComputerdetails(pre=>{
        return {...pre,computerColor:'white'}
    })
 }

 const hideData=()=>{
    setContent(!showContent)
 }
    return(
        <div className={showContent ? 'Hide' : 'Show'}>
            {
                showContent ?
                <div>
                <h1>This is Hooks component</h1>
                <button onClick={handleClick}>click This</button><h4>{count}</h4>
                <button onClick={()=>setCount(0)} disabled={count==0?true:false}>click to reset</button>
                <h2>{name}</h2>
                <button onClick={changeName}>ChangeName</button>
    
                <h1>{computerDetails.computerName}</h1>
                <h1>{computerDetails.computerRam}</h1>
                <h1>{computerDetails.computerColor}</h1>
                <h1>{computerDetails.computerCost}</h1>

                <hr/>
                <hr/>
    
                <h1>{computerName}</h1>
                <h1>{computerRam}</h1>
                <h1>{computerColor}</h1>
                <h1>{computerCost}</h1>
    
                <button onClick={handleComputerColor}>change color of pc</button>
    
                </div>
                :'data not found'
                
            }

            <button onClick={hideData}>{showContent ? 'Hide' : 'Show'}</button>
        </div>
    )
}
export default Hooks