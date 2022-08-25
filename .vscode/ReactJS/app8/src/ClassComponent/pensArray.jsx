import { Component } from "react";

export default class PNames extends Component {
    constructor() {
        super()
        this.state = {
            PenBrands: ["Parker", "Hero", "Flair", "Renods", "Cello"]
        }
    }

    render() {
        return <div>
            <h1>Best Brand Pens List</h1>
            {
                this.state.PenBrands.map((val, i) => {
                    return <p key={i}>{val}</p>
                })
            }
        </div>
    }
}