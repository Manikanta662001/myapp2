import React from "react";

const Condition=()=>{
    let x=2;
    let text='good morning'
    if (x <= 3)
    {
        text='good afternoon'
    }
    else
    {
        text='Good knight'
    }
    return(
        <>
        <h1>condition page</h1>
        <h1>{text}</h1>
        <h1>{(x) > 3 ? 'hello' :'bye'}</h1>
        </>
    )
}

function Car(props){
    return <div>This is Car component and the colour is {props.color}</div>
}


function Garage(){
    const color='blue'
    return(
        <>
        <h1>This is Garage component</h1>
        <Car color='yellow'/>
        <Car color={color}/>
        </>
    )
}
function Football(){
    const shoot=()=>{
        alert('great shot')
    }
    const ball=(a,b)=>{
        alert(a)
        alert(b.type)
    }
    return(
        <>
        <button onClick={()=>shoot()}>click me</button>
        <button onClick={(eve)=>ball('goal',eve)}>click</button>
        <button onClick={(event)=>{ball('goal',event)}}>click</button>
        </>
    )
}


class Name extends React.Component{
    constructor(props){
        super(props);
        this.state={name:'Mani',gender:'M',exp:'fresher'}
    }
    changename=()=>{
        this.setState({name:'Manikanta'})
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({name:'vamsi'})
        },2000)
    }
    render(){
        return (
            <>
            <h2>This is Class component and name is {this.state.name} and age is {this.props.age} and gender is {this.state.gender} and exp is {this.state.exp}</h2>
            <button onClick={this.changename}>Change Name</button>
            </>
        )
    }
}

export default Condition

export {Car,Garage,Football,Name}