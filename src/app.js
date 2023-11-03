//Tercer desafio
const express = require('express');
const app = express();
const PORT = '8080';
const FILE = "./data.json";

const ProductManager = require('../classes/productManager');

const catalogue = new ProductManager(FILE);
app.get('/products', async(req, res)=>{
    let limit = req.query.limit;
    let num = parseInt(limit);
    let items = [];
    
    try{
    if(num > 0 && num <=10){
        for(let i = 1; i < num + 1; i++){
            items.push(await catalogue.getProductsById(i));
        }
    }else if (num <= 0 || num > 10)
        {
        items = "Not a valid limit!";
    }else{
        items = await catalogue.getProducts(FILE);
        
    }

    res.send(items);
}catch(error){
    console.error("The database couldn't be read", error);
}
}

);

app.get('/products/:pid', async (req, res)=>{
    try{
    let str = req.params.pid;
    let num = parseInt(str);
    res.send(catalogue.getProductsById(num))}catch (error){
        console.error("The database couldn't be read", error);
    }
}
    );

    app.listen(PORT, ()=>{
        console.log(`The server is running in port ${PORT}`);
});
