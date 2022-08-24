import { Component } from "react";

export default class MaheshclassComp extends Component{
    constructor(){
        super()
        this.state =["Mahesh Kumar AD"]
    }
    render(){
        return <h4>My name is {this.state}</h4>
    }
}