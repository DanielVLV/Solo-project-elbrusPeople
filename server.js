require('@babel/register');
require('dotenv').config();
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const login = require('./src/routes/login.router');
const registration = require('./src/routes/registration.router');
const logout = require('./src/routes/logout');
const userRoom = require('./src/routes/userRoom');
const adminRoom = require('./src/routes/adminRoom');
const errorPage = require('./src/routes/error');

const app = express();
const { PORT, COOKIE_SEKRET } = process.env;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sessionConfig = {
  name: 'Cookie',
  store: new FileStore(),
  secret: COOKIE_SEKRET ?? '123',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10,
    httpOnly: true,
  },
};

app.use(session(sessionConfig));
app.use(express.static(path.resolve('public')));

app.use(morgan('dev'));
app.use(express.static(path.join(process.cwd(), 'public')));

app.get('/login', login);
app.get('/logout', logout);
app.get('/registration', registration);
app.get('/login', login);
app.get('/profile', userRoom);
app.get('/adminRoom', adminRoom);
app.get('/404', errorPage);

app.post('/registration', registration);
app.post('/login', login);
app.post('/profile', userRoom);
app.post('/adminRoom', adminRoom);

const indexRouter = require('./src/routes/home.router');

app.use('/', indexRouter);

app.get('*', (req, res) => { res.redirect('/'); });

app.listen(PORT, () => {
  console.log(`Сервер запущен порт: ${PORT}`);
});
