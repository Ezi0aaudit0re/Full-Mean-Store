var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
	name: String,
	qty: Number,
	description: String,
	image: String
});

mongoose.model('product', productSchema);