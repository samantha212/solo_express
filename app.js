
var express = require('express');
var path = require('path');
var combine = require('./modules/combine');
var jquery = require('jquery');

var app = express();

app.use(express.static('static'));

app.get('/', function(request, response){
    console.log('hello world');
    var thisPath = path.join(__dirname, "/index.html");

    response.sendFile(thisPath);
});

app.get('/balance', function(request, response){
    var kittyFoo = '<p>'+ combine.text + combine.randomDollar() + '</p>';
    response.send(kittyFoo);

});

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log("test");
});
