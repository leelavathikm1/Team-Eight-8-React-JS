import { Component } from "react";

export default class Maheshdetails extends Component{
    constructor(){
        super()
        this.state={
            Details:{
                fname:"AD",
                mname:"Mahesh",
                lname:"Kumar",
                email:"maheshad@gmail.com",
                mobNo:9878476320 ,
                city:"Chittoor",
                state:"Andhra Pradesh",
                pincode:517001
            }
        }
    }
    render(){
        return <div>
            {Object.keys(this.state.Details).map((val,i)=>{
                return <p key={i}>{val}:-{this.state.Details[val]}</p>
            })}
        </div>
    }
}