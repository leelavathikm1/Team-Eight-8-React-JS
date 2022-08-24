import { Component } from "react";

export default class Friendsclasscomp extends Component{
    constructor(){
        super()
        this.state={
            friendsName :["Sai","Mahesh","Monesh","Hareesh","Kishore","Ajith"]
        }
    }
    render(){
        return <div>
            {this.state.friendsName.map((val,i)=>{
                return <p key={i}>{val}</p>
            })}
        </div>
    }
}