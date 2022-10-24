'use strict'

const net = require('net');

const server = net.createServer(socket => {
	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const hour = date.getHours();
	const minutes = date.getMinutes();

	const time = year + '-' + month + '-' + day + ' ' + hour + ':' + minutes;
	socket.write(time);
	socket.end('\n');
});

server.listen(+process.argv[2]);
