import React, { useState } from 'react'

export const UserFunComp = () => {
    const [Address, setAddress] = useState({
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: ""
    })

    const handleChange=(e)=>{
        console.log(e.target.value)
        var inputname = e.target.name
        var newAddress={...Address};
        newAddress[inputname] = e.target.value
        setAddress(newAddress)
    }
    const handleSubmit=()=>{
        console.log(Address)
    }
    return (
        <div>
            <h1>Address</h1> <hr />
            <form>
                <label htmlFor="street"> Street : </label>
                <input type="text" name="street" value={Address.street} onChange={(e)=>{handleChange(e)}}/> <br /><br />

                <label htmlFor="city"> City : </label>
                <input type="text" name="city" value={Address.city} onChange={(e)=>{handleChange(e)}} /> <br /> <br />

                <label htmlFor="state">State : </label>
                <input type="text" name="state" value={Address.state} onChange={(e)=>{handleChange(e)}}/><br /> <br />

                <label htmlFor="zipcode">Zip Code : </label>
                <input type="text" name="zipcode" value={Address.zipcode} onChange={(e)=>{handleChange(e)}}/> <br /><br />

                <label htmlFor="country">Country : </label>
                <input type="text" name="country" value={Address.country} onChange={(e)=>{handleChange(e)}}/> <br /><br />

                <button onClick={handleSubmit} type={"button"}>Ok</button> <button>Cancel</button>
            </form>
        </div>
    )
}
