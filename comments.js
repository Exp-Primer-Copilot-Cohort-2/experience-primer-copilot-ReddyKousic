// Create a webserver that listens on port 3000

const http = require('http');
const url = require('url');

const comments = [
	{ username : 'Alice', comment : 'I love apples' }]