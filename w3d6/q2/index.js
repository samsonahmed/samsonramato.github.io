const express = require('express');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.get('/', (req, res) => {
    res.render('form.ejs');
});
app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    res.render("result.ejs",{name:name, age:age});
});
app.listen(3000, () => {
    console.log(`Server started on port`);
});