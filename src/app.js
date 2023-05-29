const express = require('express');
const app = express();
const PORT = '8080';
const FILE = './data.json';

app.listen(PORT, ()=>{'Server running on port 8080 UwU', PORT});

const ProductManager = require('../classes/productManager');

const catalogue = new ProductManager()
app.get('/products', (req, res)=>{
    let limit = req.query.limit;
    let num = parseInt(limit);
    let items = [];
    
    if(num > 0 && num <=10){
        for(let i = 1; i < num + 1; i++){
            items.push(catalogue.getProductsById(i));
        }
    }else if (num <= 0 || num > 10)
        {
        items = "Not a valid limit!";
    }else{
        items = catalogue.getProducts();
        
    }

    res.send(items);

});

app.get('/products/:id', (req, res)=>{
    let str = req.params.id;
    let num = parseInt(str);
    res.send(catalogue.getProductsById(num))}
    );




