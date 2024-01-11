/* INICIAR EXPRESS */

require('dotenv').config();
console.log(process.env);



const express = require('express');

const connectMongo= require("./utils/db");

connectMongo();

const app = express();
 


/* ROUTES */
const movieRouter = require("./");

app.use("api/movies", movieRouter);



app.get('/', (request, response) => {
    response.status(200).json({
        message: 'Welcome to server',
        app: 'My App'
    });
});
 
/* DEFINIR EL PUERTO E INICIAR LA ESCUCHA */

app.listen(process.env.PORT, () => {
    console.log(`app running in port ${process.env.PORT}`)
});