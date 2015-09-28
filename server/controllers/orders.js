var mongoose = require('mongoose');
var orders = mongoose.model('order');
var products = mongoose.model('product');

module.exports = 
{
	show: function(req, res)
	{
		orders.find({}, function(err, result){
			if(err)
			{
				console.log(err);
			}
			else
			{
				console.log(result);
				res.json(result);
			}
		})
	},
	add: function(req, res)
	{
		orders.create({name: req.body.customer_name, product_name: req.body.product, qty: req.body.qty, ordered_at: new Date()}, function(err){
			if(err)
			{
				console.log(err);
			}
			else
			{
				products.findOne({name: req.body.product}, function(err, result)
				{
					var qty = result.qty;
					products.update({name: req.body.product}, {$set: {qty: result.qty - req.body.qty}}, function(err){
						res.json(true);
					})

				});
				
			}
		})
	}
}