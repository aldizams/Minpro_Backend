const getMerchant = 'SELECT * FROM merchant';
const getMerchantById = 'SELECT * FROM merchant WHERE id = $1';
const checkName = 'SELECT s FROM merchant s WHERE s.name = $1';
const addMerchant =
	'INSERT INTO merchant (name, password, address, join_date, phone_number) VALUES ($1, $2, $3, $4, $5)';
const deleteMerchant = 'DELETE FROM merchant WHERE id = $1';
const addProduct =
	'INSERT INTO product (id, name,quantity, price)VALUES ($1, $2, $3, $4,)';
const deleteProduct = 'DELETE FROM product WHERE id = $1';
const updateProduct =
	'UPDATE product SET quantity = $1 OR price = $2 OR name = $3 WHERE id = $4';
const getProduct = 'SELECT * FROM product';
const getProductById = 'SELECT * FROM product WHERE id = $1';
module.exports = {
	getMerchant,
	getMerchantById,
	checkName,
	addMerchant,
	deleteMerchant,
	addProduct,
	deleteProduct,
	updateProduct,
	getProduct,
	getProductById,
};
