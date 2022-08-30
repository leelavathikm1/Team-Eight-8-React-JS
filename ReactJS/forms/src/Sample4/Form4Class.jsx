import React, { Component } from 'react'

export default class Form4Class extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            Details:{
                Name: "",
                UserName: "",
                Email: "",
                Password: "",
                ConfirmPassword: "",
                Message:""
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
  render() {
    return (
      <div>
        <h2>Fill The Form</h2>
        <hr />
        <label htmlFor="Name"> Name  </label><br />
            <input type="text" name="Name" placeholder='Name' value={this.state.Details.Name} onChange={(e) => { this.handleChange(e) }} /><br /><br />

            <label htmlFor="UserName">UserName </label><br />
            <input type="text" name="UserName" placeholder='UserName' value={this.state.Details.UserName} onChange={(e) => { this.handleChange(e) }} /><br /><br />

            <label htmlFor="Email">Email </label><br />
            <input type="text" name="Email" placeholder='Email'  value={this.state.Details.Email} onChange={(e) => { this.handleChange(e) }} /><br /><br />

            <label htmlFor="Password">Password </label><br />
            <input type="text" name="Password" placeholder='Password' value={this.state.Details.Password} onChange={(e) => { this.handleChange(e) }} /><br /><br />
            
            <label htmlFor="ConfirmPassword">Confirm Password </label><br />
            <input type="text" name="ConfirmPassword" placeholder='ConfirmPassword' value={this.state.Details.ConfirmPassword} onChange={(e) => { this.handleChange(e) }} /><br /><br />

            <label htmlFor="Message">Message </label><br />
            <input type="text" name="Message" placeholder='Message' value={this.state.Details.Message} onChange={(e) => { this.handleChange(e) }} /><br /><br />
            
            <button onClick={this.handleSubmit} type={"button"}>Send</button>
        </div>
    )
  }
}
