import React from "react";
import EditTransaction from "./EditTransaction";

class Transaction extends React.Component {
    setEditState = () => {
        this.props.setEditState({
            ...this.props.transaction,
            editState: true
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
                        onClick={this.setEditState}
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

    renderEdit(transaction) {
        return <EditTransaction editTransaction={this.props.editTransaction} transaction={transaction} setEditState={this.setEditState} />
    }

    renderContent() {
        return this.props.transaction.editState ? this.renderEdit(this.props.transaction) : this.renderRow() 
    }

    render() {
        return this.renderContent()
    }
}

export default Transaction;
