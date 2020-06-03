const mongoose = require('mongoose');
const Transaction = mongoose.model('transactions');

module.exports = (app) => {

    app.use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
        next();
      });

    app.get(`/api/transaction`, async (req, res) => {
        let transactions = await Transaction.find();
        console.log('transactions', transactions)
        
        return res.status(200).send(transactions);
    });

    app.post(`/api/transaction`, async (req, res) => {
        let transaction = await Transaction.create(req.body);
        console.log('transaction', req.body)
        return await res.status(201).send({
            error: false,
            transaction
        });
    })

    app.put(`/api/transaction/:id`, async (req, res) => {
        const {
            id
        } = req.params;

        let transaction = await Transaction.findByIdAndUpdate(id, req.body);

        return res.status(202).send({
            error: false,
            transaction
        });
    });

    app.delete(`/api/transaction/:id`, async (req, res) => {
        const {id} = req.params;
        console.log('params', req.params)

        let transaction = await Transaction.findByIdAndDelete(id);

        return res.status(202).send({
            error: false,
            transaction
        });
    });
}