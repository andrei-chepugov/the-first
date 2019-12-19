const express = require('express');

const PORT = 8080;
const app = express();
app.use(express.Router());

require('./routes')(app, require('../dist/node.js'));

app.use(express.static('./dist'));
app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`)
});
