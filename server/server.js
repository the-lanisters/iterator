const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/authRoute');
const dbRoute = require('./routes/dbRoute');
const path = require('path');

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser('keyboard_cat'));
app.use(express.static(path.join(__dirname, '/../')));

app.get('/auth', authRoute);
//app.use('/db', dbRoute);

app.get('/', (req, res) => {
  console.log(__dirname);
  return res.sendFile(path.join(__dirname, '/../index.html'));
});

// test route
// app.get('/hello', dbRoute, (req, res) => {
//   console.log('res', res.locals);
//   return res.send('hhiiiiiii');
// });

app.get('*', (req, res) => {
  console.log(__dirname);
  return res.sendFile(path.join(__dirname, '/../index.html'));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
