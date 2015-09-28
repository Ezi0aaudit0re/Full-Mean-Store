var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
	name: String,
	product_name: String,
	qty: Number,
	ordered_at: Date
});

mongoose.model('order', orderSchema);