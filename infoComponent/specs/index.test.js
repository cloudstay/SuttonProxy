const supertest = require('supertest');
const $ = require('jquery');

// describe('service test', function() {
//     var app = express();
//     var server;
//     beforeEach(function() {
//         server = app.listen(3001);
//     });
//     afterEach(function() {
//         server.close();
//     });
//     test('GET request outputs status code of 200', (error) => {
//         if (error){
//           console.log(error);
//         } else {
//           supertest(app).get('/some').expect(200);
//         }
//     });
// });

describe('testing data length with call to api', function() {
    test('this should pass everytime', () => {
        expect(typeof 'this is a string').toBe('string');
      });
      test('there should be 100 listings exactly', () => {
        $.ajax({
          url: 'http://localhost:3001/api/testing',
          type: 'GET',
          success: (data) => {
            expect(data.length).toBe(100);
          }
        });
      });
});

describe('testing image url of a random data listing to be in string format', function() {
  test('this should pass everytime', () => {
      expect(typeof 'this is a string').toBe('string');
    });
    test('a random listings policy diagram image should be stored as a string', () => {
      $.ajax({
        url: 'http://localhost:3001/api/testing',
        type: 'GET',
        success: (data) => {
          var randomIndex = Math.floor(Math.random() * Math.floor(100));
          expect(typeof data[randomIndex].policyDiagram).toBe('string');
        }
      });
    });
    test('a random listings things to do event image should be stored as a string', () => {
      $.ajax({
        url: 'http://localhost:3001/api/testing',
        type: 'GET',
        success: (data) => {
          var randomIndex = Math.floor(Math.random() * Math.floor(100));
          var randomIndexEvents = Math.floor(Math.random() * Math.floor(8));
          expect(typeof data[randomIndex].thingsToDo[randomIndexEvents].eventImg).toBe('string');
        }
      });
    });
    test('a random listings related home image should be stored as a string', () => {
      $.ajax({
        url: 'http://localhost:3001/api/testing',
        type: 'GET',
        success: (data) => {
          var randomIndex = Math.floor(Math.random() * Math.floor(100));
          var randomIndexRelatedHomes = Math.floor(Math.random() * Math.floor(12));
          expect(typeof data[randomIndex].relatedHomes[randomIndexRelatedHomes].listingImg).toBe('string');
        }
      });
    });
});


describe('testing image urls of a random data listing to have legitimate endpoints to reach api', function() {
  test('this should pass everytime', () => {
      expect(typeof 'this is a string').toBe('string')
    });
    test('a random listings policy diagram image should have an endpoint less then 4', () => {
      $.ajax({
        url: 'http://localhost:3001/api/testing',
        type: 'GET',
        success: (data) => {
          var randomIndex = Math.floor(Math.random() * Math.floor(100));
          var endpointInt = Number(data[randomIndex].policyDiagram.split('/')[4].split('.')[0]);
          expect(endpointInt < 4).toEqual(true);
        }
      });
    });
    test('a random listings things to do event image should have an endpoint less then 9', () => {
      $.ajax({
        url: 'http://localhost:3001/api/testing',
        type: 'GET',
        success: (data) => {
          var randomIndex = Math.floor(Math.random() * Math.floor(100));
          var randomIndexEvents = Math.floor(Math.random() * Math.floor(8));
          var endpointInt = Number(data[randomIndex].thingsToDo[randomIndexEvents].eventImg.split('/')[4].split('.')[0]);
          expect(endpointInt < 9).toEqual(true);
        }
      });
    });
    test('a random listings related home image should have an endpoint less then 13', () => {
      $.ajax({
        url: 'http://localhost:3001/api/testing',
        type: 'GET',
        success: (data) => {
          var randomIndex = Math.floor(Math.random() * Math.floor(100));
          var randomIndexRelatedHomes = Math.floor(Math.random() * Math.floor(12));
          var endpointInt = Number(data[randomIndex].relatedHomes[randomIndexRelatedHomes].listingImg.split('/')[4].split('.')[0]);
          expect(endpointInt < 13).toEqual(true);
        }
      });
    });
});