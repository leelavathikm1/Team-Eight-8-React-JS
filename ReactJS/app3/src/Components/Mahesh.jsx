import MaheshClass from "./MaheshClass";
import MaheshclassComp from "./MaheshClassComp";
import Maheshdetails from "./Maheshdetails";
import Maheshfriendlist from "./Maheshfriendslist";
import { Maheshkumar } from "./Maheshkumar";

export function Mahesh(){
    return <div>
        <h1>I am from Mahesh function</h1>
        <Maheshkumar/>
        <MaheshClass/>
        <MaheshclassComp/>
        <Maheshfriendlist/>
        <Maheshdetails/>
    </div>
}