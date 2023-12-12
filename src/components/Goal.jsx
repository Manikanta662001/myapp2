import React from "react";

function Missedgoal(){
    return <h1>He missed the goal</h1>
}
function Madegoal(){
    return <h1>He made a goal</h1>
}

function Goal({isgoal}){
    // const isgoal=props.isgoal
    // if (props.isgoal)
    // {
    //     return <Madegoal />
    // }
    // else
    // {
    //     return <Missedgoal />
    // }
    return(
    <>
    {isgoal ? <Madegoal /> : <Missedgoal /> }
    </>
    )
}

function Elements(props){
    const ele=props.list

    return (
        <>
        <h1>Garage</h1>
        {ele.length>0 && <h2>You have {ele.length} elements</h2>
        }
        </>
    )

}
export default Goal;
export {Elements}