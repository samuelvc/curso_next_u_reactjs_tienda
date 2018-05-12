// JavaScript Document
var mongoose = require('mongoose');
var BDTienda = mongoose.connect('mongodb://localhost/BDProductos',{
	useMongoClient: true,
});
module.exports = BDTienda;
