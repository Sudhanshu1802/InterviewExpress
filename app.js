const express = require('express')
const path = require('path');
const exphbs = require('express-handlebars')


const app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

const port = 5000;
app.get('/',(req,res)=>{
    res.render('index/');
})
app.listen(port, () => {
  console.log(`Server started on port ${port}`)
});