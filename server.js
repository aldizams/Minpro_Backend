const express = require('express');
const tokoRoutes = require('./src/merchant/routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.use('/api/v1/toko', tokoRoutes);

app.listen(port, () => console.log(`app listen on port ${port}`));
