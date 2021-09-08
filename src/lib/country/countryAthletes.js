import * as R from "ramda"

export const countryAthletes = (data, country) => {
    // eslint-disable-next-line
    const filterCondition = i => i.country == country;
    const newData = R.filter(filterCondition, data)
    return newData
}