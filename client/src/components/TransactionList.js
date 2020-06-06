import React from "react";
import {
    fetchTransactions,
    deleteTransaction,
    updateTransaction,
    updateEditState,
} from "../actions/transactionActions";
import { connect } from "react-redux";

class TransactionTable extends React.Component {
    componentDidMount = () => {
        this.props.fetchTransactions();
    };

    renderEditAndDelete(transaction) {
        return (
            <div className="right floated content">
                <button className="ui button primary" onClick={() => this.props.updateTransaction(transaction)}>Edit</button>
                <button className="ui button negative" onClick={() => this.props.deleteTransaction(transaction._id)}>Delete</button>
            </div>
        );
    }

    renderTransactions = () => {
        return this.props.transactions.map((transaction) => {
            return (
                <div className="item" key={transaction._id}>
                    {this.renderEditAndDelete(transaction)}
                    <div className="content">
                        Type: {transaction.type}
                        <div className="source">Source: {transaction.source}</div>
                    </div>
                </div>
            );
        });
    };

    render() {
        return (
            <div>
                <h2>Transactions</h2>
                <div className="ui celled list">
                    {this.renderTransactions()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        transactions: Object.values(state.transactions),
    };
};
export default connect(mapStateToProps, {
    fetchTransactions,
    deleteTransaction,
    updateTransaction,
    updateEditState,
})(TransactionTable);
