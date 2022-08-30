import { Component } from "react";

export default class UserObj extends Component {
    constructor(){
        super()
        this.state ={
            UsersObject : {
                fName: "Princella",
                lName: "Flarence",
            }, 
            Name:["Princella","Flarence"]
        }
    }
    render(){
        return <div>
            <h1>Using Object</h1>
            {Object.keys(this.state.UsersObject).map((val,i)=>{
                return <p key={i}>{val}:{this.state.UsersObject[val]}</p>
            })}
            <h1>iam from Array </h1>
            {this.state.Name.map((val, i)=>{
                return <p key={i}>{val}</p>
            })}
        </div>
    }
    
    
    
}