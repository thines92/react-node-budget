import React from "react";
import {
    fetchTransactions,
    addTransaction,
    deleteTransaction,
    updateTransaction,
    updateEditState,
} from "../actions/transactionActions";
import { connect } from "react-redux";
import TransactionForm from "./NewTransaction";
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
                    deleteTransaction={this.handleDeleteTransaction}
                    updateTransaction={this.handleEditTransaction.bind(this)}
                    updateEditState={this.props.updateEditState}
                />
            );
        });
    };

    handleDeleteTransaction = (id) => {
        this.props.deleteTransaction(id);
    };

    handleAddTransaction = (type, source) => {
        this.props.addTransaction({
            type: type,
            source: source,
            editting: false
        });
    };

    handleEditTransaction = (transaction) => {
        this.props.updateTransaction(transaction);
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
                    {this.props.transactions.map((transaction, index) => {
                        return (
                            <Transaction
                                key={transaction._id.toString()}
                                transaction={transaction}
                                deleteTransaction={this.handleDeleteTransaction}
                                updateTransaction={this.handleEditTransaction.bind(this)}
                                updateEditState={this.props.updateEditState}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.transactions;
};
export default connect(mapStateToProps, {
    fetchTransactions,
    addTransaction,
    deleteTransaction,
    updateTransaction,
    updateEditState,
})(TransactionTable);
