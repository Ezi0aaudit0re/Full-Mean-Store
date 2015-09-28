var Customers = require('./../controllers/customers.js')
var Products = require('./../controllers/products.js')
var Orders = require('./../controllers/orders.js')
module.exports = function(app)
{
	app.get('/getCustomers', function(req, res){
		Customers.show(req, res);
	});
	app.post('/addCustomer', function(req, res)
	{
		// console.log(req.body);
		Customers.add(req, res);
	});
	app.get('/getProducts', function(req, res){
		Products.show(req, res);
	})
	app.post('/addOrder', function(req, res){
		Orders.add(req, res)
	})
	app.get('/getOrders', function(req, res){
		Orders.show(req, res);
	});
	app.post('/addProduct', function(req, res){
		Products.add(req, res);
	})
}