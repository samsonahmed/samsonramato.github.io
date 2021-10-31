const express = require('express');
const app = express();
const path = require('path');
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
const products = [
    { id: 1, name: 'Laptop', description: "this is laptop", price: 1200},
    { id: 3, name: 'Refrigerator', description: "this is refrigrator", price: 500}];

const shopCart={};
app.get('/products/:id', (req, res) => {
    const details=products.filter(product =>product.id === parseInt(req.params.id));
    res.render('product', {data: {details}});
});

app.get('/', (req, res) => {
    res.render('shop', {data: { products }});
});

app.post('/addToCart', (req, res) => {
    let nv=req.body.name;
    let price=req.body.price
    if(shopCart.hasOwnProperty(nv)){
        shopCart[`${nv}`].price +=parseInt(price);
        shopCart[`${nv}`].quantity +=1;
    }
    else{
    let object={name:nv,price:parseInt(price),quantity:1};
    shopCart[nv]=object;
    }
   res.render("shoppingCart",{data:shopCart});

});

app.listen(3000, () => {
    console.log("Server started at 3000");
});