const express = require('express');
const timeout = require('connect-timeout')
const path = require('path');
const app = express();

const port = process.env.PORT||3000;

app.use(express.static(path.join(__dirname,'build')));
app.use(timeout('10s'));
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'build','index.html'));
});

app.listen(port);