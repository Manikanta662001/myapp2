import React from "react";

const Mapping=(props)=>{
    return <h1>My name is {props.name}</h1>
}

const Names=()=>{
    const names=['mani','sam','ram','nithish']
    return(
        <>
        <h1>Mapping all Names</h1>
        {names.map((val)=><Mapping name={val}/>)
        }
        </>
    )
    
}
export default Names