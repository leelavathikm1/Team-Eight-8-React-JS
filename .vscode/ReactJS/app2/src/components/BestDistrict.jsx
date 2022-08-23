import { Component } from "react";

export default class BestDistrict extends Component {
    constructor() {
        super()
        this.state = {
            message: ""
        }
    }

    displayBD = () => {
        this.setState({
            message: "Kanniyakumari"
        })
    }

    render() {
        return <div>
            <h2>Best District In Tamil Nadu</h2>
            <button onClick={this.displayBD}>Click to know</button>
            <p>Best District In Tamil Nadu is : {this.state.message}</p>
        </div>
    }
}