'use strict'

const http = require('http');
const map = require('through2-map');

const server = http.createServer((req, res) => {
	if(req.method !== 'POST') return res.end('This server only accepts POSTS');  

	req.pipe(map(chunk => {
		return chunk.toString().toUpperCase();
	})).pipe(res);
});

server.listen(process.argv[2]);
