require('./config/config');
//todas las importaciones 'required' deben ir al comienzo del archivo
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(require('./rutas/usuario'))


//Creamos conexión con MongDB
mongoose.connect(
    process.env.urlDB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }, (err, res) => {
        if (err) throw err;
        console.log('Base de datos online')
    });

app.listen(process.env.PORT, () => {
    console.log("Genial! estamos online:", process.env.PORT);
});