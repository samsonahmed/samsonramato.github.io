const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use(session({
    resave:false,
    saveUninitialized:false,
    rolling:true,
    cookie:{
        httpOnly:true,
        maxAge:1000*60*60*24
    },
    secret:"sambod secret"
}))
const products = [
    {id: 1, name: 'Laptop', description: "this laptop is 2021 brand, has apple chip processor", price: 1200},
    {id:2,name:'Mobile',description: "brand new 2020 Iphone 11",price:1200},
    {id:3,name:"Televesion",description: "This is 60 inchh tv",price:600},
    { id: 4, name: 'Refrigerator', description: "this Refrigerator consumes less power", price: 500}];

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
    if(req.session[nv]){
        req.session[nv].price +=parseInt(price);
        req.session[nv].quantity +=1;
    }
    else{
    let object={name:nv,price:parseInt(price),quantity:1};
    req.session[nv]=object;
    console.log(req.session['cookie']);
    }
    const cart=req.session;
   res.render("shoppingCart",{data:cart});

});

app.listen(3000, () => {
    console.log("Server started at 3000");
});