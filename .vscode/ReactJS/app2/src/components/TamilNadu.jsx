import Districts from "./Districts"
import Names from "./DistrictsNames"
import TamilNaduDistricts from "./TND"
import TamilNaduPopulation from "./TNPopulation"
import TamilNaduCapital from "./TNCapital"
import BestDistrict from "./BestDistrict"


export function TamilNadu() {
    return <div>
        <h1>Details About Tamil Nadu</h1>
        <Districts />
        <Names />
        <TamilNaduDistricts />
        <TamilNaduPopulation />
        <TamilNaduCapital />
        <BestDistrict />
    </div>
}