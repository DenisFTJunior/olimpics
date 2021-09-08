import * as R from "ramda"
import {listCountries} from './listCountries'

export const countryMedals = (data) =>{
    const list = listCountries(data)

    const condition = country =>{ 
        // eslint-disable-next-line
        const filterCondition = i => i.country == country;
        const newData = R.filter(filterCondition, data) 
        const medals = R.map((athlete)=>{
            return athlete.medal
        },newData)
        // eslint-disable-next-line
        const gold = R.length(R.filter(medal =>medal == "Gold",medals))
        // eslint-disable-next-line
        const silver = R.length(R.filter(medal =>medal == "Silver",medals))
        // eslint-disable-next-line
        const bronze = R.length(R.filter(medal =>medal == "Bronze",medals))
        const total = R.sum([gold,silver,bronze]);

        return {country:country[0],gold,silver,bronze,total}
    }
    return R.map(condition, list );

}