import LaptopName from "./LaptopsNames"
import BestLaps from "./BestLaptops"
import AboutLaps from "./AboutLaptop"
import UserLaptop from "./UsersLaptop"

export function Laptops() {


    return <div>
        <h1> Details About Laptops </h1>
        <LaptopName />
        <BestLaps />
        <AboutLaps />
        <UserLaptop />
    </div>
}