const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.render("index.ejs",{data:req.cookies});
})

app.post('/', (req, res) => {
    res.cookie(req.body.key, req.body.value);
    res.redirect(303,'/');
});

app.listen(3000, () => {
    console.log(`Server started on 3000`);
});