const express = require('express');
const path = require('path');
const app = express();
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.get('/', (req, res) => {
    const date=new Date();
    const hour=date.getHours();
    console.log(hour);
    let file = "";
    if(hour<=12){
        file="day.css";
    }
    else{
        file="night.css";
    }
    res.send(`<!DOCTYPE html>` + `<html lang="en">` +
        `<head>` + ` <meta charset="UTF-8">` + `    <meta http-equiv="X-UA-Compatible" content="IE=edge">` +
        `<meta name="viewport" content="width=device-width, initial-scale=1.0">` +
        `<title>Document</title> <link rel="stylesheet" href="css/${file}"> </head>` +
        `<body>  <form action="/result" method="post">` +
        `<p><span>
            Name<input type="text" name="name">
            Age <input type="number" name="age">
            <button type="submit">Submit Query</button> </span></p></form></body></html>`
    
    );
});
app.get('/output', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;
    console.log(`${name} ${age}`);
    res.send(`Welcome ${name} your age is ${age}`);
});
app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    res.redirect(303,`/output?name=${name}&age=${age}`);
});

app.listen(3000, () => {
    console.log(`Server started on port`);
});