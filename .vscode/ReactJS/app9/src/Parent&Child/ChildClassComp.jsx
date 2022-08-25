import { Component } from "react";

export class ChildClass extends Component {
    constructor(props) {
        super()

        console.log(props)
    }
    render() {
        return <div>
            <h1>I am from Child Class Component</h1>
            <p>Message from Parent Class Component : {this.props.msg}</p>
            {Object.keys(this.props.userDetails).map((val, i) => {
                return <p key={i}>{this.props.userDetails[val]}</p>
            })}
            <ul>
                {this.props.frndNames.map((frnds, i) => {
                    return <li key={i}>{frnds}</li>
                })}
            </ul>
        </div>
    }
}