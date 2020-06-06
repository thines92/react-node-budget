import React from "react";
import {
    fetchTransactions,
    addTransaction,
    deleteTransaction,
    editTransaction,
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
                    editTransaction={this.handleEditTransaction.bind(this)}
                    updateEditState={this.props.updateEditState}
                />
            );
        });
    };

    handleDeleteTransaction = (id) => {
        console.log("id", id);
        this.props.deleteTransaction(id);
    };

    handleAddTransaction = (type, source) => {
        this.props.addTransaction({
            type: type,
            source: source,
        });
    };

    handleEditTransaction = (transaction) => {
        this.props.editTransaction(transaction);
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
                                editTransaction={this.handleEditTransaction.bind(this)}
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
    editTransaction,
    updateEditState,
})(TransactionTable);
