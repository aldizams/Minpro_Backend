const pool = require('../../db');
const queries = require('./queries');

const getMerchant = (req, res) => {
	pool.query(queries.getMerchant, (error, results) => {
		if (error) {
			throw error;
		}
		res.status(200).json(results.rows);
	});
};

const getMerchantById = (req, res) => {
	const id = parseInt(req.params.id);
	pool.query(queries.getMerchantById, [id], (err, results) => {
		if (err) {
			throw err;
		}
		res.status(200).json(results.rows);
	});
};

const addMerchant = (req, res) => {
	const { name, password, address, join_date, phone_number } = req.body;

	pool.query(queries.checkName, [name], (err, results) => {
		if (results.rows.length) {
			res.send('Name already exists');
		}

		//add Merchant to db
		pool.query(
			queries.addMerchant,
			[name, password, address, join_date, phone_number],
			(err, results) => {
				if (err) {
					throw err;
				}
				res.status(201).send('Merchant added successfully!');
				console.log('Merchant Created successfully!');
			}
		);
	});
};

module.exports = {
	getMerchant,
	getMerchantById,
	addMerchant,
};
