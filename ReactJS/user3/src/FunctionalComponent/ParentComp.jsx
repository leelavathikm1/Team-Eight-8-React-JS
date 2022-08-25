import { useState } from "react";
import { ChildComp } from "./ChildComp";

export function Pavan() {
    const [Data, SetData] = useState("Hello All");
    const [Name, SetName] = useState({ fname: "Bike", lname: "Company" });
    const [Bike, SetBike] = useState(["RoyalEnfield", "BAJAJ", "TVS", "YAMAHA", "SUZUKI"])

    const ChangeData = () => {
        SetData("I am from Functional component")
    }

    const ChangeName = () => {
        SetName({ fname: "Bike", lname: "Models" })
    }

    const ChangeBike = () => {
        SetBike(["Classic 350", "Pulsar NS 200", "Apache", "R15 V3", "Gixxer SF 150"])
    }

    return <div>
        <h1>I am from Data Component</h1>
        <ChildComp
            Data={Data}
            ChangeData={ChangeData}
            Name={Name}
            ChangeName={ChangeName}
            Bike={Bike}
            ChangeBike={ChangeBike}
        />
    </div>
}