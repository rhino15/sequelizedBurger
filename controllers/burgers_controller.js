var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	models.Burgers.findAll({
		
	})
	.then(function(burgers) {
		res.render('index', {
			burgers: burgers
		});
	});
});

router.post('/insertBurgers', function(req, res) {
	models.Burgers.create({
		burger_name: req.body.burger_name
	})
	.then(function() {
		res.redirect('/');
	});
});

router.put('/update/:id', function(req, res) {
	models.Burgers.update(
	{
		devoured: 1
	},
	{
		where: {id : req.params.id}
	})
	.then(function(result) {
		res.redirect('/');
	}, function(rejectedPromiseError) {

	});
});

router.delete('/delete/:id', function(req, res) {
	models.Burgers.destroy({
		where: {
			id: req.params.id
		}
	})
	.then(function() {
		res.redirect('/');
	});
});

module.exports = router;