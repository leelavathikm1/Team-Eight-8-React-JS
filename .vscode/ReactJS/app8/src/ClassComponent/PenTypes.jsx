import { Component } from "react";

export default class Pens extends Component {
    constructor() {
        super()
        this.state = {
            PensTypes: {
                PenTop1: "Parker",
                penTop2: "Renolds",
                penTop3: "Cello",
                penTop4: "Flair",
                penTop5: "Hero"
            }
        }
    }

    render() {
        return <div>
            <h1>Differnt Types Of Pen</h1>
            {Object.keys(this.state.PensTypes).map((val, i) => {
                return <p key={i}>{val}:-{this.state.PensTypes[val]}</p>
            })}
        </div>
    }
}