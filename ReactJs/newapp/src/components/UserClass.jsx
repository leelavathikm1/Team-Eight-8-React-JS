import React, { Component } from 'react'

export default class UserClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        firstName:"",
        lastName:"",
        email :"",
        mobile :"",
        dob :"",
      }
    }
     handleChange=(e)=>{
        console.log(e.target.value);
        var inputname = e.target.name;
        var newPerson = {...this.state.person};
        newPerson[inputname] = e.target.value
        this.setState({person : newPerson})
       };
        handleSubmit=()=>{
        console.log(this.state.person);
    };
    
    
  render() {
    return (
      <div>
         <form>
            <label htmlFor="firstName">First Name :</label>
            <input type="text" name="firstName" value={this.state.person.firstName} onChange={(e)=>{this.handleChange(e)}}/> <br />
            <label htmlFor="lastName"> Last Name :</label>
            <input type="text" name="lastName" value={this.state.person.lastName} onChange={(e)=>{this.handleChange(e)}} /><br />
            <label htmlFor="dob">DOB :</label>
            <input type="text" name="dob" value={this.state.person.dob} onChange={(e)=>{this.handleChange(e)}}/> <br />
            <label htmlFor="email">Email :</label>
            <input type="text" name="email" value={this.state.person.email} onChange={(e)=>{this.handleChange(e)}}/> <br />
            <label htmlFor="mobile">Mobile :</label>
            <input type="text" name="mobile" value={this.state.person.mobile} onChange={(e)=>{this.handleChange(e)}}/> <br />
           
            <button onClick={this.person.handleSubmit} type="button"> Add User</button>
            
            
        </form>
      </div>
    )
  }
}
