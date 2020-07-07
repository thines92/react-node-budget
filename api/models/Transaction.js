const mongoose = require('mongoose');
const { Schema } = mongoose;

const transactionSchema = new Schema(
	{
		title: String,
		amount: Int32Array,
		category: String
	},
	{ collection: 'transactions' }
);

module.exports = mongoose.model('transactions', transactionSchema);
