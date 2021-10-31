const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use('/js', express.static(path.join(__dirname, 'views', 'js')));
app.use(session({
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24
    },
    secret: "sambod secret"
}))

const products = [
    { id: 1, name: 'Laptop', description: "this laptop is 2021 brand, has apple chip processor", price: 1200 },
    { id: 2, name: 'Mobile', description: "brand new 2020 Iphone 11", price: 1200 },
    { id: 3, name: "Televesion", description: "This is 60 inchh tv", price: 600 },
    { id: 4, name: 'Refrigerator', description: "this Refrigerator consumes less power", price: 500 }];

app.get('/products/:id', (req, res) => {
    const details = products.filter(product => product.id === parseInt(req.params.id));
    res.render('product', { data: { details } });
});

app.get('/', (req, res) => {
    res.render('shop', { data: { products } });
});
app.get('/cart', (req, res) => {
    const cart = req.session;
    res.render("shoppingCart", { data: cart });
})
app.post('/addToCart/:id', (req, res) => {
    const id = req.params.id;
    const product = products.find(p => p.id == id);
    if (req.session[id]) {
        req.session[id].price += product.price;
        req.session[id].quantity += 1;

    }
    else {

        let object = { id: id, name: product.name, price: product.price, quantity: 1 };
        req.session[id] = object;
    }
    const quantity = req.session[id].quantity;
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ quantity }));
    //    res.render("shoppingCart",{data:cart});

});

app.listen(3000, () => {
    console.log("Server started at 3000");
});