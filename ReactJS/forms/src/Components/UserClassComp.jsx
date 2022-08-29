import React, { Component } from 'react'

export default class UserClassComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
       Address:{
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: ""
       }
      }
    }
     handleChange=(e)=>{
        console.log(e.target.value)
        var inputname = e.target.name
        var newAddress={...this.state.Address};
        newAddress[inputname] = e.target.value
        this.setState({Address:newAddress})
    }
    handleSubmit=()=>{
        console.log(this.state.Address)
    }
  render() {
    return (
      <div>
         <h1>Address</h1> <hr />
            <form>
                <label htmlFor="street"> Street : </label>
                <input type="text" name="street" value={this.state.Address.street} onChange={(e)=>{this.handleChange(e)}}/> <br /><br />

                <label htmlFor="city"> City : </label>
                <input type="text" name="city" value={this.state.Address.city} onChange={(e)=>{this.handleChange(e)}} /> <br /> <br />

                <label htmlFor="state">State : </label>
                <input type="text" name="state" value={this.state.Address.state} onChange={(e)=>{this.handleChange(e)}}/><br /> <br />

                <label htmlFor="zipcode">Zip Code : </label>
                <input type="text" name="zipcode" value={this.state.Address.zipcode} onChange={(e)=>{this.handleChange(e)}}/> <br /><br />

                <label htmlFor="country">Country : </label>
                <input type="text" name="country" value={this.state.Address.country} onChange={(e)=>{this.handleChange(e)}}/> <br /><br />

                <button onClick={this.handleSubmit} type={"button"}>Ok</button> <button>Cancel</button>
            </form>
      </div>
    )
  }
}
