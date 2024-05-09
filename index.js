const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const expressHbs = require('express-handlebars');

app.use(express.static(__dirname + '/html'));

app.engine('hbs', expressHbs.engine({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    extname: 'hbs',
    defaultLayout: 'layout'
}));

app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.render('index', { title: 'Jeopardize Contest' }));
app.use('/task1', require('./routes/task1Route'));
app.use('/task2', require('./routes/task2Route'));
app.use('/task3', require('./routes/task3Route'));
app.use('/task4', require('./routes/task4Route'));

app.listen(port, () => console.log(`Example app listening on port ${port}`));