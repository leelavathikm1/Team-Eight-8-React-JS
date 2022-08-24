import { Component } from "react";

export default class Users extends Component {
    constructor() {
        super()
        this.state = {
            Name: "",
            person: {
                Address:{}
            },
            Users:[]
        }
    }

    Changename = () => {
        this.setState({
            Name: "Pavan Kumar Reddy PS"
        })
    }

    Changeperson = () => {
        this.setState({
            person: { fname: "Pavan", lname: "Kumar", State: "TamilNadhu",Address:{} }
        })
    }

    displayUser=()=>{
        this.setState({
            Users:["pavan","kalyan","harish","sai"]
        })
    }

    handledelete=(i)=>{
        let allUsers = [...this.state.Users]
        allUsers.splice(i,1)
        this.setState({Users:allUsers})
    }

    changeAddress=()=>{
        let newAddress ={...this.state.person.Address}
        newAddress={
            fname:"kalyan",
            lname:"Kumar",
            city:"Vellore",
            State:"Tamil Nadhu"
        }
        this.setState({person:{Address:newAddress}})
    }
    render() {
        return <div>
            <h1>Welcome to Class Component</h1>
            <button onClick={this.Changename}>Set Name</button>
            <h2>I am from Class Component</h2>
            <p>My name is :{this.state.Name}</p>

            <hr />
            <button onClick={this.Changeperson}>Change Person</button>
            <h2>I am from Change Person</h2>
            <p>First Name:{this.state.person.fname}</p>
            <p>Last Name:{this.state.person.lname}</p>
            <p>State:{this.state.person.State}</p>

            <hr />
            <h1>Users</h1>
            <button onClick={this.displayUser}>Display user</button>
            {this.state.Users.map((user,i)=>{
                return <p onClick={()=>{this.handledelete(i)}} key={i}>{user}</p>
            })}

            <h2>New Address</h2>
            <button onClick={this.changeAddress}>Add Address</button>
            <p>First Name:{this.state.person.Address.fname}</p>
            <p>Last Name:{this.state.person.Address.lname}</p>
            <p>city:{this.state.person.Address.city}</p>
            <p>State:{this.state.person.Address.State}</p>
        </div>

    }
}