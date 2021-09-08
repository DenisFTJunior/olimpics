import * as R from "ramda"

export const searchCountry = (searched,data) =>{
    const condition = item => R.includes(searched,item.country) ;
    return R.filter(condition,data)
}