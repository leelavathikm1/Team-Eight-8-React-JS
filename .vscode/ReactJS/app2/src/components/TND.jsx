import { Component } from "react";

export default class TamilNaduDistricts extends Component {
    constructor() {
        super()
        this.state = {
            TNdistricts: ["Vellore", "Kanchipuram", "Thiruvallur", "SriPerambattur"]

        }
    }


    render() {
        return <div>
            {this.state.TNdistricts.map((val, i) => {
                return <p key={i}>{val}</p>
            })}
        </div>
    }
}