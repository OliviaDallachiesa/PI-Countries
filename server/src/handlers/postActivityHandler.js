const { Country, Activity } = require("../db")
const { createActivity } = require("../controllers/createActivity")

const postActivityHandler = async (req, res) => { 
    try{
        // Por params llamamos toda la info que manda el client
        const { name, difficulty, duration, season, countries } = req.body
        
        // Debemos chequear que no exista
        const existingAct = await Activity.findOne({ where: { name: name } })
            if(existingAct !== null){
                res.status(404).send("This activity already exists!")
            } 
        
        // si no existe lo creamos:
        const newActivity = await createActivity(name, difficulty, duration, season, countries)
        res.status(201).json(newActivity)
       
    } catch(error){
        return res.status(404).send(error.message)   
    }      
}

module.exports = {
    postActivityHandler,
}


