var mongoose = require('mongoose');
var Products = mongoose.model('product')
module.exports = 
{
	show: function(req, res)
	{
		Products.find({}, function(err, result)
		{
			if(err)
			{
				console.log(err)
			}
			else
			{
				res.json(result)
			}
		})
	},
	add: function(req, res)
	{
		Products.create({name: req.body.name, qty: req.body.initialQty, description: req.body.description, image: req.body.img}, function(err){
			if(err)
			{
				console.log(err);
			}
			else
			{
				res.json(true);
			}
		})
	}	
}