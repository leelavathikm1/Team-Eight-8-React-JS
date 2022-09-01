import React, { useState } from 'react'

export const Users = () => {
    // const [FirstName, setFirstName] = useState("")

    const [person, setperson] = useState({
        Fname: "",
        Lname: "",
        Email: "",

    })
    const handleChange = (e) => {
        console.log(e.target.value)

        var inputname = e.target.name;
        var newPerson = { ...person };
        newPerson[inputname] = e.target.value
        setperson(newPerson)
        // setFirstName(e.target.value)
    }

    const handleSubmit = () => {
        console.log(person)
    }
    return (
        <div>
            <form >
                <label htmlFor="Fname">First Name :  </label>
                <input type="text" name="Fname" value={person.FirstName} onChange={(e) => { handleChange(e) }} />
                <br />

                <label htmlFor="Lname"> Last Name : </label>
                <input type="text" name="Lname" value={person.Lname} onChange={(e) => { handleChange(e) }} />
                <br />


                <label htmlFor="Email"> Email : </label>
                <input type="text" name="Email" value={person.Email} onChange={(e) => { handleChange(e) }} />
                <br />

                <button onClick={handleSubmit} type="button">Add User</button>

            </form>
        </div>
    )
}
