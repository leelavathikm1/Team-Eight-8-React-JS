import { Component } from "react";

export default class AboutLaps extends Component {
    constructor() {
        super()
        this.state = {
            AbtLaps: "Laptops Are Commonly Used these days,It is very usefull for day to day life "
        }
    }
    render() {
        return <div>
            {this.state.AbtLaps}
        </div>
    }
}