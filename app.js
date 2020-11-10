var cookieParser = require('cookie-parser')

app.use(cookieParser())

app.get('/', function(req, res) {
  console.log('Cookies: ', req.cookies)
})

app.get('/', function(req, res) {
    var opts = {
      maxAge: 900000,
      httpOnly: true
    };
    res.cookie('some_name', 'some_value', opts);
    res.end();
  })
  
  res.cookie('some_json', { foo: 'bar', bazz: 'buzz'});

  res.clearCookie('name', { path: '/somepath' });