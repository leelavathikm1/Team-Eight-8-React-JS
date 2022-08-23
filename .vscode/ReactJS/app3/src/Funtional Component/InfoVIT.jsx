import { useState } from "react"

export function Vit() {

    const [WelcomeVIT, setWelcomeVIT] = useState("Welcome To Vellore Institute Of Technology")
    const [AboutColg, SetColg] = useState({ Founder: "Vishwanath", Established: 1984, Address: "Vellore" })
    const [AboutCourse, setCourse] = useState({})
    const [AboutResearchPaper, setResearch] = useState([""])

    const displayCourses = () => {
        setCourse({ UG: "BSC,BCOM,BBA,BA", PG: "MSC,MBA,MCOM,MA" })
    }

    const displayResearch = () => {
        setResearch(["Mathematic", "Computer SCience", "Bio Technology", "Chemistry"])
    }

    return <div>
        <h1>Vellore District Best College</h1>
        <p>  {WelcomeVIT}</p>


        <ul>
            <li>{AboutColg.Founder}</li>
            <li>{AboutColg.Established}</li>
            <li>{AboutColg.Address}</li>

        </ul>
        <button onClick={displayCourses}>Course Details</button>

        <p>UG:{AboutCourse.UG}</p>
        <p> PG:{AboutCourse.PG}</p>

        <button onClick={displayResearch}>Research Paper Details</button>

        <ul>

            Research Papers  :  {AboutResearchPaper.map((research, i) => {
                return <li key={i}>{research}</li>
            })}

        </ul>



    </div>
}