var mongoose = require('mongoose');
var Customers = mongoose.model('customer');
module.exports = 
// (function(){
// return
	{
		show: function(req, res)
		{	
			Customers.find({}, function(err, customers)
			{
				if(err)
				{
					console.log(err);
				}
				else
				{
					res.json(customers);
				}
			})
		},
		add: function(req, res)
		{	
			Customers.create({name: req.body.name, created_at: new Date()}, function(err)
			{
				res.json(true);
			});
		}
	}	
// })();