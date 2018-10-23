'use strict'

var mongoose = require('mongoose'); 
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/spotify_db', (err,res)=>{
	if(err){
		throw err;
	}else{
		console.log('base de datos OK');

		app.listen(port, function(){
			console.log("Servidor del api rest de spotify escuchando en http://localhost:"+ port);
		})
	}
})