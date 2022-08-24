import { Component } from "react";
import Childclasscomp from "./ChildClassComp";

export default class Parentclasscomp extends Component{
    constructor(){
        super()
        this.state={
            Note:"Colleges in Chittoor",
            College:{clg1:"VSDC",clg2:"VDC",clg3:"PVKN",clg4:"SV ARTS"},
            Groups:["BSC","BCOM","BBA","BCA","MCA","MBA"]
        }
    }

    handleChange=()=>{
        this.setState({Note:"These are the Main Colleges in Chittoor"})
    }
    render(){
        return <div>
            <h1>I am from Parent class componeent</h1>
            <Childclasscomp
            name={this.state.Note}
            collegeDetails={this.state.College}
            groupDetails={this.state.Groups}
            ChangeName={this.handleChange}/>
        </div>
    }
}