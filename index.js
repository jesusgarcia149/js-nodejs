/*
//1.- Matematicas
const math = require('./math.js');
console.log('Matematicas');
console.log('suma ' + math.add(9,3));
console.log('resta ' + math.substract(14,6));
console.log('multiplicacion ' + math.multiply(4,6));
console.log('division ' + math.divide(55,5));
console.log('');
*/

/*
//2- Servidor 1
console.log('Servidor');
const http = require('http');
http.createServer(function(req,res){
    res.write('<h1>Hola Mundo desde Nodejs</h1>');
    res.end();
}).listen(3000);
*/

//3.- Servidor 2
/*
const http = require('http');

const handleServer = function(req,res){
    res.writeHead(404, {'Content-type': 'text/html'});
    res.write('<h1>Hola Mundo</h1>');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function(){
    console.log('Server on Port 3000');
});
*/

//4.- Servidor con Express
//iniciamos npm (npm init --y)
//instalamos exporess (npm install express)
//si no agrega la dependencia express al package.js ((npm install express --save)
const express = require('express');
const server = express();
server.get('/', function(req,res){
    res.send('<h1>Hola mundo con Express y Nodejs</h1>');
    res.end();
});
server.listen(3000, function(){
    console.log('Server on Port 3000');
});

//para instalar las dependencias (npm install)
//para correr el servidor (npm run dev)