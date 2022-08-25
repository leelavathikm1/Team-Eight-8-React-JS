import { Component } from "react";

export default class PEvent extends Component {
    constructor() {
        super()
        this.state = {
            BestPen: "Cello"
        }
    }
    ChangePen = () => {
        this.setState({
            BestPen: "Parker"
        })
    }

    render() {
        return <div>
            <h1>Best Pen Brand</h1>
            <button onClick={this.ChangePen}>Click To Know</button>
            <p>Best Pen : {this.state.BestPen}</p>
        </div>
    }
}