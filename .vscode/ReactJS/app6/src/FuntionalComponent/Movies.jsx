import { useState } from "react";

export function Movies() {
    const [IndianMovies, SetMovies] = useState("Indian Movies")
    const [BestMovies, SetMoviesList] = useState([])
    const [BestDirectors, setDirectors] = useState({})
    const displayMovies = () => {
        SetMoviesList(["RRR", "Vikram", "Jai Bhim", "Soorarai Potru", "Roketry", "URI-The Surgical Strike", "Major"])
    }
    const displayDirectors = () => {
        setDirectors({ Director1: "Shankar", Director2: "Rajamouli", Director3: "Atlee", Director4: "Cheran", Director5: "Nelson" })
    }



    return <div>
        <h1> {IndianMovies}</h1>
        <h2>List Of The Best Movies </h2>
        <button onClick={displayMovies}>Click To Know</button>

        <ul>
            {BestMovies.map((movies, i) => {
                return <li key={i}>{movies}</li>
            })}
        </ul>

        <h2>Best Directors</h2>
        <button onClick={displayDirectors}>Click To Know</button>
        <ul>
            <li>{BestDirectors.Director1}</li>
            <li>{BestDirectors.Director2}</li>
            <li>{BestDirectors.Director3}</li>
            <li>{BestDirectors.Director4}</li>
            <li>{BestDirectors.Director5}</li>
        </ul>
    </div>

}

