const models = require('./models');

module.exports = {
    rooms: {
        get: function(req,res) {
            var params = req.params.id;
            console.log(params)
            models.rooms.get(params, function(err, result) {
                if(err) {
                    console.log('Error');
                }
                res.end(JSON.stringify(result));
            })
        }
    },
    reviews: {
        get: function(req, res) {
            var params = [req.params.id, req.query.search];

            models.reviews.get(params, function(err, result) {
                if(err) {
                    console.log('Error');
                }
                res.end(JSON.stringify(result));
            })
        }
    }
}

// var typeA = [true, false]

// typeA[Math.floor(Math.random() * 2)]