'use strict'
const mymodule = require('./06-mymodule');

const dir = process.argv[2];
const ext = process.argv[3];

mymodule(dir, ext, function(err, data) {
	if(err) return console.log(err);

	data.forEach(file => {
		console.log(file);
	})
});
