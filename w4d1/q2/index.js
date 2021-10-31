const express = require('express');
const path = require('path');
const app = express();
const session=require('express-session');
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
// app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:"samson code"
}))

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
    res.render("index",{file:file});
});
app.get('/output', (req, res) => {
    let name = req.session['name'];
    let age = req.session['age'];
    console.log(`${name} ${age}`);
    res.send(`Welcome ${name} your age is ${age}`);
});
app.post('/result', (req, res) => {
    req.session['name']=req.body.name;
    req.session['age']=req.body.age;
    res.redirect(303,'/output');
});

app.listen(3000, () => {
    console.log(`Server started on port`);
});