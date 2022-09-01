import React, { Component } from 'react'

export default class UserClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            person: {
                Fname: "",
                Lname: "",
                Email: "",

            }
        }
    }
    handleChange = (e) => {
        console.log(e.target.value)

        var inputname = e.target.name;
        var newPerson = { ...this.state.person };
        newPerson[inputname] = e.target.value
        this.setState({ person: newPerson })


    }

    handleSubmit = () => {
        console.log(this.state.person)
    }
    render() {
        return (
            <div>
                <form >
                    <label htmlFor="Fname">First Name :  </label>
                    <input type="text" name="Fname" value={this.state.person.FirstName} onChange={(e) => { this.handleChange(e) }} />
                    <br />

                    <label htmlFor="Lname"> Last Name : </label>
                    <input type="text" name="Lname" value={this.state.person.Lname} onChange={(e) => { this.handleChange(e) }} />
                    <br />


                    <label htmlFor="Email"> Email : </label>
                    <input type="text" name="Email" value={this.state.person.Email} onChange={(e) => { this.handleChange(e) }} />
                    <br />

                    <button onClick={this.handleSubmit} type="button">Add User</button>

                </form>
            </div>
        )
    }
}
