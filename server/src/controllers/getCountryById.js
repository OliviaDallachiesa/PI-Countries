const { getAllCountries } = require("../controllers/getAllCountries")
const { Country, Activity } = require("../db")

const getCountryById = async (id) => {
    const countries = await Country.findAll({
        attributes: ['name','flag','continent', 'capital', 'subregion', 'area','id','population'],
        include:{
            model:Activity,
            attributes:['name','difficulty','duration','season']
        }
    })

    let countryFound = countries.find(country => country.id == id)
    return countryFound
}

module.exports = {
    getCountryById,
}