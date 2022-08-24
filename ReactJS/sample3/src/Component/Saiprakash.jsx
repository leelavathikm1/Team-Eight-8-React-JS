import { Component } from "react";

export default class Saiprakash extends Component{
    constructor(){
        super()
        this.state={
            Name:"",
            Person:{},
            User:[],
            Data:[]
        }
    }
    changeName=()=>{
        this.setState({
            Name:"K R SAIPRAKASH "
        })
    }

    changePerson=()=>{
        this.setState({
            Person:{fname:"Sai",lname:"Prakash"}
        })
    }

    displayUser=()=>{
        this.setState({
            User:["Pavan","Kalyan","Harish","Gunasekar","Jai","Harikishore"]
        })
    }

    displayData=()=>{
        this.setState({
            Data:["Name","Age","Address","Mobile No","College"]
        })
    }

    handleDelete=(i)=>{
        let allData=[...this.state.Data]
        allData.splice(i,1)
        this.setState({Data:allData})
    }
    render(){
        return <div>
            <h1>I am from Saiprakash Class Component</h1>

            <hr />
            <h1>I am from Name Component</h1>
            <button onClick={this.changeName}>Change Name</button>
            <h2>My name is {this.state.Name}</h2>

            <hr />
            <h2>I am from person Component</h2>
            <button onClick={this.changePerson}>Change Person</button>
            <p>First Name:{this.state.Person.fname}</p>
            <p>Last Name:{this.state.Person.lname}</p>

            <hr />
            <h2>I am from User Component</h2>
            <button onClick={this.displayUser}>Display User</button>
            {this.state.User.map((val,i)=>{
                return <h3 key={i}>{val}</h3>
            })}
            <hr />
            <h2>I am from Handel Delete Function</h2>
            <button onClick={this.displayData}>Delete Data</button>
            {this.state.Data.map((val,i)=>{
                return <p onClick={()=>{this.handleDelete(i)}} key={i}>{val}</p>
            })}
        </div>
    }
}