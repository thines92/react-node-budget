const mongoose = require('mongoose');
const { Schema } = mongoose;

const transactionSchema = new Schema(
	{
		id: Number,
		title: String,
		amount: Number,
		category: String,
	},
	{ collection: 'transactions' }
);

module.exports = mongoose.model('transactions', transactionSchema);
