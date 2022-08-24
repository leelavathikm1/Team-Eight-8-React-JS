import { Component } from "react";

export default class Kalyandetails extends Component {
    constructor() {
        super()
        this.state = {
            Details: {
                "fname": "kalyan",
                "lname": "Kumar",
                "Email": "kalyan@gmail.com",
                "MobNo": 8374249981,
                "city": "vellore",
                "State": "TamilNadu",
                "pinCode": 632603
            }
        }
    }
    render(){
        return <div>
            {Object.keys(this.state.Details).map((val,i)=>{
                return <p key={i}>{val}:-{this.state.Details[val]}</p>
            })}
        </div>
    }
}