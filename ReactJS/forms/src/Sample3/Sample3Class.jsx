import React, { Component } from 'react'

export default class Sample3Class extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            Details:{
                FirstName: "",
                LastName: "",
                DateOfBirth: "",
                EmailId: "",
                MobileNumber: "",
            }
        }
      }
      handleChange=(e)=>{
        console.log(e.target.value)
        var inputname = e.target.name
        var newDetails={...this.state.Details};
        newDetails[inputname] = e.target.value
        this.setState({Details:newDetails})
    }
    handleSubmit=()=>{
        console.log(this.state.Details)
    }
    handleReset = () => {
        this.setState({
            Details:{
                FirstName: "",
                LastName: "",
                DateOfBirth: "",
                EmailId: "",
                MobileNumber: "",
            }
        })
    }
  render() {
    return (
      <div>
        <h2>HTML Form</h2>
        <hr />
        <label htmlFor="FirstName">First Name : </label>
        <input type="text" name="FirstName" value={this.state.Details.FirstName} onChange={(e)=>{this.handleChange(e)}}/><br /><br />

        <label htmlFor="LastName">Last Name : </label>
        <input type="text" name="LastName" value={this.state.Details.LastName} onChange={(e)=>{this.handleChange(e)}}/><br /><br />

        <label htmlFor="DateOfBirth">Date Of Birth : </label>
        <input type="text" name="DateOfBirth" value={this.state.Details.DateOfBirth} onChange={(e)=>{this.handleChange(e)}}/><br /><br />

        <label htmlFor="EmailId">Email ID : </label>
        <input type="text" name="EmailId" value={this.state.Details.EmailId} onChange={(e)=>{this.handleChange(e)}}/><br /><br />

        <label htmlFor="MobileNumber">Mobile Number : </label>
        <input type="text" name="MobileNumber" value={this.state.Details.MobileNumber} onChange={(e)=>{this.handleChange(e)}}/><br /><br />

        <button  onClick={this.handleSubmit} type={"button"}>Submit</button> 
        <button onClick={this.handleReset} type={"button"}>Reset</button>
      </div>
    )
  }
}
