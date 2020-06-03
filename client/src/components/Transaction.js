import React from "react";
import EditTransaction from "./EditTransaction";

class Transaction extends React.Component {
    setEditState = () => {
        this.props.setEditState(this.props.transaction.id)
    };

    setViewState = () => {
        this.props.setViewState()
    }

    renderRow() {
        const { id, type, source } = this.props.transaction;

        return (
            <div className="row">
                <div className="six wide column">{type}</div>
                <div className="six wide column">{source}</div>
                <div className="two wide column">
                    <button
                        className="ui button primary"
                        onClick={this.setEditState}
                    >
                        Edit
                    </button>
                </div>
                <div className="two wide column">
                    <button
                        className="ui button red"
                        onClick={this.props.deleteTransaction.bind(this, id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        );
    }

    renderEdit(transaction) {
        return <EditTransaction editTransaction={this.props.editTransaction} transaction={transaction} setViewState={this.setViewState} />
    }

    renderContent() {
        return this.props.edittingTransaction && this.props.edittedTransaction == this.props.transaction.id ? this.renderEdit(this.props.transaction) : this.renderRow() 
    }

    render() {
        return this.renderContent()
    }
}

export default Transaction;
