const express = require('express');
const app = express();

const ProductManager = require('../classes/productManager');

const catalogue = new ProductManager();

catalogue.addProduct("Smurf mug", "blue mug", 3.50, "img/smurf-mug.jpeg", "bsm", 12);
catalogue.addProduct("Gandalf mug", "grey mug", 3.50, "img/gandalf-mug.jpeg", "ggm", 12);
catalogue.addProduct("Canary mug", "yellow mug", 3.50, "img/canary-mug.jpeg", "ycm", 12);
catalogue.addProduct("Goblin mug", "green mug", 3.50, "img/goblin-mug.jpeg", "grgm", 12);
catalogue.addProduct("Black cat mug", "black mug", 3.50, "img/black-cat-mug.jpeg", "bcm", 12);
catalogue.addProduct("Ghost mug", "white mug", 3.50, "img/ghost-mug.jpeg", "wgm", 12);
catalogue.addProduct("Pink panther mug", "pink mug", 3.50, "img/pink-panther-mug.jpeg", "ppm", 12);
catalogue.addProduct("Black panther mug", "black panther mug", 3.50, "img/black-panter-mug.jpeg", "bbm", 12);
catalogue.addProduct("Tree mug", "brown mug", 3.50, "img/tree-mug.jpeg", "btm", 12);
catalogue.addProduct("Red hood mug", "red mug", 3.50, "img/red-hood-mug.jpeg", "rhm", 12);

app.get('/products', (req, res)=>{res.send(catalogue.getProducts())});

app.get('/surprise', (req, res)=>{res.send("Surprise MotherFather")});




