var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var sassMiddleware = require('node-sass-middleware');
 
var app = express();
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 
app.use(sassMiddleware({
    src: path.join(__dirname, 'scss'),
    dest: path.join(__dirname, 'public/css/'),
    debug: true,
    outputStyle: 'compressed',
    prefix: '/css'
}));

app.get('/', function (req, res) {
 
    const items = [
        {
            title: "Геоинформационные системы", 
            description: "Мы реализовали ряд проектов разной направленности - порталы для граждан, ведомственные информационные системы для различных отраслей.",
            button: "open project",
            url: "https://bk.asia-city.com/restaurants/news/ice-cream-shops-bangkok",
            img: "/"
        },
        {
            title: "game app shop", 
            description: "game app shop. game app shop. game app shop. game app shop.",
            button: "play game",
            url: "https://www.androidauthority.com/best-game-apps-android-885955/",
            img: "/img/game-app.jpg"
        },
        {
            title: "game app shop", 
            description: "game app shop. game app shop. game app shop. game app shop.",
            button: "play game",
            url: "https://www.androidauthority.com/best-game-apps-android-885955/",
            img: "/img/game-app.jpg"
        }
    ]


    res.render('home', {
        title:"Главная", 
        items: items
    });
});
 
app.get('/team', function (req, res) {
    res.render('team', {
        title:"Команда"
    });
});
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);