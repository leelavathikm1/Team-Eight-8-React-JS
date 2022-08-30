import  { Component } from 'react'

export default class Array extends Component {
    constructor(){
        super()
        this.state ={
            Name :["princy", "Flarence"]
        }
    }
    render() {
        return (
            <div>
                <h1>iam from array</h1>
                {this.state.Name.map((val,i)=>{
                  return <p key={i}>{val}</p>
                })}
            </div>
        )
    }
}
