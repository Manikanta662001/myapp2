import React from "react";
import './Navbar.css'
import bird from './bird.jpg'
import useFetch from "./useFetch";

const Navbar = () => {
    const [data] = useFetch('https://jsonplaceholder.typicode.com/todos')

    console.log(data, '1010')
    return (

        <>
            <h1 id="one">This is Navbar</h1>

            <img src={bird} alt="bird_image" />
            <div className="border">
                <img src={bird} alt="bird_image" id="im" />
            </div>
        </>
    )
}
export default Navbar