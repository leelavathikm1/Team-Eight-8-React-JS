import { Component } from "react";
import { ChildClass } from "./ChildClassComp";

export class ParentClass extends Component {
    constructor() {
        super()
        this.state = {
            welcomeMsg: "Creating a Parent Class & Child Clas  component ,this is srting method ",
            user: {
                Fname: "Sruthi",
                Lname: "Gnanasekkar",
            },
            FriendsName: ["Anusha", "Satya", "Nuzeba", "Kayal", "Swathi", "Nandhu"]
        }


    }
    render() {
        return <div>
            <h1>I am from Parent Component</h1>
            <hr />
            {/* <ChildClass {...this.state} />   (Even v can use this when all the string,Object,Array) */}
            <ChildClass msg={this.state.welcomeMsg}
                userDetails={this.state.user}
                frndNames={this.state.FriendsName} />
        </div>

    }
}