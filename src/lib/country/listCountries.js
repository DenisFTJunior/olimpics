import * as R from "ramda"

export const listCountries = (data) => {
    const condition = item =>{ 
           return R.values(R.pick(['country'],item))
    }
    const listOfCountries = R.map(condition, data); 
    return R.uniq(listOfCountries)
}