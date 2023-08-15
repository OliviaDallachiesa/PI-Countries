const { Router } = require("express");

const { getCountriesHandler } = require("../handlers/getCountriesHandler")
const { getCountriesByIdHandler } = require("../handlers/getCountryByIdHandler")


// Aqui van todas las rutas que sean de /countries
const countriesRouter = Router();


// GET | /countries
// Obtiene un arreglo de objetos, donde cada objeto es un país con toda su información.
// y GET | /countries/name?="..." | debe obtener todos aquellos países que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
// Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// Si no existe el país, debe mostrar un mensaje adecuado.
countriesRouter.get("/", getCountriesHandler)

// GET | /countries/:idPais
// Esta ruta obtiene el detalle de un país específico. Es decir que devuelve un objeto con la información pedida en el detalle de un país.
// El país es recibido por parámetro (ID de tres letras del país).
// Tiene que incluir los datos de las actividades turísticas asociadas a este país.
countriesRouter.get("/:id", getCountriesByIdHandler)

module.exports = countriesRouter;