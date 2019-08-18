const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();

//SERVIR LE STATIC
app.use(express.static('public'));

//ENGINE HANDLEBARS

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.get('/', (req,res)=>{

    res.render('home');
})


app.listen(8080 , console.log('port au 8080')
)
