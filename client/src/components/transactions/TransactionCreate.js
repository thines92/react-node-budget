import React from 'react';
import { createTransaction } from '../../actions/transactionActions';
import { connect } from 'react-redux';
import TransactionForm from './TransactionForm';

class TransactionCreate extends React.Component {
	onSubmit = (values) => {
		this.props.createTransaction(values);
	};

	render() {
		return (
			<div>
				<h2>Transactions</h2>
				<div className="ui celled list">
					<TransactionForm onSubmit={this.onSubmit} />
				</div>
			</div>
		);
	}
}

export default connect(null, {
	createTransaction,
})(TransactionCreate);
