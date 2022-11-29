const express = require('express');
const app = express();
const cors = require('cors');

app.set('port',process.env.PORT ||4000);

app.use(cors());
app.use(express.json());

// Paginas
app.use('/api/users',require('./routes/users'));
app.get('/api/notes',(req,res)=> res.send('notes Routes'));


module.exports= app;