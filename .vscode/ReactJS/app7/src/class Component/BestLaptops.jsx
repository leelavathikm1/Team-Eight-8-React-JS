import { Component } from "react";

export default class BestLaps extends Component {
    constructor() {
        super()
        this.state = {
            BestLaptopInd: {
                BestLaptop1: "Dell",
                BestLaptop2: "Mac",
            }
        }
    }

    render() {
        return <div>
            <h1>Best Laptops </h1>
            {Object.keys(this.state.BestLaptopInd).map((val, i) => {
                return <p key={i}>{val}:-{this.state.BestLaptopInd[val]}</p>
            })}
        </div>
    }
}