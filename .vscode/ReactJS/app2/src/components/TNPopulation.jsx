import { Component } from "react";

export default class TamilNaduPopulation extends Component {
    constructor() {
        super()
        this.state = {
            Population: {
                "FemalePopulation": 72147039,
                "MalePopulation": 36137975,
            }
        }
    }


    render() {
        return <div>
            <h2>Populaion Of Tamil Nadu</h2>
            {Object.keys(this.state.Population).map((val, i) => {
                return <p key={i}>{val} :-{this.state.Population[val]}</p>
            })}
        </div>
    }
}