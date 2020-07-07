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
						<a className="header">{transaction.title}</a>
						<div class="meta">{transaction.category}</div>
						<div class="description">{transaction.amount}</div>
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
				<Link
					to={`/transactions/delete/${transaction._id}`}
					className="ui button negative"
				>
					Delete
				</Link>
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
				<div className="ui items">{this.renderList()}</div>
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
