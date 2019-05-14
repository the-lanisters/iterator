const app = require('express')();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/authRoute');

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser('keyboard_cat'));

app.use('/auth', authRoute);

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
