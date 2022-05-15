const Pool = require('pg').Pool;

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'toko_db',
	password: '513077885693',
	port: 5432,
});

module.exports = pool;
