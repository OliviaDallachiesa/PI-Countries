const { getActivities } = require("../controllers/getActivities")

const getActivitiesHandler = async (req, res) => { 
    try{
        let activities = await getActivities()

        if(activities.length === 0){
            res.status(404).send("No activities found :(")
        }

        res.status(200).json(activities)
       
    } catch(error){
        return res.status(404).send(error.message)   
    }      
}

module.exports = {
    getActivitiesHandler,
}