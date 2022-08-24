import { Kalyanclass } from "./Kalyanclass";
import Kalyanclasscomp from "./Kalyanclasscomp";
import Kalyandetails from "./Kalyandetails";
import Kalyanfriends from "./Kalyanfriends";
import KalyanKumar from "./KalyanKumar";

export function Kalyan(){
    return <div>
        <h2>I am from kalyan component</h2>
        <KalyanKumar/>
        <Kalyanclass/>
        <Kalyanclasscomp/>
        <Kalyanfriends/>
        <Kalyandetails/>
    </div>
}