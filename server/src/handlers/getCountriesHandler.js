const { getAllCountries } = require("../controllers/getAllCountries")
const { getCountryByName } = require("../controllers/getCountryByName")

const getCountriesHandler = async (req, res) => { 
    const { name } = req.query
    try{
        if(name){
            let nameLower = name.toLowerCase()
            let country = await getCountryByName(nameLower)
            
            // Si no existe ese país:
            if(country === undefined){
                res.status(404).send("No country found with that name :(")
            }
            res.status(200).json(country)
        } else {
            let countries = await getAllCountries()
            if(countries.length === 0){
            res.status(404).send("No countries found :(")
            }
            res.status(200).json(countries)
        }
    } catch(error){
        return res.status(404).send(error.message)   
    }      
}

module.exports = {
    getCountriesHandler,
}