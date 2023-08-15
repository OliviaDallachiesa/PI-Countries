const { getCountryById } = require("../controllers/getCountryById")

const getCountriesByIdHandler = async (req, res) => { 
    const { id } = req.params
    try{
        let idUpper = id.toUpperCase()
        const country = await getCountryById(idUpper)
        if(!country){ 
            res.status(404).send(`No country found with this ID: ${id}`)
        }
        res.status(200).json(country)

       } catch(error){
        res.status(404).json({ error: error.message })
    }
}

module.exports = {
    getCountriesByIdHandler,
}