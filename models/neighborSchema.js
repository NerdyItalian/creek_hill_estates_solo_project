var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NeighborSchema = new Schema({
    owner: { type: Schema.Types.Mixed},
    kids: { type: Schema.Types.Mixed},
    animals: { type: Schema.Types.Mixed},
    house: { type: Number, min: 0, max:82}
});

console.log('neighborSchema model loaded');
module.exports = mongoose.model('Neighbor', NeighborSchema);