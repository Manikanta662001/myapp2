import React,{useState} from 'react'
import data from './data.json'
const  Homework2=()=> {
    const [arr,setdarr]=useState(data)
    
    
    console.log(arr,'66666')
    const handleclick=()=>{
        const filye=arr.map((item)=>{
            if (item.Spent>50)
            {
                const po=((item.Spent>50 && item.Spent>100?50:item.Spent-50)+(item.Spent>100?((item.Spent-100)*2):0))
                console.log(po,"PO")
                
                return {...item,points:po}
            }
            else{
                return item
            }
            
            
        })
       
        setdarr(filye)
        
    }
console.log(arr,'ARRRR')
    return(
        <>
        <h1 style={{color:"fuchsia",backgroundColor:'antiquewhite'}}>CUSTOMERS AND THEIR REWARD POINTS </h1>
        <button onClick={handleclick}>click to get points</button><br/><br/>
        <table>
            <thead>
                <th>Transactionid</th>
                <th>Name</th>
                <th>Amount in $</th>
                <th>Points</th>
                
            </thead>
            <tbody>
                {
                    arr.map((item)=>{
                        return(
                            <tr>
                                <td>{item.Transactionid}</td>
                                <td>{item.Name}</td>
                                <td>${item.Spent} </td>
                                <td>{item.points}</td>
                                
                            </tr>
                            
                        )
                    })
                }
                
            </tbody>
        </table>
        
        </>
    )
}
export default Homework2
