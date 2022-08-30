import React, { Component } from 'react'

export default class Childclasscomp extends Component{
    constructor(props){
        super()

    }
    render(){
        return <div>
            <h2>I am from child class component</h2>
            <button onClick={this.props.ChangeName}>Change Note</button>
            <p>Msg from Parent Class:{this.props.name}</p>
            <hr />
            {Object.keys(this.props.FruitsDetails).map((val,i)=>{
                return <p key={i}>{this.props.FruitsDetails[val]}</p>
            })}
            <hr />
            <ul>
            {this.props.VegetablesDetails.map((val,i)=>{
                return <li key={i}>{val}</li>
            })}
            </ul>
        </div>
    }
}
