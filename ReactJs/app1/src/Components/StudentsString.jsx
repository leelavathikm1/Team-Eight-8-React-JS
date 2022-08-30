import { Component } from "react";

export default class StudentStr extends Component{
  constructor(){
    super()
    this.state={
      StudentsString : "Iam from String",
    }
  }
  render(){
    return <div>
      {this.state.StudentsString}
    </div>
  }
}