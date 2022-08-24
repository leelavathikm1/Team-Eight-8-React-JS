import { Component } from "react";

export default class Kalyanclasscomp extends Component{
    constructor(){
        super()
        this.state={
            Name :["Kalyan Kumar Reddy P S"]
        }
    }
    render(){
        return <h3>My name is -{this.state.Name}</h3>
    }
}