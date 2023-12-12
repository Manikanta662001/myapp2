import React from 'react'
import {useNavigate,Outlet,Link} from 'react-router-dom'


const Contact=()=>{
    const navigate=useNavigate()

    const handlehome=()=>{
        
        navigate('/')
    
    }
    return(
        <>
        <div>Contact Page</div>
        <button onClick={handlehome}>click to go to home</button>
        <Link to={'common'}>Common</Link>
        <Outlet/>
        </>
    )
}


export default Contact;