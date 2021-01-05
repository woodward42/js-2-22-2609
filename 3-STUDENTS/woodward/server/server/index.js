const express = require('express');
const server = express();

//для возврата JSON подключаем модуль fs - FILESTREAM
const fs = require('fs');

//подключаем JS методы работы с корзиной
const basket = require('./services/basket-service.js')
const write = require('./utils/write.js')

server.use(express.json());
server.listen(3000);

/* server.get('/', (req,res) => {
    res.send('<h1>This is response HTML from server</h1>')
}) */

server.use('/',express.static('./public'))

//запрос на получение товаров каталога с сервера
server.get('/catalog', (req,res) => {
    fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {   //асинхронно через коллбэк
        if (!err){
            res.json(JSON.parse(data));
        }
    })
})

//запрос на получение товаров корзины с сервера
server.get('/basket', (req,res) => {
    fs.readFile('./server/db/basket.json', 'utf-8', (err, data) => {    //асинхронно через коллбэк
        if (!err){
            res.json(JSON.parse(data));
        }
    })
})

//запрос на добавление товаров в корзину (только сеть, никакой записи в файл)
server.post('/basket',(req, res) => {
    let data = JSON.parse(fs.readFileSync('./server/db/basket.json', 'utf-8'));
    let newBasket = basket.add(data, req.body); //req.body - новая корзина

    //ниже возвращается промис
    write('./server/db/basket.json', newBasket)
        .then(status => {
            if (status){
                res.json({status})
            }
            else{
                res.sendStatus(500);
            }
        })
})

//запрос на изменение кол-ва товаров, которые уже в корзине (только сеть, никакой записи в файл)
server.put('/basket/:id',(req, res) => {
    let data = JSON.parse(fs.readFileSync('./server/db/basket.json', 'utf-8'));
    let newBasket = basket.change(data, req.params.id, req.body.amount); //req.body - новая корзина

    //ниже возвращается промис
    write('./server/db/basket.json', newBasket)
        .then(status => {
            if (status){
                res.json({status})
            }
            else{
                res.sendStatus(500);
            }
        })
})

//запрос на удаление товаров из корзины (только сеть, никакой записи в файл)
server.delete('/basket/:id',(req, res) => {  //delete url: '/basket/prod_0'; id = prod_0
    let data = JSON.parse(fs.readFileSync('./server/db/basket.json', 'utf-8'));
    let newBasket = basket.delete(data, req.params.id); //req.body - новая корзина, req.params.id = /basket:id

    //ниже возвращается промис
    write('./server/db/basket.json', newBasket)
        .then(status => {
            if (status){
                res.json({status})
            }
            else{
                res.sendStatus(500);
            }
        })
})
