import React from 'react'

const Home = () => {
    function hai() {
        alert('this is an alert msg')
    }

    return (
        <>
            <h1>This is home page</h1>
            <button onClick={hai}>clickme</button>
        </>
    )
}
let name = 'mani';
let age = 22;


export default Home;
export { name, age }; 