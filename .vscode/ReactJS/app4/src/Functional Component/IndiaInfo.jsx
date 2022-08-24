import { useState } from "react";

export function India() {
    const [welcomeIndia, setWelcomeIndia] = useState("")
    const [StatesInIndia, setStateOfIndia] = useState("")
    const [TouristSpot, setTourist] = useState([""])



    const displayIndia = () => {
        setWelcomeIndia("Welcome To The Most Beautiful Country-INDIA")
    }
    const displayState = () => {
        setStateOfIndia("India is a federal union comprising 28 states and 9 union territories, with a total of 37 entities. The states and union territories are further subdivided into districts and smaller administrative divisions.")
    }
    const displayTouristSpot = () => {
        setTourist(["Ooty", "Kodaikanal", "Kaniyakumari", "Munnar", "Delhi", "Agra",])
    }

    return <div>
        <h1>Tri Colour Country</h1>
        <button onClick={displayIndia}>Click Here</button>
        <p>{welcomeIndia}</p>
        <h2>About States In India</h2>
        <button onClick={displayState}>Click Here</button>
        <p>{StatesInIndia}</p>
        <h2>Tourist Spot In India</h2>
        <button onClick={displayTouristSpot}>Click Here</button>

        <ul>
            {TouristSpot.map((tourist, i) => {
                return <li key={i}>{tourist}</li>
            })}
        </ul>


    </div>

}