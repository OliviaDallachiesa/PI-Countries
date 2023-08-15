const { Router } = require("express");

const { getActivitiesHandler } = require("../handlers/getActivitiesHandler")
const { postActivityHandler } = require("../handlers/postActivityHandler")

// Aqui van todas las rutas que sean de /activities
const activitiesRouter = Router();

// GET | /activities
// Obtiene un arreglo de objetos, donde cada objeto es una actividad turística.
activitiesRouter.get("/", getActivitiesHandler)

// POST | /activities
// Esta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados.
// Toda la información debe ser recibida por body.
// Debe crear la actividad turística en la base de datos, y esta debe estar relacionada con los países indicados (al menos uno).
activitiesRouter.post("/", postActivityHandler)

module.exports = activitiesRouter;