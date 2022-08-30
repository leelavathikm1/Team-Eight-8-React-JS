import React, {useState} from 'react'

export const User = () => {
   // const [firstName, setfirstName] = useState("");
   const [person, setperson] = useState({
    firstName : "",
    lastName :  "",
    email : "",
    mobile : "",
    dob : "",
   });

    const handleChange=(e)=>{
     console.log(e.target.value);
     var inputname = e.target.name;
     var newPerson = {...person};
     newPerson[inputname] = e.target.value
     setperson(newPerson);
    };
    const handleSubmit=()=>{
        console.log(person)
    }
  
    
  return (
    <div>
        <form>
            <label htmlFor="firstName">First Name </label>
            <input type="text" name="firstName" value={person.firstName} onChange={(e)=>{handleChange(e)}}/> <br />
            <label htmlFor="lastName"> Last Name </label>
            <input type="text" name="lastName" value={person.lastName} onChange={(e)=>{handleChange(e)}} /><br />
            <label htmlFor="dob">DOB </label>
            <input type="text" name="dob" value={person.dob} onChange={(e)=>{handleChange(e)}}/> <br />
            <label htmlFor="email">Email </label>
            <input type="text" name="email" value={person.emails} onChange={(e)=>{handleChange(e)}}/> <br />
            <label htmlFor="mobile">Mobile </label>
            <input type="text" name="mobile" value={person.mobile} onChange={(e)=>{handleChange(e)}}/> <br />
           
            <button onClick={handleSubmit} type="button"> Add User</button> 
            
           
            
        </form>
    </div>
  )
}
