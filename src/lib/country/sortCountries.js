import * as R from "ramda"
import { countryMedals } from './countriesMedals'

export const sortCountries = (data, type) => {
    const countriesMedals = countryMedals(data)

    //Sort by Total
    const forTotal = function (a, b) { return b.total - a.total; };
    const byTotal = (medals) => R.sort(forTotal, medals)

    //Sort by Gold
    const forGold = function (a, b) { return b.gold - a.gold; };
    const byGold = (medals) => R.sort(forGold, medals)

    //Sort by Silver
    const forSilver = function (a, b) { return b.silver - a.silver; };
    const bySilver = (medals) => R.sort(forSilver, medals)

    //Sort by Bronze
    const forBronze = function (a, b) { return b.bronze - a.bronze; };
    const byBronze = (medals) => R.sort(forBronze, medals)


    switch (type) {
        case 'byTotal':
            return byTotal(countriesMedals)
        case 'byGold':
            return byGold(countriesMedals)
        case 'bySilver':
            return bySilver(countriesMedals)
        case 'byBronze':
            return byBronze(countriesMedals)
        default:
            break;
    }

}