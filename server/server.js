const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const routes = require('./routes');

const app = express();

app.use(express.urlencoded({extended: true}));

// To parse the incoming requests with JSON payloads
app.use(bodyParser.json({
    limit: '5mb'
}));

app.use(compression());

app.use(cookieParser());

routes.addRoutes(app);


app.listen(3001, () => {
    console.log('Express Server started on PORT:', 3001);
});

process.on('uncaughtException', (error) => {
    console.log('uncaughtException');
    console.log('error', error);
});