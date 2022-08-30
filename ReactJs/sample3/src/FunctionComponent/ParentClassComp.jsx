import { useState } from "react";
import { ChildComp } from "./ChildComp";

export function Princella() {
    const [Data, SetData] = useState("Hello World");
    const [Name, SetName] = useState({ fname: "Princella", lname: "Flarence" });
    const [Friends, SetFriends] = useState(["Preethi Vakku", "Haritha", "Hamsa"])

    const ChangeData = () => {
        SetData("I am from Functional component")
    }

    const ChangeName = () => {
        SetName({ fname: "princy", lname: "prince" })
    }

    const ChangeFriends = () => {
        SetFriends(["Bhargavi", "Sheela", "Shanu", "Ramya", "Harika"])
    }

    return <div>
        <h1>I am from Data Component</h1>
        <ChildComp/>
        Data={Data}
        ChangeData={ChangeData}
        Name={Name}
        ChangeName={ChangeName}
        Company={Friends}
        ChangeFriends={ChangeFriends}
        
        </div> 
}