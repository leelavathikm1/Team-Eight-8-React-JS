import { Component } from "react";

export default class UsersEventHandler extends Component{
    constructor(){
        super()
        this.state ={
            message: "Event Handler"
        }
    }
    changeMessage = ()=>{
        this.setState({
            message :"Iam from class component Event Handler"
        })
    }
    render() {
        return <div>
            <h1>Using Event Handler</h1>
            <button onClick={this.changeMessage}>Click Here</button>
            <p>Event Handler: {this.state.message}</p>
        </div>
    }
}