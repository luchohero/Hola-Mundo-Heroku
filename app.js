var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.render('Hola Mundo');
});

app.listen(app.get('port'), function() {
  console.log('Node corre en el puerto ', app.get('port'));
});
