import { Component } from "react";

export default class UsersString extends Component {
    constructor(){
        super()
        this.state={
            UserPrincella: "hi iam princella from String",
        }
    }
    render(){
        return <div>
            {this.state.UserPrincella}
        </div>
    }
}