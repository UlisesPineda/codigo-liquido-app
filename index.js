const express = require('express');
require('dotenv').config();

const { router } = require('./router/router.js');

const app = express();
const port = process.env.PORT

app.use(express.static('public'));
app.set('view engine', 'pug');
app.use( router );

app.listen( port, () => {
    console.log(`App corriendo en el puerto ${ port }`);
} );