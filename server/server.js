const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

// zaimportowane pliki routów
const loginRouter = require('./routes/auth/login');
const signupRouter = require('./routes/auth/signup');
const verifyRouter = require('./routes/auth/verify');
const forgotPasswordRouter = require('./routes/auth/forgotPassword');
const resetPasswordRouter = require('./routes/auth/resetPassword');
const loggedUserRouter = require('./routes/user/loggedUser');

dotenv.config();

const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true)
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true}, { useFindAndModify: false });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(
   path.join(__dirname, 'public')
));

// Używanie tych routów
app.use(loginRouter);
app.use(signupRouter);
app.use(verifyRouter);
app.use(forgotPasswordRouter);
app.use(resetPasswordRouter);
app.use(loggedUserRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));