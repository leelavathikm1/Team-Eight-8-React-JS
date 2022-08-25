import { Component } from "react";

export default class LaptopName extends Component {
    constructor() {
        super()
        this.state = {
            LapNames: ["Asus", "HP", "DELL", "MAC"]
        }
    }

    render() {
        return <div>
            {
                this.state.LapNames.map((val, i) => {
                    return <p key={i}>{val}</p>
                })
            }
        </div>
    }
}