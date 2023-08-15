const axios = require("axios");
const server = require("./src/server");
const { conn, Country } = require('./src/db.js');
const getApiCountries = require('./src/controllers/getApiCountries')
const PORT = 3001;

conn.sync({ force: false }).then(async () => {
  const dbCountries = await Country.findAll()
  if(!dbCountries.length){
    getApiCountries()
  }

  server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);  
})


}).catch(error => console.error(error))
  