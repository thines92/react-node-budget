import React from "react";

import TransactionList from "./TransactionList";
import NewTransaction from './NewTransaction'
import { addTransaction } from '../actions/transactionActions'
import { connect } from "react-redux";

class BudgetApp extends React.Component {

    handleAddTransaction = (type, source) => {
        addTransaction({
            type: type,
            source: source,
            editting: false
        });
    };

    render() {
        return (
            <div className="ui container stackable">
                <NewTransaction
                    addTransaction={this.handleAddTransaction.bind(this)}
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
