const { Activity } = require("../db")

const getActivities = async () => {
    const dbActivities = await Activity.findAll()
    
    const mapActivity = dbActivities.map(act => ({
        id: act.id,
        name: act.name,
        difficulty: act.difficulty,
        duration: act.duration ? act.duration : 0,
        season: act.season,
    }))
    
    return mapActivity;
}

module.exports = {
    getActivities,
}

