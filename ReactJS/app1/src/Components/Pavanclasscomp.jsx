import { Component } from "react";

export default class Pavanclasscomp extends Component {
    constructor() {
        super()
        this.state = {
            names: ["Pavan Kumar Reddy P S"]
        }
    }
    render() {
        return <h2>I am from Pavan Class Component - {this.state.names}</h2>
    }
}