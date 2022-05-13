const pool = require('../../db');

const getMerchant = (req, res) => {
	pool.query('SELECT * FROM merchant', (error, results) => {
		if (error) {
			throw error;
		}
		res.status(200).json(results.rows);
	});
};

module.exports = {
	getMerchant,
};
