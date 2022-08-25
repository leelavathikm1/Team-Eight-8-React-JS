import PenStr from "./PensString";
import Pens from "./PenTypes";
import PNames from "./pensArray";
import PEvent from "./PenEventHandler";




export function PenDetails() {
    return <div>
        <h1>Details About Pens</h1>
        <PenStr />
        <Pens />
        <PNames />
        <PEvent />


    </div>
}