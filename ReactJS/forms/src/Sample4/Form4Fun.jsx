import React,{useState} from 'react'

export const Form4Fun = () => {
    const [Details, setDetails] = useState({
        Name: "",
        UserName: "",
        Email: "",
        Password: "",
        ConfirmPassword: "",
        Message:""
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
    
  return (
    <div>
        <h2>Fill The Form</h2> <hr />
        <label htmlFor="Name"> Name  </label><br />
            <input type="text" name="Name" placeholder='Name' value={Details.Name} onChange={(e) => { handleChange(e) }} /><br /><br />

            <label htmlFor="UserName">UserName </label><br />
            <input type="text" name="UserName" placeholder='UserName' value={Details.UserName} onChange={(e) => { handleChange(e) }} /><br /><br />

            <label htmlFor="Email">Email </label><br />
            <input type="text" name="Email" placeholder='Email'  value={Details.Email} onChange={(e) => { handleChange(e) }} /><br /><br />

            <label htmlFor="Password">Password </label><br />
            <input type="text" name="Password" placeholder='Password' value={Details.Password} onChange={(e) => { handleChange(e) }} /><br /><br />
            
            <label htmlFor="ConfirmPassword">Confirm Password </label><br />
            <input type="text" name="ConfirmPassword" placeholder='ConfirmPassword' value={Details.ConfirmPassword} onChange={(e) => { handleChange(e) }} /><br /><br />

            <label htmlFor="Message">Message </label><br />
            <input type="text" name="Message" placeholder='Message' value={Details.Message} onChange={(e) => { handleChange(e) }} /><br /><br />
            
            <button onClick={handleSubmit} type={"button"}>Send</button>
    </div>
  )
}
