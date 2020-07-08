import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import {
	fetchTransactions,
	deleteTransaction,
} from '../../actions/transactionActions';

const TransactionStyle = {
	width: '75%',
	height: '75px',
};

const EditAndDeleteStyle = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
};

class TransactionList extends React.Component {
	componentDidMount = () => {
		this.props.fetchTransactions();
	};

	renderList = () => {
		return this.props.transactions.map((transaction) => {
			return (
				<div className="item" key={transaction._id}>
					<div className="content" style={TransactionStyle}>
						<a className="header">Title: {transaction.title}</a>
						<div class="meta">Category: {transaction.category}</div>
						<div class="description">
							Amount: {transaction.amount}
						</div>
					</div>
					{this.renderEditAndDelete(transaction)}
				</div>
			);
		});
	};

	renderEditAndDelete(transaction) {
		return (
			<div className="right floated content" style={EditAndDeleteStyle}>
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
