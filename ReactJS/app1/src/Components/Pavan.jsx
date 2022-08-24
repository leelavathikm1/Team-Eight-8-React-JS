import Dataclasscomp from "./DataclassComp";
import Friendsclasscomp from "./Friendsclasscomp";
import { Pavanclass } from "./Pavanclass";
import Pavanclasscomp from "./Pavanclasscomp";
import { Pavanps } from "./Pavanps";
import { Pavanpsclass } from "./Pavanpsclass";

export default function Pavan(){
    return <div>
        <h1>I am from Pavan component</h1>
        <Pavanps/>
        <Pavanclass/>
        <Pavanpsclass/>
        <Pavanclasscomp/>
        <Friendsclasscomp/>
        <Dataclasscomp/>
    </div>
}