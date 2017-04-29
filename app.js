const express = require('express');
const server = express();

server.use(express.static('videos'));

server.listen(3000, () => console.log('Server running'));