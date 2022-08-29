import React, { useState } from 'react'

export const Sample3Fun = () => {
    const [Details, setDetails] = useState({
        FirstName: "",
        LastName: "",
        DateOfBirth: "",
        EmailId: "",
        MobileNumber: "",
    })
    const handleChange = (e) => {
        console.log(e.target.value)
        var inputname = e.target.name
        var newDetails = { ...Details };
        newDetails[inputname] = e.target.value
        setDetails(newDetails)
    }
    const handleSubmit = () => {
        console.log(Details)
    }
    const handleReset = () => {
        setDetails({
            FirstName: "",
            LastName: "",
            DateOfBirth: "",
            EmailId: "",
            MobileNumber: "",
        })
    }
    return (
        <div>
            <h2>HTML Forms</h2>
            <hr />
            <label htmlFor="FirstName">First Name : </label>
            <input type="text" name="FirstName" value={Details.FirstName} onChange={(e) => { handleChange(e) }} /><br /><br />

            <label htmlFor="LastName">Last Name : </label>
            <input type="text" name="LastName" value={Details.LastName} onChange={(e) => { handleChange(e) }} /><br /><br />

            <label htmlFor="DateOfBirth">Date Of Birth : </label>
            <input type="text" name="DateOfBirth" value={Details.DateOfBirth} onChange={(e) => { handleChange(e) }} /><br /><br />

            <label htmlFor="EmailId">Email ID : </label>
            <input type="text" name="EmailId" value={Details.EmailId} onChange={(e) => { handleChange(e) }} /><br /><br />

            <label htmlFor="MobileNumber">Mobile Number : </label>
            <input type="text" name="MobileNumber" value={Details.MobileNumber} onChange={(e) => { handleChange(e) }} /><br /><br />

            <button onClick={handleSubmit} type={"button"}>Submit</button>
            <button onClick={handleReset} type={"button"}>Reset</button>

        </div>
    )
}
