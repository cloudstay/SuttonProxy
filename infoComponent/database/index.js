var mongoose = require('mongoose');
var faker = require('faker');

var mongoDB = 'mongodb://localhost/listings';
mongoose.connect(mongoDB, { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Schema = mongoose.Schema;

var infoSchema = new Schema({
  listing_id: Number,
  hostName: String,
  hostImage: String,
  city: String,
  memberSince: String,
  numOfReviews: Number,
  isVerified: Boolean,
  languages: String,
  responseTime: String,
  responseRate: Number,
  hostInfo: String,
  neighborhoodInfo: String,
  selfCheckIn: Boolean,
  checkInTime: String,
  smoking: Boolean,
  parties: Boolean,
  pets: Boolean,
  securityDeposit: Boolean,
  depositAmount: Number,
  policyDiagram: String,
  thingsToDo: [{
    eventImg: String,
    eventCategory: String,
    eventName: String,
    price: Number,
    ratingAvg: Number,
    numOfRatings: Number
  }, {
    eventImg: String,
    eventCategory: String,
    eventName: String,
    price: Number,
    ratingAvg: Number,
    numOfRatings: Number
  }, {
    eventImg: String,
    eventCategory: String,
    eventName: String,
    price: Number,
    ratingAvg: Number,
    numOfRatings: Number
  }, {
    eventImg: String,
    eventCategory: String,
    eventName: String,
    price: Number,
    ratingAvg: Number,
    numOfRatings: Number
  }, {
    eventImg: String,
    eventCategory: String,
    eventName: String,
    price: Number,
    ratingAvg: Number,
    numOfRatings: Number
  }, {
    eventImg: String,
    eventCategory: String,
    eventName: String,
    price: Number,
    ratingAvg: Number,
    numOfRatings: Number
  }, {
    eventImg: String,
    eventCategory: String,
    eventName: String,
    price: Number,
    ratingAvg: Number,
    numOfRatings: Number
  }],
  relatedHomes: [{
    listingId: Number,
    listingImg: String,
    roomArrangement: String,
    listingTitle: String,
    nightlyPrice: Number,
    reviewAvg: Number,
    numOfReviews: Number
  }, {
    listingId: Number,
    listingImg: String,
    roomArrangement: String,
    listingTitle: String,
    nightlyPrice: Number,
    reviewAvg: Number,
    numOfReviews: Number
  }, {
    listingId: Number,
    listingImg: String,
    roomArrangement: String,
    listingTitle: String,
    nightlyPrice: Number,
    reviewAvg: Number,
    numOfReviews: Number
  }, {
    listingId: Number,
    listingImg: String,
    roomArrangement: String,
    listingTitle: String,
    nightlyPrice: Number,
    reviewAvg: Number,
    numOfReviews: Number
  }, {
    listingId: Number,
    listingImg: String,
    roomArrangement: String,
    listingTitle: String,
    nightlyPrice: Number,
    reviewAvg: Number,
    numOfReviews: Number
  }, {
    listingId: Number,
    listingImg: String,
    roomArrangement: String,
    listingTitle: String,
    nightlyPrice: Number,
    reviewAvg: Number,
    numOfReviews: Number
  }, {
    listingId: Number,
    listingImg: String,
    roomArrangement: String,
    listingTitle: String,
    nightlyPrice: Number,
    reviewAvg: Number,
    numOfReviews: Number
  }, {
    listingId: Number,
    listingImg: String,
    roomArrangement: String,
    listingTitle: String,
    nightlyPrice: Number,
    reviewAvg: Number,
    numOfReviews: Number
  }, {
    listingId: Number,
    listingImg: String,
    roomArrangement: String,
    listingTitle: String,
    nightlyPrice: Number,
    reviewAvg: Number,
    numOfReviews: Number
  }, {
    listingId: Number,
    listingImg: String,
    roomArrangement: String,
    listingTitle: String,
    nightlyPrice: Number,
    reviewAvg: Number,
    numOfReviews: Number
  }, {
    listingId: Number,
    listingImg: String,
    roomArrangement: String,
    listingTitle: String,
    nightlyPrice: Number,
    reviewAvg: Number,
    numOfReviews: Number
  }, {
    listingId: Number,
    listingImg: String,
    roomArrangement: String,
    listingTitle: String,
    nightlyPrice: Number,
    reviewAvg: Number,
    numOfReviews: Number
  } ]
});


var InfoModel = mongoose.model('InfoModel', infoSchema );



//models

var seedData = () => {
    var languages = ['Afrikaans', 'Albanian', 'Amharic', 'Arabic', 'Aramaic', 'Armenian', 'Assamese', 'Aymara', 'Azerbaijani', 'Balochi', 'Bamanankan', 'Bashkort', 'Basque', 'Belarusan', 'Bengali', 'Bhojpuri', 'Bislama', 'Bosnian', 'Brahui', 'Bulgarian', 'Burmese', 'Cantonese', 'Catalan', 'Cebuano', 'Chechen', 'Cherokee', 'Croatian', 'Czech', 'Dakota', 'Danish', 'Dari', 'Dholuo', 'DutchEnglish', 'Esperanto', 'Estonian', 'Éwé', 'Finnish', 'French', 'Georgian', 'German', 'Gikuyu', 'Greek', 'Guarani', 'Gujarati', 'Creole', 'Hausa', 'Hawaiian', 'Hawaiian ', 'Hebrew', 'Hiligaynon', 'Hindi', 'Hungarian', 'Icelandic', 'Igbo', 'Ilocano', 'Indonesian', 'Irish', 'Italian', 'Japanese', 'Jarai', 'Javanese', 'Kabyle', 'Kannada', 'Kashmiri', 'Kazakh', 'Khmer', 'KhoekhoeKorean', 'Kurdish', 'Kyrgyz', 'Lao', 'Latin', 'Latvian', 'Lingala', 'Lithuanian', 'Macedonian', 'Maithili', 'Malagasy', 'Malay ', 'Malayalam', 'Mandarin', 'Marathi', 'Mende', 'Mongolian', 'Nahuatl', 'Navajo', 'Nepali', 'Norwegian', 'Ojibwa', 'Oriya', 'Oromo', 'Pashto', 'Persian', 'Polish', 'Portuguese', 'Punjabi', 'Quechua', 'Romani', 'Romanian', 'Russian', 'Rwanda', 'Samoan', 'Sanskrit', 'SerbianShona', 'Sindhi', 'Sinhala', 'Slovak', 'Slovene', 'Somali', 'Spanish', 'Swahili', 'Swedish', 'Tachelhit', 'Tagalog', 'Tajiki', 'Tamil', 'Tatar', 'Telugu', 'Thai', 'Tibetic', 'Tigrigna', 'Turkish', 'Turkmen', 'Ukrainian', 'Urdu', 'Uyghur', 'Uzbek', 'Vietnamese', 'Warlpiri', 'Welsh', 'Wolof', 'Xhosa', 'Yakut', 'Yiddish', 'Yoruba', 'Yucatec', 'Zapotec', 'Zulu'];
    var roomArrangement = ['Entire Home', 'Private Room'];
    for (var i = 100; i < 200; i++){
      InfoModel.create({
        listing_id: i,
        hostName: faker.name.firstName(),
        hostImage: `https://s3.us-east-2.amazonaws.com/fecheadshots/${Math.floor(Math.random() * Math.floor(25)) + 1}.jpg`,
        city: faker.address.city(),
        memberSince: faker.date.past(),
        numOfReviews: Math.floor(Math.random() * Math.floor(500)),
        isVerified: faker.random.boolean(),
        languages: languages[Math.floor(Math.random() * Math.floor(languages.length))],
        responseTime: (Math.floor(Math.random() * Math.floor(24)) + 1),
        responseRate: Math.floor(Math.random() * Math.floor(100)),
        hostInfo: faker.lorem.paragraph(),
        neighborhoodInfo: faker.lorem.paragraph(),
        selfCheckIn: faker.random.boolean(),
        checkInTime: (Math.floor(Math.random() * Math.floor(12)) + 1),
        smoking: faker.random.boolean(),
        parties: faker.random.boolean(),
        pets: faker.random.boolean(),
        securityDeposit: faker.random.boolean(),
        depositAmount: Math.floor(Math.random() * Math.floor(301)),
        policyDiagram: `https://s3.us-east-2.amazonaws.com/fecdiagrams/${Math.floor(Math.random() * Math.floor(3)) + 1}.png`,
        thingsToDo: [{
          eventImg: 'https://s3.us-east-2.amazonaws.com/fecevents/1.jpg',
          eventCategory: faker.lorem.word(),
          eventName: faker.lorem.words(),
          price: Math.floor(Math.random() * Math.floor(300)),
          ratingAvg: Math.floor(Math.random() * Math.floor(5)),
          numOfRatings: Math.floor(Math.random() * Math.floor(500))
        }, {
          eventImg: 'https://s3.us-east-2.amazonaws.com/fecevents/2.jpg',
          eventCategory: faker.lorem.word(),
          eventName: faker.lorem.words(),
          price: Math.floor(Math.random() * Math.floor(300)),
          ratingAvg: Math.floor(Math.random() * Math.floor(5)),
          numOfRatings: Math.floor(Math.random() * Math.floor(500))
        }, {
          eventImg: 'https://s3.us-east-2.amazonaws.com/fecevents/3.jpg',
          eventCategory: faker.lorem.word(),
          eventName: faker.lorem.words(),
          price: Math.floor(Math.random() * Math.floor(300)),
          ratingAvg: Math.floor(Math.random() * Math.floor(5)),
          numOfRatings: Math.floor(Math.random() * Math.floor(500))
        }, {
          eventImg: 'https://s3.us-east-2.amazonaws.com/fecevents/4.jpg',
          eventCategory: faker.lorem.word(),
          eventName: faker.lorem.words(),
          price: Math.floor(Math.random() * Math.floor(300)),
          ratingAvg: Math.floor(Math.random() * Math.floor(5)),
          numOfRatings: Math.floor(Math.random() * Math.floor(500))
        }, {
          eventImg: 'https://s3.us-east-2.amazonaws.com/fecevents/5.jpg',
          eventCategory: faker.lorem.word(),
          eventName: faker.lorem.words(),
          price: Math.floor(Math.random() * Math.floor(300)),
          ratingAvg: Math.floor(Math.random() * Math.floor(5)),
          numOfRatings: Math.floor(Math.random() * Math.floor(500))
        }, {
          eventImg: 'https://s3.us-east-2.amazonaws.com/fecevents/6.jpg',
          eventCategory: faker.lorem.word(),
          eventName: faker.lorem.words(),
          price: Math.floor(Math.random() * Math.floor(300)),
          ratingAvg: Math.floor(Math.random() * Math.floor(5)),
          numOfRatings: Math.floor(Math.random() * Math.floor(500))
        }, {
          eventImg: 'https://s3.us-east-2.amazonaws.com/fecevents/7.jpg',
          eventCategory: faker.lorem.word(),
          eventName: faker.lorem.words(),
          price: Math.floor(Math.random() * Math.floor(300)),
          ratingAvg: Math.floor(Math.random() * Math.floor(5)),
          numOfRatings: Math.floor(Math.random() * Math.floor(500))
        }, {
          eventImg: 'https://s3.us-east-2.amazonaws.com/fecevents/8.jpg',
          eventCategory: faker.lorem.word(),
          eventName: faker.lorem.words(),
          price: Math.floor(Math.random() * Math.floor(300)),
          ratingAvg: Math.floor(Math.random() * Math.floor(5)),
          numOfRatings: Math.floor(Math.random() * Math.floor(500))
        }],
        relatedHomes: [{
          listingId: Math.floor(Math.random() * Math.floor(100)),
          listingImg: 'https://s3.us-east-2.amazonaws.com/fechomes/1.jpg',
          roomArrangement: roomArrangement[Math.floor(Math.random() * Math.floor(roomArrangement.length))],
          listingTitle: faker.lorem.sentence(),
          nightlyPrice: Math.floor(Math.random() * Math.floor(800)),
          reviewAvg: Math.floor(Math.random() * Math.floor(5)),
          numOfReviews: Math.floor(Math.random() * Math.floor(500))
        }, {
          listingId: Math.floor(Math.random() * Math.floor(100)),
          listingImg: 'https://s3.us-east-2.amazonaws.com/fechomes/2.jpg',
          roomArrangement: roomArrangement[Math.floor(Math.random() * Math.floor(roomArrangement.length))],
          listingTitle: faker.lorem.sentence(),
          nightlyPrice: Math.floor(Math.random() * Math.floor(800)),
          reviewAvg: Math.floor(Math.random() * Math.floor(5)),
          numOfReviews: Math.floor(Math.random() * Math.floor(500))
        }, {
          listingId: Math.floor(Math.random() * Math.floor(100)),
          listingImg: 'https://s3.us-east-2.amazonaws.com/fechomes/3.jpg',
          roomArrangement: roomArrangement[Math.floor(Math.random() * Math.floor(roomArrangement.length))],
          listingTitle: faker.lorem.sentence(),
          nightlyPrice: Math.floor(Math.random() * Math.floor(800)),
          reviewAvg: Math.floor(Math.random() * Math.floor(5)),
          numOfReviews: Math.floor(Math.random() * Math.floor(500))
        }, {
          listingId: Math.floor(Math.random() * Math.floor(100)),
          listingImg: 'https://s3.us-east-2.amazonaws.com/fechomes/4.jpg',
          roomArrangement: roomArrangement[Math.floor(Math.random() * Math.floor(roomArrangement.length))],
          listingTitle: faker.lorem.sentence(),
          nightlyPrice: Math.floor(Math.random() * Math.floor(800)),
          reviewAvg: Math.floor(Math.random() * Math.floor(5)),
          numOfReviews: Math.floor(Math.random() * Math.floor(500))
        }, {
          listingId: Math.floor(Math.random() * Math.floor(100)),
          listingImg: 'https://s3.us-east-2.amazonaws.com/fechomes/5.jpg',
          roomArrangement: roomArrangement[Math.floor(Math.random() * Math.floor(roomArrangement.length))],
          listingTitle: faker.lorem.sentence(),
          nightlyPrice: Math.floor(Math.random() * Math.floor(800)),
          reviewAvg: Math.floor(Math.random() * Math.floor(5)),
          numOfReviews: Math.floor(Math.random() * Math.floor(500))
        }, {
          listingId: Math.floor(Math.random() * Math.floor(100)),
          listingImg: 'https://s3.us-east-2.amazonaws.com/fechomes/6.jpg',
          roomArrangement: roomArrangement[Math.floor(Math.random() * Math.floor(roomArrangement.length))],
          listingTitle: faker.lorem.sentence(),
          nightlyPrice: Math.floor(Math.random() * Math.floor(800)),
          reviewAvg: Math.floor(Math.random() * Math.floor(5)),
          numOfReviews: Math.floor(Math.random() * Math.floor(500))
        }, {
          listingId: Math.floor(Math.random() * Math.floor(100)),
          listingImg: 'https://s3.us-east-2.amazonaws.com/fechomes/7.jpg',
          roomArrangement: roomArrangement[Math.floor(Math.random() * Math.floor(roomArrangement.length))],
          listingTitle: faker.lorem.sentence(),
          nightlyPrice: Math.floor(Math.random() * Math.floor(800)),
          reviewAvg: Math.floor(Math.random() * Math.floor(5)),
          numOfReviews: Math.floor(Math.random() * Math.floor(500))
        }, {
          listingId: Math.floor(Math.random() * Math.floor(100)),
          listingImg: 'https://s3.us-east-2.amazonaws.com/fechomes/8.jpg',
          roomArrangement: roomArrangement[Math.floor(Math.random() * Math.floor(roomArrangement.length))],
          listingTitle: faker.lorem.sentence(),
          nightlyPrice: Math.floor(Math.random() * Math.floor(800)),
          reviewAvg: Math.floor(Math.random() * Math.floor(5)),
          numOfReviews: Math.floor(Math.random() * Math.floor(500))
        }, {
          listingId: Math.floor(Math.random() * Math.floor(100)),
          listingImg: 'https://s3.us-east-2.amazonaws.com/fechomes/9.jpg',
          roomArrangement: roomArrangement[Math.floor(Math.random() * Math.floor(roomArrangement.length))],
          listingTitle: faker.lorem.sentence(),
          nightlyPrice: Math.floor(Math.random() * Math.floor(800)),
          reviewAvg: Math.floor(Math.random() * Math.floor(5)),
          numOfReviews: Math.floor(Math.random() * Math.floor(500))
        }, {
          listingId: Math.floor(Math.random() * Math.floor(100)),
          listingImg: 'https://s3.us-east-2.amazonaws.com/fechomes/10.jpg',
          roomArrangement: roomArrangement[Math.floor(Math.random() * Math.floor(roomArrangement.length))],
          listingTitle: faker.lorem.sentence(),
          nightlyPrice: Math.floor(Math.random() * Math.floor(800)),
          reviewAvg: Math.floor(Math.random() * Math.floor(5)),
          numOfReviews: Math.floor(Math.random() * Math.floor(500))
        }, {
          listingId: Math.floor(Math.random() * Math.floor(100)),
          listingImg: 'https://s3.us-east-2.amazonaws.com/fechomes/11.jpg',
          roomArrangement: roomArrangement[Math.floor(Math.random() * Math.floor(roomArrangement.length))],
          listingTitle: faker.lorem.sentence(),
          nightlyPrice: Math.floor(Math.random() * Math.floor(800)),
          reviewAvg: Math.floor(Math.random() * Math.floor(5)),
          numOfReviews: Math.floor(Math.random() * Math.floor(500))
        }, {
          listingId: Math.floor(Math.random() * Math.floor(100)),
          listingImg: 'https://s3.us-east-2.amazonaws.com/fechomes/12.jpg',
          roomArrangement: roomArrangement[Math.floor(Math.random() * Math.floor(roomArrangement.length))],
          listingTitle: faker.lorem.sentence(),
          nightlyPrice: Math.floor(Math.random() * Math.floor(800)),
          reviewAvg: Math.floor(Math.random() * Math.floor(5)),
          numOfReviews: Math.floor(Math.random() * Math.floor(500))
        } ]
      
      }, (error) => {
          if (error){
            console.log(error);
          } else {
            console.log('saved info');
          }
        })
    }
    console.log('data seeded');
  }


getData = (id, callback) => {
  InfoModel.find({listing_id: id}, (error, data) => {
      callback(error, data);
  });
}


//export models
module.exports.seedData = seedData;

module.exports.getData = getData;
