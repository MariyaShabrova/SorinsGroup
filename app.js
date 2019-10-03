var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var cookieParser = require('cookie-parser')
var bodyParser = require("body-parser");
var nodemailer = require('nodemailer');
var config = require("./config");
if(config.mode=="local") {
    var sassMiddleware = require('node-sass-middleware');
}
 
var app = express();
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended: true}));

// cookie//

app.use(cookieParser());

if (typeof sassMiddleware !== 'undefined' && config.mode=="local") {
app.use(sassMiddleware({
    src: path.join(__dirname, 'scss'),
    dest: path.join(__dirname, 'public/css/'),
    debug: true,
    outputStyle: 'compressed',
    prefix: '/css'
}));
}
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
        items: items,
        rus: req.cookies.lang == 'rus',
        eng: req.cookies.lang == 'eng'
    });
});
 

app.get('/lang/:language', function (req, res){
 res.cookie('lang', req.params.language);
 var backURL=req.header('Referer') || '/';
  // do your thang
  res.redirect(backURL);
 

})
app.get('/politics', function (req, res) {
    console.log(req.cookies)
    res.render('politics', {
        title:"Политика обработки данных",
        rus: req.cookies.lang == 'rus',
        eng: req.cookies.lang == 'eng'
    });

});

app.get('/personal', function (req, res) {
    console.log(req.cookies)
    res.render('personal', {
        title:"согласие обработки данных",
        rus: req.cookies.lang == 'rus',
        eng: req.cookies.lang == 'eng'
    });

});


app.get('/company', function (req, res) {
    console.log(req.cookies)
    res.render('company', {
        title:"О компании",
        rus: req.cookies.lang == 'rus',
        eng: req.cookies.lang == 'eng'
    });

});

app.get('/team', function (req, res) {
    console.log(req.cookies)
    res.render('team', {
        title:"Услуги",
        rus: req.cookies.lang == 'rus',
        eng: req.cookies.lang == 'eng'
    });

});

app.get('/jobs', function (req, res) {
    console.log(req.cookies)
    res.render('jobs', {
        title:"Вакансии",
        rus: req.cookies.lang == 'rus',
        eng: req.cookies.lang == 'eng'
    });

});

app.get('/portfolio', function (req, res) {
    console.log(req.cookies)
    res.render('portfolio', {
        title:"Портфолио",
        rus: req.cookies.lang == 'rus',
        eng: req.cookies.lang == 'eng'
    });

});

app.get('/contact', function (req, res) {
    console.log(req.cookies)
    res.render('contact', {
        title:"Контакты",
        rus: req.cookies.lang == 'rus',
        eng: req.cookies.lang == 'eng'
    });

});

app.post('/mail', function (req, res) {
    console.log(req.body)
    var subject =req.body.subject;
    var transporter = nodemailer.createTransport({
        host: 'smtp.mail.ru',
        port: 465,
        auth: {
          user: config.user,
          pass: config.pass
        }
      });
      
      var mailOptions = {
        from: config.user,
        to: '5107724@gmail.com',
        subject: subject,
        text: req.body.message+" phone:"+req.body.telephone
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            res.send(error);
        } else {
            res.send('ok');
        }
      });
});



const port=3000; //(config.mode=="local") ? 3000 :80;
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port);