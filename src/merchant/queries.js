const getMerchant = 'SELECT * FROM merchant';
const getMerchantById = 'SELECT * FROM merchant WHERE id = $1';
const checkName = 'SELECT s FROM merchant s WHERE s.name = $1';
const addMerchant =
	'INSERT INTO merchant (name, password, address, join_date, phone_number) VALUES ($1, $2, $3, $4, $5)';

module.exports = {
	getMerchant,
	getMerchantById,
	checkName,
	addMerchant,
};
