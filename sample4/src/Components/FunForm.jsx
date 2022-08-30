import React,{useState} from 'react'

export const FunForm = () => {
  const [person, setperson] = useState({
    name : "",
    university : "",
    institute :  "",
    branch : "",
    degree : "",
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
            <label htmlFor="name"> Name </label>
            <input type="text" name="Name" value={person.name} onChange={(e)=>{handleChange(e)}}/> <br /> <br />
            <label htmlFor="university">University </label>
            <input type="text" name="university" value={person.university} onChange={(e)=>{handleChange(e)}} /><br /> <br />
            <label htmlFor="institute">Institute </label>
            <input type="text" name="institute" value={person.institute} onChange={(e)=>{handleChange(e)}}/> <br /> <br />
            <label htmlFor="branch">Branch </label>
            <input type="text" name="branch" value={person.branch} onChange={(e)=>{handleChange(e)}}/> <br /> <br />
            <label htmlFor="degree">Degree </label>
            <input type="text" name="degree" value={person.degree} onChange={(e)=>{handleChange(e)}}/> <br /> <br />
           
            <button onClick={handleSubmit} type="button"> Add User</button> 
            
           
            
        </form>
    </div>
  )
}
