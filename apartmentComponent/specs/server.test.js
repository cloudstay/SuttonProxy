const request = require('supertest');
const express = require('express');

describe('Test the root path', function() {
  var app = express();
  var server;

  beforeAll(function() {
      server = app.listen(4003);
  });

  afterAll(function() {
      server.close();
  });

  test('Should return status code of 200', (done) => {
      let params = 150;
      request(server).get(`/rooms/api/${params}`).expect(200);
      done();
  });

  test('Should return status code of 404', (done) => {
      let params = 250;
      request(server).get(`/rooms/api/${params}`).expect(404);
      done();
  });
});
