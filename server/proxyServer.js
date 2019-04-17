const express = require('express');
const bodyParser = require('body-parser');
const request = require("request");
const app = express();


const port = 3000;

app.use('/rooms/:id', express.static('public'));

// use of body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/api/rooms/:id/photos', (req, response) => {
  request(`http://piccont:3006/api/rooms/${req.params.id}/photos`, (err, res, body)=> {
    if(err){
      response.status(404);
      response.end()
    }else {
      response.status(200);
      response.end(body)
    }
  });
});

app.get('/api/rooms/:id/apart/', (req, response) => {
  request(`http://listings:3003/api/rooms/${req.params.id}/listing`, (err, res, body)=> {
    if(err){
      response.status(404);
      response.end()
    }else {
      response.status(200);
      response.end(body)
    }
  });
});
app.get('/api/rooms/:id/reviews/', (req, response) => {
  request(`http://review:3004/api/rooms/${req.params.id}/reviews`, (err, res, body)=> {
    if(err){
      response.status(404);
      response.end()
    }else {
      response.status(200);
      response.end(body)
    }
  });
});
app.get('/api/rooms/:id/searchReviews', (req, response) => {
  request(`http://review:3004/api/rooms/${req.params.id}/searchReviews`, (err, res, body)=> {
    if(err){
      response.status(404);
      response.end()
    }else {
      response.status(200);
      response.end(body)
    }
  });
});
app.get(`/api/rooms/:id/info`, (req, response) => {
  request(`http://info:3001/api/rooms/${req.params.id}/info`, (err, res, body)=> {
    if(err){
      response.status(404);
      response.end()
    }else {
      response.status(200);
      response.end(body)
    }
  });
});
app.get(`/api/bookings/:room_id`, (req, response) => {
  request(`http://info:3001/api/rooms/${req.params.id}/info`, (err, res, body)=> {
    if(err){
      response.status(404);
      response.end()
    }else {
      response.status(200);
      response.end(body)
    }
  });
});
app.get(`/api/bookings/:room_id`, (req, response) => {
  request(`http://bookings:3007/api/bookings/${req.params.id}`, (err, res, body)=> {
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
