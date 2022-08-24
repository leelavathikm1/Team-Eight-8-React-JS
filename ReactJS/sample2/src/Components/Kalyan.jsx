import { Component } from "react";

export default class Kalyan extends Component{
    constructor(){
        super()
        this.state={
            Name:"",
            person:{},
            user:[],
            States:[]
        }
    }
    changeName =()=>{
        this.setState({
            Name:"PS Kalyan Kumar"
        })
    }

    changePerson =()=>{
        this.setState({
            person:{fname:"Kalyan",lname:"Kumar",city:"Vellore"}
        })
    }
     displayUser=()=>{
        this.setState({
            user:["Jai","Sai","Hari","Harish","Tamil","Suri"]
        })
     }

     displayStates=()=>{
        this.setState({
            States:["Tamilnadu","AndhraPradesh","Telangana","Karnataka","Kerala"]
        })
     }
     handledelete=(i)=>{
        let allStates = [...this.state.States]
        allStates.splice(i,1)
        this.setState({States:allStates})
    }
    render(){
        return <div>
            <h1>I am from Class Components</h1> <hr />
        <button onClick={this.changeName}> Change Name</button>
        <p>My name is :{this.state.Name}</p>

        <hr />
        <h1>I am from Person Component</h1>
        <button onClick={this.changePerson}>Change Person</button>
        <p>First Name:{this.state.person.fname}</p>
        <p>Last Name:{this.state.person.lname}</p>
        <p>City:{this.state.person.city}</p>

        <hr />
        <h1>I am from Display User Component</h1>
        <button onClick={this.displayUser}>Display User</button>
        {this.state.user.map((val)=>{
            return <p>{val}</p>
        })}
        
        <hr />
        <h1>I am from HandleDelete component</h1>
        <button onClick={this.displayStates}>Display States</button>
        {this.state.States.map((val,i)=>{
                return <p onClick={()=>{this.handledelete(i)}} key={i}>{val}</p>
            })}
        </div>
    }
}