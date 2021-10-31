const express = require('express');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.get('/', (req, res) => {
    res.send(' <form action="/result" method="post">'+
    '<p> <span> Name<input type="text" name="name">Age <input type="number" name="age"> <button type="submit">Submit Query</button></span></p></form>');
});
app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    res.send(`Welcome ${name} your age is ${age}`);
});
app.listen(3000, () => {
    console.log(`Server started on port`);
});