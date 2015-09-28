var mongoose = require('mongoose');
var fs = require('fs');

mongoose.connect('mongodb://localhost/MiniMeanStore');

require('./../models/customer.js');
require('./../models/product.js');
require('./../models/order.js');
