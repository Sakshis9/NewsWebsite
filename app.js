const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/img', express.static(__dirname + '/public/img'));
app.use('/js', express.static(__dirname + '/public/js'));

app.set('views', __dirname + '/src/views');
app.set('view engine', 'ejs');

const newsRouter = require('./src/routes/news');

// Use the newsRouter for all requests to the root path
app.use('/', newsRouter);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
