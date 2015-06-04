var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NeighborSchema = new Schema({
    ownerOne: { type: String, index: { unique: true } },
    ownerTwo: { type: String, required: true },
    kids: { type: [String] },
    animals: { type: [String]},
    house: {type: Number, min: 0, max:82}
});

console.log('neighborSchema model loaded');
module.exports = mongoose.model('Neighbor', NeighborSchema);