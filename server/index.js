const express = require('express');
const routes = require('./routes');

const PORT = 8081;
const app = express();
app.use(express.static('static'));
app.use(express.static('dist'));

const router = express.Router();

// app.use(router);

routes(app);

app.use(express.static('./build'));
app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`)
});
