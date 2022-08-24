import { useState } from "react";

export function Temples() {
    const [WelcomeTemple, setTemples] = useState("India Has Many Temples")
    const [StatewiseTemple, setList] = useState({})
    const [Message, setMessage] = useState("")


    const changeWelcome = () => {
        setTemples(" Top 5 Temples In India")
    }

    const displayTemples = () => {
        setList({ Top1: "Andhra Pradesh - Thirumala", Top2: "Tamil Nadu - Thanjavur", Top3: "Tamil Nadu - Rameshwaram", Top4: "Tamil Nadu - Madhurai", Top5: "Uttar Pradesh - Varanasi" })
    }

    const displayMessage = () => {
        setMessage("MUST VISIT TEMPLES IN INDIA")
    }
    return <div>
        <h1>INDIA TEMPLE </h1>
        <button onClick={changeWelcome}>Click Here</button>
        <p>{WelcomeTemple}</p>

        <h1>List Of Temples</h1>
        <button onClick={displayTemples}>Click Here</button>
        <ul>
            <li> {StatewiseTemple.Top1}</li>
            <li> {StatewiseTemple.Top2}</li>
            <li> {StatewiseTemple.Top3}</li>
            <li> {StatewiseTemple.Top4}</li>
            <li> {StatewiseTemple.Top5}</li>
        </ul>

        <button onClick={displayMessage}>Message For You</button>
        <p>{Message}</p>
    </div>
}

