const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
// Database
const db = require('./config/db');

// Test db
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error' + err));

const app = express();

// handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => res.render('index', {layout : 'landing'})); // Render renvoie une view
app.use('/accueil', require('./routes/accueil')); // Require renvoie une route

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port : ${PORT}`));
