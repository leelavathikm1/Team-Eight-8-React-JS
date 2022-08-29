import React,{useState} from 'react'

export const FunctionalForm = () => {
    const [Details, setDetails] = useState({
        University:"",
        Institute:"",
        Branch:"",
        Degree:"",
        AvarageCPI:"",
        Experience:"",
        YourWebsite:""
    })
    const handleChange=(e)=>{
        console.log(e.target.value)
        var inputname = e.target.name
        var newDetails={...Details};
        newDetails[inputname] = e.target.value
        setDetails(newDetails)
    }
    const handleSubmit=()=>{
        console.log(Details)
    }
    return (
        <div>
            <h2>Registration Details</h2>
            <hr />
            <label htmlFor="University">University : </label>
            <input type="text" name="University" value={Details.University} onChange={(e)=>{handleChange(e)}}/> <br /><br />

            <label htmlFor="Institute">Institute : </label>
            <input type="text" name="Institute" value={Details.Institute} onChange={(e)=>{handleChange(e)}}/><br /><br />

            <label htmlFor="Branch">Branch : </label>
            <select name="" >
                <option value="" >--Select--</option>
                <option value={Details.Branch} >Chittoor</option>
                <option value={Details.Branch} >Tirupati</option>
                <option value={Details.Branch} >Karnool</option >
                <option value={Details.Branch} >Kadapa</option></select> <br /><br />

            <label htmlFor="Degree">Degree : </label>
            <select name="" >
                <option value="">--Select--</option>
                <option value="">BSC</option>
                <option value="">BCA</option>
                <option value="">BCOM</option>
                <option value="">BBA</option>
            </select>
            <input type="radio" name="Degree" value={Details.Degree} onChange={(e)=>{handleChange(e)}}/>Pursuing
            <input type="radio" name="Degree" value={Details.Degree} onChange={(e)=>{handleChange(e)}}/>Completed<br /> <br />

            <label htmlFor="AvarageCPI">Avarage CPI : </label>
            <input type="number" autoFocus/> upto <input type="number"  autoFocus />Th Semester<br /><br />

            <label htmlFor="Experience">Experience : </label>
            <input type="number" autoFocus  /> Years <br /><br />

            <label htmlFor="YourWebsite">Your Website Or Blog : </label>
            <input type="text" name="YourWebsite"  value={Details.YourWebsite} onChange={(e)=>{handleChange(e)}}/><br /><br />

            <button onClick={handleSubmit} type={"button"}>Submit</button>
        </div>
    )
}
