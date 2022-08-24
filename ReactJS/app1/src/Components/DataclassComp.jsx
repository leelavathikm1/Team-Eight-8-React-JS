import { Component } from "react";

export default class Dataclasscomp extends Component{
    constructor(){
        super()
        this.state = {
           person:{
            "fname":"Pavan",
            "lname":"Kumar",
            "Email":"pavansubramani367@gmail.com",
            "MobNo":8248916641,
            "city":"vellore",
            "State":"TamilNadu",
            "pinCode":632603
           }
        }
    }
    render(){
        return <div>
            {Object.keys(this.state.person).map((val,i)=>{
                return <p key={i}>{val}:-{this.state.person[val]}</p>
            })}
        </div>
    }
}