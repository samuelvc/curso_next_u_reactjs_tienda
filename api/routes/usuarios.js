var express = require('express');
var BDAgenda = require('../conectBD.js'),
	Operaciones = require('../controllers/usuarios.js');
var Router = express.Router();

Router.post('/', (req, res, next) => {
	Operaciones.consultarUsuario({
		email: req.body.email,
		password: req.body.password
	}, (error, result) => {
		if (error) res.status(200).jsonp({
			loginMsg: error
		});
		else {
			req.session.login = true;
			req.session.userLogin = result;
			res.status(200).jsonp({
				loginMsg: "Ok"
			});
		}
	});
});

Router.post('/add', (req, res) => {
	Operaciones.insertarUsuario((error, result) => {
		if (error) res.status(200).jsonp({
			loginMsg: error
		});
		else {
			res.status(200).jsonp({
				loginMsg: "Ok"
			});
		}
	});
});

module.exports = Router;
