import { Component } from "react";

export default class Maheshfriendlist extends Component{
    constructor(){
        super()
        this.state={
            Names:["pavan","Chandu","hareesh"]
        }
    }
    render(){
        return <div>
            {this.state.Names.map((val,i)=>{
                return <p key={i}>{val}</p>
            })}
        </div>
    }
}