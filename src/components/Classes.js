import React from "react";

class Classes extends React.Component {
    render() {
        return <h2>I am a class component</h2>
    }

}
class Cars extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: 'BLACK' }

    }
    render() {
        return <h2>I am a {this.state.color} Car with {this.props.hp}</h2>
    }
}

class Garages extends React.Component {
    render() {
        return <div>
            <h1>Who lives in my garage--</h1>
            <Cars />
        </div>
    }
}


class Humans extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Harshad",
            role: "Python Trainer",
            city: 'BLR',
            exp: '3 years'
        }
    }
    changeName = () => {
        { this.state.name === 'Harshad' ? this.setState({ name: 'Santhosh' }) : this.setState({ name: 'Harshad' }) }

    }
    // static getDerivedStateFromProps(props,state){
    //     return {city:props.city}

    // }
    componentDidMount() {
        console.log('rendering')
        setTimeout(() => {
            this.setState({ exp: '5 years' })
        }, 5000)
    }
    //initially it is true
    shouldComponentUpdate() {
        return true
    }
    render() {
        return <>
            <p>Name is {this.state.name}, role is {this.state.role},and he living in {this.state.city} and he has {this.state.exp} experience</p>
            <button onClick={this.changeName}>click here to Change name</button>
        </>
    }
}

class Displaying extends React.Component {
    constructor() {
        super()
        this.state = {
            data:
                [{ "name": "Abhishek" }, { "name": "Saharsh" }, { "name": "Ajay" }]
        }
    }
    render(){
        return<>
        <h1>Student Names</h1>
        {(this.state.data).map((item)=><List name={item.name}/>)}
        </>
    }
}

class List extends React.Component{
    constructor(props){
        super(props)
    }
    render()
    {
        return(
            <ul>
                {this.props.name}
            </ul>
        )
    }
}





export default Classes
export { Cars, Garages, Humans,Displaying }