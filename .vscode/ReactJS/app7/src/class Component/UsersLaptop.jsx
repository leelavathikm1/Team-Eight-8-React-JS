import { Component } from "react";

export default class UserLaptop extends Component {
    constructor() {
        super()
        this.state = {
            Laptop: "MAC is a Best Laptop"
        }
    }

    changeLaptop = () => {
        this.setState({
            Laptop: "Dell Laptop is a user friendly Laptop"
        })



    }
    render() {
        return <div>
            <h1>Best Laptop To Use</h1>
            <button onClick={this.changeLaptop}>Click To Know</button>
            <p>Best Laptop : {this.state.Laptop}</p>
        </div>
    }
}