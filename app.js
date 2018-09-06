var express = require('express');
var appcontroller = require('./controller/appcontroller');

var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

appcontroller(app);

app.listen(3000);
console.log('listening on port 3000');