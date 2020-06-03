const mongoose = require('mongoose');
const { Schema } = mongoose;

const transactionSchema = new Schema({
    type: String,
    source: String,
})

mongoose.model('transactions', productSchema)