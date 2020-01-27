const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/sistemadenoticias', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log('[Mongo]', 'Conectado ;-)');
});

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'hbs');
app.use('/static', express.static('static'));

app.use('/', routes.main);

app.listen(3000, ()=>{
    console.log('Rodando');
});