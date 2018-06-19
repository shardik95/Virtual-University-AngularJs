const express = require('express');

var app = express()
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(process.env.PORT || 4200, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});


