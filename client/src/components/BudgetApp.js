import React from "react";

import TransactionList from "./TransactionList";
import NewTransaction from './NewTransaction'
import { addTransaction } from '../actions/transactionActions'
import { connect } from "react-redux";

class BudgetApp extends React.Component {

    handleAddTransaction = (transaction) => {
        console.log('handleAddTransaction', transaction)
        const { type, source } = transaction
        this.props.addTransaction({
            type: type,
            source: source,
            editting: false
        });
    };

    render() {
        return (
            <div className="ui container stackable">
                <NewTransaction
                    addTransaction={this.handleAddTransaction}
                />
                <TransactionList />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(
    mapStateToProps,
    {
        addTransaction
    }
)(BudgetApp);
