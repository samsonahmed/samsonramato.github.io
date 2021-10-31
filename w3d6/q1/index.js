const express = require('express'); 
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, "view"));
app.get('/', (req, res) => {
 let style="";
 
 const date = new Date();
 let hr=date.getHours();
 if(hr>=6 && hr<=18){
     style="day.css";
 }
 else{
     style="night.css";
 }
 res.render("index", {
 time: date.toTimeString(),
 style: style,
 });
});
app.listen(3000);