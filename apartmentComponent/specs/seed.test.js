const Listings = require('../database/schema.js')

describe('whether the database is seeded', function() {
  test('Should return result to be true', function() {
      Listings.find().exec(function(err, result) {
          if(err) {
              done(err);
          }
          expect(result).toBeTruthy();
      });
  });
});

describe('the data type of Listings Schema', function() {
  test('Should identify Listings Schema as an object', function() {
      expect(typeof new Listings).toBe('object');
      });
});
