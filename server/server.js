const dotenv = require('dotenv');
dotenv.config();
const data_controller = require('./data_controller.js');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');

const app = express();

app.use( bodyParser.json());
app.use( cors());
app.use( express.static( `${__dirname}/../build` ) ); //putting front end and back end together with some minification

const connectionString = process.env.CONNECTIONSTRING;
massive (connectionString).then( dbInstance => {
  
    app.set('db', dbInstance)
}).catch(err => console.log(err))

app.get('/api/getOne', data_controller.getOne);
app.get('/api/getGerman', data_controller.getGerman);
app.get('/api/getForeignresults', data_controller.getForeignkey);

const path = require('path') //setting a backup after it checks for endpoints that returns the react application
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

const port = 3001;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );