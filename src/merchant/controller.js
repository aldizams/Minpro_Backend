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
	});
	//add Merchant to db
	pool.query(
		queries.addMerchant,
		[name, password, address, join_date, phone_number],
		(err, results) => {
			if (err) {
				throw err;
			}
			if (
				name === undefined ||
				password === undefined ||
				join_date === undefined ||
				phone_number === undefined
			) {
				throw err;
			}
			res.status(201).send('Merchant added successfully!');
			console.log('Merchant Created successfully!');
		}
	);
};

const deleteMerchant = (req, res) => {
	pool.query(queries.deleteMerchant, [id], (err, results) => {
		if (err) {
			throw err;
		}
		res.status(200).send('Merchant delete successfully!');
	});
};

const addProduct = (req, res) => {
	pool.query(queries.checkName, [name], (err, results) => {
		if (results.rows.length) {
			res.send('Name already exists');
		}
	});

	pool.query(queries.addMerchant, [name, quantity, price], (err, results) => {
		if (err) {
			throw err;
		}
		if (name === undefined || quantity === undefined || privce === undefined) {
			throw err;
		}
		res.status(201).send('Product added successfully!');
		console.log('Product added successfully!');
	});
};

const deleteProduct = (req, res) => {
	pool.query(queries.deleteProduct, [id], (err, results) => {
		if (err) {
			throw err;
		}
		res.status(200).send('Product delete successfully!');
	});
};

const updateProduct = (req, res) => {
	pool.query(
		queries.updateProduct,
		[id, name, quantity, price],
		(err, results) => {
			if (err) {
				throw err;
			}
			res.status(200).send('Product update successfully!');
		}
	);
};

const getProduct = (req, res) => {
	pool.query(queries.getProductById, (err, results) => {
		if (err) {
			throw err;
		}
		res.status(200).json(results);
	});
};

const getProductById = (req, res) => {
	pool.query(queries.getProductById, [id], (err, results) => {
		if (err) {
			throw err;
		}
		res.status(200).json(results);
	});
};

module.exports = {
	getMerchant,
	getMerchantById,
	addMerchant,
	deleteMerchant,
};
