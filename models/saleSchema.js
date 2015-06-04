var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SaleSchema = new Schema({
    seller: { type: Schema.Types.Mixed},
    subject: { type: Schema.Types.Mixed},
    description: { type: Schema.Types.Mixed},
    cost: {type: Schema.Types.Mixed}
});

console.log('SaleSchema model loaded');
module.exports = mongoose.model('Sale', SaleSchema);