const express = require('express');
const app = express();
const PORT = '8080';
const FILE = './data.json';

app.listen(PORT, ()=>{'Server running on port 8080 UwU', PORT});

const ProductManager = require('../classes/productManager');

const catalogue = new ProductManager()
app.get('/products', (req, res)=>{res.send(catalogue.getProducts())});

app.get('/products/:id', (req, res)=>{
    let str = req.params.id;
    let num = parseInt(str);
    res.send(catalogue.getProductsById(num))}
    );

app.get('/products?limit=', (req, res)=>{
    let str = req.params.limit;
    let num = parseInt(str);
    res.send(console.log(num));
})



