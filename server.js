const express = require('express');
const timeout = require('connect-timeout')
const path = require('path');
const app = express();

app.use(timeout('15s'));

const port = process.env.PORT||3000;

app.use(express.static(path.join(__dirname,'build')));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'build','index.html'));
});

app.listen(port);