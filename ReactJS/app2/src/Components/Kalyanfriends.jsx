import { Component } from "react";

export default class Kalyanfriends extends Component{
    constructor(){
        super()
        this.state = {
            names:["Harish","Sai","Guna","Tamil","Jai"]
        }
    }
    render(){
        return <div>
            {this.state.names.map((val,i)=>{
                return <p key={i}>{val}</p>
            })}
        </div>
    }
}