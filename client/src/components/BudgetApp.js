import React from "react";

import TransactionList from "./TransactionList";
import NewTransaction from './NewTransaction'

class BudgetApp extends React.Component {

    handleAddTransaction = (type, source) => {
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
                    addTransaction={this.handleAddTransaction.bind(this)}
                />
                <TransactionList />
            </div>
        );
    }
}

export default BudgetApp;
