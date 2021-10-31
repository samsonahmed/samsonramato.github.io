const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.use(express.json());
app.use('/js', express.static(path.join(__dirname, 'views', 'js')));

const list=[ "It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes",
"Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
"Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it",
"My reply is no", "My sources say no", "Outlook not so good", "Very doubtful" ]

app.get('/', function(req, res) {
    res.render("form");
})
app.post('/8ball', (req, res) => {
    let rand=Math.ceil(Math.random()*list.length);
    let result=list[rand];
    res.status(200);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({answer: result}));
});
app.listen(3000, () => {
    console.log(`Server started on 3000`);
});