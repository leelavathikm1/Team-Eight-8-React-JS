import React, { Component } from 'react'

export default class ClassForm extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            Details:{
            University:"",
            Institute:"",
            Branch:"",
            Degree:"",
            AvarageCPI:"",
            Experience:"",
            YourWebsite:""
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
        <h2>Registration Details</h2>
        <hr />
        <label htmlFor="University">University : </label>
        <input type="text" name="University" value={this.state.Details.University} onChange={(e)=>{this.handleChange(e)}}/> <br /><br />

        <label htmlFor="Institute">Institute : </label>
        <input type="text" name="Institute" value={this.state.Details.Institute} onChange={(e)=>{this.handleChange(e)}}/><br /><br />

        <label htmlFor="Branch">Branch : </label>
        <select name="" >
            <option value="" >--Select--</option>
            <option value={this.state.Details.Branch} >Chittoor</option>
            <option value={this.state.Details.Branch} >Tirupati</option>
            <option value={this.state.Details.Branch} >Karnool</option >
            <option value={this.state.Details.Branch} >Kadapa</option></select> <br /><br />

        <label htmlFor="Degree">Degree : </label>
        <select name="" >
            <option value="">--Select--</option>
            <option value="">BSC</option>
            <option value="">BCA</option>
            <option value="">BCOM</option>
            <option value="">BBA</option>
        </select>
        <input type="radio" name="Degree" value={this.state.Details.Degree} onChange={(e)=>{this.handleChange(e)}}/>Pursuing
        <input type="radio" name="Degree" value={this.state.Details.Degree} onChange={(e)=>{this.handleChange(e)}}/>Completed<br /> <br />

        <label htmlFor="AvarageCPI">Avarage CPI : </label>
        <input type="number" autoFocus/> upto <input type="number"  autoFocus />Th Semester<br /><br />

        <label htmlFor="Experience">Experience : </label>
        <input type="number" autoFocus  /> Years <br /><br />

        <label htmlFor="YourWebsite">Your Website Or Blog : </label>
        <input type="text" name="YourWebsite"  value={this.state.Details.YourWebsite} onChange={(e)=>{this.handleChange(e)}}/><br /><br />

        <button onClick={this.handleSubmit} type={"button"}>Submit</button>
    </div>
    )
  }
}
