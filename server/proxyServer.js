const express = require('express');
const bodyParser = require('body-parser');
const request = require("request");
const app = express();


const port = 3000;

// app set at localhost:3006/rooms?id=XXX
app.use('/rooms/', express.static('public'));

// use of body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/rooms/api', (req, response) => {
  request(`http://127.0.0.1:3006/rooms/api/?id=${req.query.id}`, (err, res, body1)=> {
    if(err){
      response.status(404);
      response.end()
    }else {
      request(`http://127.0.0.1:3003/rooms/api/${req.query.id}`, (err, res, body)=> {
      if(err){
        response.status(404);
        response.end()
      }else {
        response.status(200);
        response.end(JSON.stringify([body,body1]));
      }
  })
    }
  })

  
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Listening on ${port}`);
  });
}


module.exports = app;
