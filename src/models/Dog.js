var mongoose = require('mongoose');

var DogModel;

var DogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    
    breed: {
        type: String,
        required: true,
		trim: true
    },
	
	age: {
        type: Number,
        min: 0,
        required: true
    },
    
    createdDate: {
        type: Date,
        default: Date.now
    }

});

DogSchema.methods.sayName = function() {
    console.log(this.name);
};

DogSchema.statics.findDogByName = function(name, callback) {

    var search = {
        name: name
    };

    return DogModel.findOne(search, callback);
};

DogModel = mongoose.model('Dog', DogSchema);

//export our public properties
module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;