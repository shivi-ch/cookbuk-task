var express = require('express');
var appcontroller = require('./controller/appcontroller');

const port = process.env.PORT || 3000;

var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

appcontroller(app);

app.listen(port);
console.log('listening on port 3000');