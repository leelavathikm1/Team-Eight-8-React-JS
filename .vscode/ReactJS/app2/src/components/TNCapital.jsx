import { Component } from "react";

export default class TamilNaduCapital extends Component {
    constructor() {
        super()
        this.state = {
            TNCapital: "Chennai Is The Capital Of Tamil Nadu",
        }
    }
    render() {
        return <div>
            {this.state.TNCapital}
        </div>
    }
}
