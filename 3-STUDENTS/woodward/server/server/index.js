const express = require('express');
const server = express();

//для возврата JSON подключаем модуль fs - FILESTREAM
const fs = require('fs');

server.use(express.json());
server.listen(3000);

/* server.get('/', (req,res) => {
    res.send('<h1>This is response HTML from server</h1>')
}) */

server.use('/',express.static('./public'))

server.get('/catalog', (req,res) => {
    fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
        if (!err){
            res.json(JSON.parse(data));
        }
    })
})

server.get('/basket', (req,res) => {
    fs.readFile('./server/db/basket.json', 'utf-8', (err, data) => {
        if (!err){
            res.json(JSON.parse(data));
        }
    })
})