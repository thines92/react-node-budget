import React from "react";
import {
    fetchTransactions,
    addTransaction,
    deleteTransaction,
    editTransaction,
    setEditState,
    setViewState
} from "../actions/transactionActions";
import { connect } from "react-redux";
import TransactionForm from "./TransactionForm";
import Transaction from "./Transaction";

class TransactionTable extends React.Component {
    componentDidMount = () => {
        this.props.fetchTransactions();
    };

    renderTransactions = () => {
        return this.props.transactions.map((transaction, i) => {
            return (
                <Transaction
                    key={transaction._id.toString()}
                    transaction={transaction}
                    edittingTransaction={this.props.edittingTransaction}
                    edittedTransaction={this.props.edittedTransaction}
                    deleteTransaction={this.handleDeleteTransaction}
                    editTransaction={this.handleEditTransaction.bind(this)}
                    setEditState={this.props.setEditState}
                    setViewState={this.props.setViewState}
                />
            );
        });
    };

    handleDeleteTransaction = (id) => {
        console.log('id', id)
        this.props.deleteTransaction(id);
    };

    handleAddTransaction = (type, source) => {
        this.props.addTransaction({
            type: type,
            source: source,
        });
    };

    handleEditTransaction = (transaction) => {
        this.props.editTransaction(transaction)
    };

    render() {
        return (
            <div className="ui container stackable">
                <TransactionForm
                    addTransaction={this.handleAddTransaction.bind(this)}
                />
                <div className="ui grid container">
                    <div className="six wide column">Type</div>
                    <div className="six wide column">Source</div>
                </div>
                <div className="ui grid container">
                {this.renderTransactions()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('state', state)
    return state.transactions;
};
export default connect(mapStateToProps, {
    fetchTransactions,
    addTransaction,
    deleteTransaction,
    editTransaction,
    setEditState,
    setViewState
})(TransactionTable);
