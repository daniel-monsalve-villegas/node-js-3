'use strict'

const fs = require ('fs');

fs.readFile(process.argv[2], 'utf8', function(err, data) {

	const archivo = data.split('\n');

	console.log(archivo.length - 1);
});
