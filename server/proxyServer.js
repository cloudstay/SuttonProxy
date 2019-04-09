const express = require('express');
const bodyParser = require('body-parser');
const request = require("request");
const app = express();


const port = 3000;

app.use('/rooms/', express.static('public'));

// use of body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/rooms/photos/api', (req, response) => {
  request(`http://127.0.0.1:3006/rooms/photos/api/?id=${req.query.id}`, (err, res, body)=> {
    if(err){
      response.status(404);
      response.end()
    }else {
      response.status(200);
      response.end(body)
    }
  });
});

app.get('/rooms/apart/api', (req, response) => {
  console.log(req.query.id);
  request(`http://127.0.0.1:3003/rooms/apart/api/${req.query.id}`, (err, res, body)=> {
    if(err){
      response.status(404);
      response.end()
    }else {
      response.status(200);
      response.end(body)
    }
  });
});
app.get('/rooms/reviews/api', (req, response) => {
  request(`http://127.0.0.1:3004/rooms/reviews/api/?id=${req.query.id}`, (err, res, body)=> {
    if(err){
      response.status(404);
      response.end()
    }else {
      response.status(200);
      response.end(body)
    }
  });
});
app.get('/rooms/reviews/reviews', (req, response) => {
  request(`http://127.0.0.1:3004/rooms/reviews/reviews/?id=${req.query.id}`, (err, res, body)=> {
    if(err){
      response.status(404);
      response.end()
    }else {
      response.status(200);
      response.end(body)
    }
  });
});
app.get('/rooms/info/api/', (req, response) => {
  request(`http://127.0.0.1:3001/rooms/info/api/?id=${req.query.id}`, (err, res, body)=> {
    if(err){
      response.status(404);
      response.end()
    }else {
      response.status(200);
      response.end(body)
    }
  });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Listening on ${port}`);
  });
}


module.exports = app;
