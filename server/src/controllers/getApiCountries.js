const axios = require("axios");
const { Country } = require('../../src/db');
const ENDPOINT = 'http://localhost:5000/countries';

const getApiCountries = async () => {
    try {
        const countries = await axios.get(ENDPOINT)

        const mapCountry = countries.data.map(country => ({
            id: country.cca3,
            name: country.name.common,
            flag: country.flags.png ? country.flags.png : "No flag image",
            continent: country.continents[0],
            capital: country.capital ? country.capital[0] : "No capital",
            subregion: country.subregion ? country.subregion : "No subregion",
            area: country.area ? country.area : "No area",
            population: country.population
        }))

        
        
    for(let i = 0; i < mapCountry.length; i++){
        await Country.findOrCreate({
            where: {name: mapCountry[i].name},
            defaults: mapCountry[i],
        })}
    } catch (error) {
        console.log(error)
    }}


module.exports = getApiCountries