const express = require ('express');

const app = express();

app.get('/saludo', (req, res)=>{res.send("Surprise MotherFather")})

app.listen(8080, () => console.log("Surprise MotherFather on port 8080"))