import React from "react";
class ClassCompo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: 'Mani', gender: 'M', exp: 'fresher' }

    }
    render() {
        return <>
            <h3>My name is {this.state.name} and i am a {this.state.exp}</h3>
            <h4>age is {this.props.age}</h4>
        </>
    }

}

class Counter extends React.Component {
    constructor() {
        super()
        this.state = { count: 0 }
    }
    handleone = () => {
        // this.setState({count:this.state.count+1},()=>console.log(this.state.count,"COUN"))
        this.setState((prev) => ({ count: prev.count + 1 }))
        console.log(this.state.count, "COUNTTT")
    }
    handlefive = () => {
        //this.setState((prev)=>({count:prev.count+5}))
        this.handleone()
        this.handleone()
        this.handleone()
        this.handleone()
        this.handleone()
    }
    render() {
        return <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.handleone}>click to +1</button>
            <button onClick={this.handlefive}>click to +5</button>
        </div>
    }
}


export default ClassCompo;
export { Counter }