import React from "react";
const Component1 = (props) => {
    console.log(props, typeof props,"333")

    const handleevent = () => {
        alert('onClick event is raised')
    }
    const handleclick = (x, e) => {
        alert(x)
        alert(e.type)
    }
    return (<>
        <h1>This is Component1 with {props.colour} </h1>
        <h3>{props.info.name}{'  '}{props.info.model}</h3>
        <button onClick={handleevent}>click it</button>
        <button onClick={(event) => handleclick('handled', event)}>click it</button>
    </>
    )
}
const FunctionalComponents = (props) => {
    const colour = 'WHITE'
    const carInfo = { name: "Ford", model: "Mustang" };
    const cars = ['Ford', 'BMW', 'Audi'];
    return (
        <>
            <h1>Welcome to FunctionalComponents {props.defined}</h1>
            <Component1 colour={colour} info={carInfo} />

            {
                cars.length > 0 &&
                cars.map((item) => {
                    return item
                })



            }
        </>
    )
}
export default FunctionalComponents