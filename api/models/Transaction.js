const mongoose = require('mongoose');
const { Schema } = mongoose;

const transactionSchema = new Schema({
    type: String,
    source: String,
    editting: false
}, { collection: 'transactions' })

module.exports = mongoose.model('transactions', transactionSchema)