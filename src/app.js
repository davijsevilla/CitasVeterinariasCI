const express = require ('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myconnection = require('express-myconnection');
const router = require('./routes/routes');
require('dotenv').config();
const db = require('./config');
const initDbController = require('./controllers/initDbControllers');
require('./controllers/initDbControllers')
const app = express();


// settings
app.set('port', db.NODE_DOCKER_PORT || db.NODE_LOCAL_PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares antes de enviar la informacion?¿
app.use(morgan('dev'));
app.use(myconnection(mysql, {
    host: db.DB_HOST || 'localhost',
    user: db.DB_USER || 'root',
    password: db.DB_PASSWORD || '',
    port: db.DB_PORT || 3306,
    database: db.DB_NAME || 'citasvet'
}, 'single'));
app.use(express.urlencoded({extended: false}));
app.use(initDbController.run);
// Routes rutas
app.use('/', router)

app.use(express.static(path.join(__dirname, 'public')));
//inicia el servidor 
app.listen(app.get('port'), () => {
    console.log('corriendo.... '+ process.env.NODE_LOCAL_PORT);
});