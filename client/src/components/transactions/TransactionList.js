import React from 'react';
import {
	fetchTransactions,
	deleteTransaction,
} from '../../actions/transactionActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class TransactionList extends React.Component {
	componentDidMount = () => {
		this.props.fetchTransactions();
	};

	renderList = () => {
		return this.props.transactions.map((transaction) => {
			return (
				<div className="item" key={transaction._id}>
					{this.renderEditAndDelete(transaction)}
					<div className="content">
						Type: {transaction.type}
						<div className="source">
							Source: {transaction.source}
						</div>
					</div>
				</div>
			);
		});
	};

	renderEditAndDelete(transaction) {
		return (
			<div className="right floated content">
				<Link
					to={`/transactions/edit/${transaction._id}`}
					className="ui button primary"
				>
					Edit
				</Link>
				<button
					className="ui button negative"
					onClick={() =>
						this.props.deleteTransaction(transaction._id)
					}
				>
					Delete
				</button>
			</div>
		);
	}

	renderCreateButton() {
		return (
			<div style={{ textAlign: 'right' }}>
				<Link to="/transactions/new" className="ui button primary">
					Create Transaction
				</Link>
			</div>
		);
	}

	render() {
		return (
			<div>
				<h2>Transactions</h2>
				<div className="ui celled list">{this.renderList()}</div>
				{this.renderCreateButton()}
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
})(TransactionList);
