import React from 'react'
import TransactionView from './TransactionView'
import TransactionEdit from './TransactionEdit'

class Transaction extends React.Component {
    constructor(props) {
        super(props);

    }
    updateEditState = (transaction) => {
        this.props.updateEditState({
            ...transaction,
            editting: transaction.editting
        })
    };

    renderRow() {
        const { _id, type, source } = this.props.transaction;

        return (
            <div className="row">
                <div className="six wide column">{type}</div>
                <div className="six wide column">{source}</div>
                <div className="two wide column">
                    <button
                        className="ui button primary"
                        onClick={this.updateEditState}
                    >
                        Edit
                    </button>
                </div>
                <div className="two wide column">
                    <button
                        className="ui button red"
                        onClick={this.props.deleteTransaction.bind(this, _id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        );
    }

    renderContent() {
        const { transaction } = this.props;

        return transaction.editting ? <TransactionEdit transaction={transaction} updateEditState={this.updateEditState} updateTransaction={this.props.updateTransaction} /> : <TransactionView transaction={transaction} deleteTransaction={this.props.deleteTransaction} updateEditState={this.updateEditState} />;
    }

    render() {
        return this.renderContent()
    }
}

export default Transaction;
