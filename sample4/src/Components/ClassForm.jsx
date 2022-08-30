import React, { Component } from 'react'

export default class FormClass extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      university: "",
      institute: "",
      branch: "",
      degree: "",
    }
  }
  handleChange = (e) => {
    console.log(e.target.value);
    var inputname = e.target.name;
    var newPerson = { ...this.state.person };
    newPerson[inputname] = e.target.value
    this.setState({ person: newPerson })
  };
  handleSubmit = () => {
    console.log(this.state.person);
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="name"> Name :</label>
          <input type="text" name="name" value={this.state.person.name} onChange={(e) => { this.handleChange(e) }} /> <br />
          <label htmlFor="university">university:</label>
          <input type="text" name="university" value={this.state.person.university} onChange={(e) => { this.handleChange(e) }} /><br />
          <label htmlFor="institute">Institute :</label>
          <input type="text" name="institute" value={this.state.person.institute} onChange={(e) => { this.handleChange(e) }} /> <br />
          <label htmlFor="branch">Branch :</label>
          <input type="text" name="branch" value={this.state.person.branch} onChange={(e) => { this.handleChange(e) }} /> <br />
          <label htmlFor="degree">Degree :</label>
          <input type="text" name="degree" value={this.state.person.degree} onChange={(e) => { this.handleChange(e) }} /> <br />

          <button onClick={this.person.handleSubmit} type="button"> Add User</button>


        </form>
      </div>
    )
  }
}
