const { getAllCountries } = require("../controllers/getAllCountries")

const getCountryById = async (id) => {
    const countries = await getAllCountries()

    let countryFound = countries.find(country => country.id == id)
    return countryFound
}

module.exports = {
    getCountryById,
}