import React,{useState} from 'react'

export const FormFunc = () => {
    const [person, setperson] = useState({
        firstName : "",
        lastName :  "",
        fatherName : "",
        aadharNo : "",
        address : "",
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
            <input type="text" name="firstName" value={person.firstName} onChange={(e)=>{handleChange(e)}}/> <br /> <br />
            <label htmlFor="lastName"> Last Name </label>
            <input type="text" name="lastName" value={person.lastName} onChange={(e)=>{handleChange(e)}} /><br /> <br />
            <label htmlFor="fatherName">Father Name </label>
            <input type="text" name="fatherName" value={person.fatherName} onChange={(e)=>{handleChange(e)}}/> <br /> <br />
            <label htmlFor="aadharNo">Aadhar No </label>
            <input type="text" name="aadharNo" value={person.aadharNo} onChange={(e)=>{handleChange(e)}}/> <br /> <br />
            <label htmlFor="address">Address </label>
            <input type="text" name="address" value={person.address} onChange={(e)=>{handleChange(e)}}/> <br /> <br />
           
            <button onClick={handleSubmit} type="button"> Add User</button> 
            
           
            
        </form>
    </div>
  )
}
