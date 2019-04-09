const mongoose = require('mongoose')
var Schema = mongoose.Schema;

const listingSchema = new Schema({
  listing_id: String,
  listing_name: String,
  host_picture_url: String,
  host_name: String,
  city: String,
  max_guests: Number,
  type_of_listings: String,
  bedrooms: Number,
  beds: Number,
  baths: Number,
  location_rating: String,
  checkin_rating: String,
  description: String,
  amenities: [{
    kitchen: Boolean,
    iron: Boolean,
    free_parking_on_premise: Boolean,
    wifi: Boolean,
    hangers: Boolean,
    laptop_friendly_workspace: Boolean,
    tv: Boolean,
    self_checkin: Boolean,
    dishes: Boolean,
    dryer: Boolean,
    washer: Boolean,
    essentials: Boolean,
    hairdryer: Boolean,
    shampoo: Boolean,
    carbon_monoxide_detector: Boolean,
    smoke_detector: Boolean,
    first_aid_kit: Boolean,
    air_conditioning: Boolean,
    hot_tub:Boolean,
    fire_extinguisher: Boolean
  }],
  sleeping_arrangements: [String]
})

let Listings = mongoose.model('List', listingSchema); // list is all your documents
// Listings is model of my documents

module.exports = Listings;