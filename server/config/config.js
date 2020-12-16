
//*******Puerto******
//devuelve el puerto de nuestro proyecto si está en un servidor externo, cuando no está en entorno de producción toma el puerto local 3005 (en este caso)
process.env.PORT = process.env.PORT || 3005

//========Definir el entorno======

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//===Base de Datos===
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/rolling'
} else {
    urlDB = process.env.MONGO_URI
}

process.env.urlDB = urlDB;
