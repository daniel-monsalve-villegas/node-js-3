'use strict'

const http = require('http');

http.get(process.argv[2], response => {
	let result = "";
	response.setEncoding('utf8');

	response.on('error', (error) => {
		console.log(error);
	});

	response.on('data', (data) => {
		result += data;
	});

	response.on('end', () => {
		console.log(result.length);
		console.log(result);
	});
})
