var mongoose = require('mongoose');

var customersSchema = new mongoose.Schema({
	name: String,
	created_at: Date
});

mongoose.model('customer',customersSchema);