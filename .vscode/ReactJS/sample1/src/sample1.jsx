import { Component } from "react";

export default class CollegeDetails extends Component {
    constructor() {
        super()
        this.state = {
            college: {
                "collegeName": "VIT",
                "Area": "Vellore",
                "City": "Vellore",
                "courses": "UG & PG",
                "Hostel": "Available",

            }
        }

    }

    render() {
        return <div>
            {Object.keys(this.state.college).map((val, i) => {
                return <p key={i}>{val}:{this.state.college[val]}</p>
            })}
        </div>

    }
}