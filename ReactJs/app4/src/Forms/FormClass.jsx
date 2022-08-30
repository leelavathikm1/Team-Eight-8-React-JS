import React, { Component } from 'react'

export default class FormClass extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
          firstName:"",
          lastName:"",
          fatherName :"",
          aadharNo :"",
          address :"",
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
            <label htmlFor="fatherName">Father Name :</label>
            <input type="text" name="fatherName" value={this.state.person.fatherName} onChange={(e)=>{this.handleChange(e)}}/> <br />
            <label htmlFor="aadharNo">Aadhar No :</label>
            <input type="text" name="aadharNo" value={this.state.person.aadharNo} onChange={(e)=>{this.handleChange(e)}}/> <br />
            <label htmlFor="address">Address :</label>
            <input type="text" name="address" value={this.state.person.address} onChange={(e)=>{this.handleChange(e)}}/> <br />
           
            <button onClick={this.person.handleSubmit} type="button"> Add User</button>
            
            
        </form>
      </div>
    )
  }
}
