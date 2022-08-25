import { useState } from "react";
import { ChildComp } from "./ChildComp";

export function Pavan() {
    const [Data, SetData] = useState("Hello All");
    const [Name, SetName] = useState({ fname: "Pavan", lname: "Kumar" });
    const [Company, SetCompany] = useState(["Tech Mahendra", "Google", "Bosch", "Accenture", "IBM"])

    const ChangeData = () => {
        SetData("I am from Functional component")
    }

    const ChangeName = () => {
        SetName({ fname: "Software", lname: "Engineer" })
    }

    const ChangeCompany = () => {
        SetCompany(["wipro", "TCS", "CTS", "Infosys", "Microsoft"])
    }

    return <div>
        <h1>I am from Data Component</h1>
        <ChildComp
        Data={Data}
        ChangeData={ChangeData}
        Name={Name}
        ChangeName={ChangeName}
        Company={Company}
        ChangeCompany={ChangeCompany}
        />
        </div> 
}