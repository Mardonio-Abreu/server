// class that manages a set of products product manager.

const fs = require('fs');

class ProductManager  {

    constructor(file){

        this.path = file;
        //this.createFile();
        
    }
    
    createFile(){
            
        const catalogue = [];
        const jsonData = JSON.stringify(catalogue, null, 2);
        fs.writeFileSync(this.path, jsonData);
        
    }      
           
    getCatalogue(){
            
            if(fs.existsSync(this.path)){
                let catalogueJSON = fs.readFileSync(this.path, 'utf-8');
                let catalogue = JSON.parse(catalogueJSON);
                return catalogue;
            }else{
                console.log("File not found!");
    }}
    
    addProduct (title, description, price, thumbnail, code, stock) {

        
        try { if(title.length == 0 || description.length == 0 || price.length == 0 || thumbnail.length == 0 || code.length == 0 || stock.length == 0){console.log("Surprise MotherFather!");}
            }

        catch (e) {
            console.error("Data product incomplete!");
            return;
                       
        }

        let flag = true;

        let catalogue = this.getCatalogue(this.path);

        catalogue.map((product)=>{
            if (product.code === code){
                flag = false;
                console.log("Code already in use!");
            }
        })

        if (flag){
        
        let id;

        try {id = catalogue.slice(-1)[0].id;}

        catch(error){
            id = 0;
        }finally{id++}
       


        catalogue.push({title, description, price, thumbnail, code, stock, id})
        const jsonData = JSON.stringify(catalogue, null, 2);
        fs.writeFileSync(this.path, jsonData);
        console.log("File updated successfully!")
        }
                
    }                          
        
    getProducts(){
            let catalogue = this.getCatalogue(this.path);
            return catalogue;
    }

    getProductsById(id){
            

            let catalogue = this.getCatalogue(this.path); 
            
            let flag = false;

            let item;

            catalogue.map((product)=>{
                                             
                if(product.id === id){
                    flag = true;
                    item = product;
                    }
                
            }
            )

            if(!flag){
                        item = "Product not found!";
            }

            return item;
            
    }

    deleteProduct (id){
            
        
            let catalogue = this.getCatalogue(this.path); 
        
            const index = catalogue.findIndex(product => product.id === id);

            if (index !== -1){
                let newCatalogue = [...catalogue.slice(0, index), ...catalogue.slice(index + 1)];
                const jsonData = JSON.stringify(newCatalogue, null, 2);
                fs.writeFileSync(this.path, jsonData);
                console.log("Product erased!");
            }else{
                console.log("product not found!");
            }
       
    }

    updateProduct(id, field, fieldValue){
            
            let catalogue = this.getCatalogue(this.path);
            const index = catalogue.findIndex(product => product.id === id);
            if(index !== -1){
                                            
                catalogue[index][field] = fieldValue;
                const jsonData = JSON.stringify(catalogue, null, 2);
                fs.writeFileSync(this.path, jsonData);
                console.log("Product updated!");

            }else{
                console.log("Product not found!");
            }

    }

}
  module.exports = ProductManager;


        



    





