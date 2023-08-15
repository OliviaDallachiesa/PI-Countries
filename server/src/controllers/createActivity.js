const { Country, Activity } = require("../db")


const createActivity = async (name, difficulty, duration, season, countries) => {
    if(!name || !difficulty ||  !season){
        throw new Error("The information is incomplete, please check all the required fields");
    }

    // se crea una nueva activity siguiendo el model definido
    const newAct = await Activity.create({
        name: name,
        difficulty: difficulty,
        duration: duration,
        season: season,
    })

    // await al modelo Country para buscar el nombre del país y agregarselo
    const country = await Country.findAll({ where: { name: countries } });
    console.log(country[0].dataValues.id)
    await newAct.addCountry(country[0].dataValues.id);
    
    return newAct
}

module.exports = {
    createActivity,
}