import { Component } from "react";

export default class PenStr extends Component {
    constructor() {
        super()
        this.state = {
            AbtPen: "A pen is a common writing instrument that applies ink to a surface, usually paper, for writing or drawing."

        }
    }

    render() {
        return <div>
            {this.state.AbtPen}
        </div>
    }

}