import React, { Component } from 'react'

class EventHandler extends Component {
    constructor(){
        super()
        this.state = {
            message : "Event Handler"
        }
    }
    changeMessage = ()=>{
        this.setState({
            message : " iam class component from Event Handler"
        })
    }
    render(){
        return <div>
            <h1>using Event Handler</h1>
            <button onClick={this.changeMessage}>click here</button>
             <p><Event> Handler : { this.state.message}</Event></p>
        </div>
    }
}
