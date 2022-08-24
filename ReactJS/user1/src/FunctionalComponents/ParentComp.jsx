import { useState } from "react";
import { ChildComp } from "./ChildComp";

export function Pavan() {
    const [Data, SetData] = useState("Hello All");
    const [Name, SetName] = useState({ fname: "Pavan", lname: "Kumar" });
    const [Persons, SetPersons] = useState(["Hareesh", "Mahesh", "Chandu", "Bala", "Monesh"])

    const ChangeData = () => {
        SetData("I am from Functional component")
    }

    const ChangeName = () => {
        SetName({ fname: "Lokesh", lname: "Kalyan" })
    }

    const ChangePerson = () => {
        SetPersons(["Jai", "Sai", "Suri", "Hari", "Harish"])
    }

    return <div>
        <h1>I am from Data Component</h1>
        <ChildComp
        Data={Data}
        ChangeData={ChangeData}
        Name={Name}
        ChangeName={ChangeName}
        Persons={Persons}
        ChangePerson={ChangePerson}
        />
        {/* <button onClick={ChangeData}>Change Data</button>
        <p>Welcome Note : {Data}</p> <hr /> */}

        {/* <h1>I am from Name Component</h1>
        <button onClick={ChangeName}>Change Name</button>
        <li> FirstName : {Name.fname}</li>
        <li>LastName : {Name.lname}</li> <hr /> */}

        {/* <h1>I am from Persons Component</h1>
        <button onClick={ChangePerson}>Change Person</button>
        <ul>
            {Persons.map((val) => {
                return <li>{val}</li>
            })}
        </ul> */}
    </div>
}