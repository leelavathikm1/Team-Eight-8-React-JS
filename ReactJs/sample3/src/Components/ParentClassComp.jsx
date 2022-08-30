import React, { Component } from 'react'
import ChildClassComp from './ChildClassComp'

export default class Parentclasscomp extends Component{
    constructor(){
        super()
        this.state={
            Note:"Fruits and vegetables",
            Fruits:{1:"Apple",2:"Mango",3:"grapes",4:"Orange"},
            vegetables:["Tomato","Onion","Potato","carrot"]
        }
    }

    handleChange=()=>{
        this.setState({Note:"Fruits and Vegetables"})
    }
    render(){
        return <div>
            <h1>I am from Parent class componeent</h1>
            <ChildClassComp/>
            name={this.state.Note}
            FruitsDetails={this.state.Fruits}
            VegetablesDetails={this.state.vegetables}
            ChangeName={this.handleChange}
        </div>
    }
}