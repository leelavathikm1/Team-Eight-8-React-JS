import React, { Component } from 'react'

export default class StudentObj extends Component{
    
    constructor(){
        super()
        this.state={
            StudentObject : {
            fname: "princy",
            lname : "flarence",

            }
        }
    }
    render() {
        return (
            <div>
                <h1>Object</h1>
                {Object.keys(this.state.StudentObject).map((val,i)=>{
                return <p key={i}>{val}:{this.state.StudentObject[val]}</p>
            })}
            </div>
        )
    }
}

