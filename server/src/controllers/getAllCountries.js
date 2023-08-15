const { Country, Activity } = require("../db")

const getAllCountries = async () => {
    const dbCountries = await Country.findAll({
        include: [{
            model: Activity,
            through: 'Country_Activity',
        }]
    })
    
    const mapCountry = dbCountries.map(country => ({
        id: country.id,
        name: country.name,
        flag: country.flag,
        continent: country.continent,
        capital: country.capital,
        subregion: country.subregion,
        area: country.area,
        population: country.population,
    }))
    return mapCountry
}

module.exports = {
    getAllCountries,
}

