const data_controller = require('./data_controller.js');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');

const app = express();

app.use( bodyParser.json());
app.use( cors());

const connectionString = "postgres://aksoxces:TAI5-mDa-FRtuhwddHyN8OtEA0TVZwbP@elmer.db.elephantsql.com:5432/aksoxces";
massive (connectionString).then( dbInstance => {
  
    app.set('db', dbInstance)
}).catch(err => console.log(err))

app.get('/api/getOne', data_controller.getOne);
app.get('/api/getGerman', data_controller.getGerman);
app.get('/api/getForeignresults', data_controller.getForeignkey);


const port = 3001;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );