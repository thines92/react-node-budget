import React from "react";

class TransactionView extends React.Component {
    
    updateEditState = () => {
        this.props.updateEditState({
            ...this.props.transaction,
            editting: !this.props.transaction.editting
        })
    };

    render() {
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
}

export default TransactionView;
