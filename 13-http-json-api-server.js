'use strict'

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
	const { pathname, query } =	url.parse(req.url, true);
	res.writeHead(200, { 'Content-type': 'application/json' });
	const date = new Date(query.iso);

	if(pathname === '/api/parsetime') {

		return res.end(JSON.stringify({
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		}));
	}

	if(pathname === '/api/unixtime') {
		return res.end(JSON.stringify({
			unixtime: date.getTime() 
		}));
	}

	res.writeHead(404, { 'Content-type': 'application/json' });
	res.end(JSON.stringify({
		success: false,
		message: `${pathname} is not a value endpoint`
	}));
});

server.listen(process.argv[2]);
