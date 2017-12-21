const express = require('express');
const hbs = require('hbs');

var app = express();
var port = 3000;

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine' , 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express</h1>');
    // res.send({
    //     name: 'Mike',
    //     likes: [
    //         'Beer',
    //         'Travel'
    //     ]
    // });
    res.render('home.hbs', {
        pageTitle: 'Hello Mike Home',
        currentYear: new Date().getFullYear(),
        welcomeMessage: 'Injected Welcome'
    });
});

app.get('/about', (req,res) => {
    res.render('about.hbs', {
        pageTitle: 'Hello Mike About',
        currentYear: new Date().getFullYear()
    });
    
});

app.get('/bad', (req,res) => {
    res.send({
        errorMessage: 'Page Error',
        errorCode: 99
    });
});

app.listen(port);

console.log(`Listening on ${port}`)
