import React from 'react';
import {
	fetchTransactions,
	deleteTransaction,
	updateTransaction,
	updateEditState,
} from '../../actions/transactionActions';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class TransactionList extends React.Component {
	componentDidMount = () => {
		this.props.fetchTransactions();
	};

	renderError({ error, touched }) {
		if (error && touched) {
			return <div className="ui error message">{error}</div>;
		}
	}

	renderInput = ({ input, label, meta }) => {
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off" />
				{this.renderError(meta)}
			</div>
		);
	};

	onSubmit = (values) => {
		const { transaction } = this.props;

		this.props.updateTransaction({
			_id: transaction._id,
			type: values.type,
			source: values.source,
			editting: !transaction.editting,
		});
	};

	renderViewTransaction(transaction) {
		return (
			<div className="item" key={transaction._id}>
				{this.renderEditAndDelete(transaction)}
				<div className="content">
					Type: {transaction.type}
					<div className="source">Source: {transaction.source}</div>
				</div>
			</div>
		);
	}

	renderEditTransaction(transaction) {
		return (
			<form
				className="item"
				key={transaction._id}
				onSubmit={this.props.handleSubmit(this.onSubmit)}
			>
				{this.renderEditAndDelete(transaction)}
				<div className="content">
					Type: {transaction.type}
					<div className="source">Source: {transaction.source}</div>
				</div>
				<div className="content">
					<div className="field">
						<Field
							name="type"
							component={this.renderInput}
							label="Type"
							className="eight wide column"
						/>
					</div>
					<div className="field">
						<Field
							name="source"
							component={this.renderInput}
							label="Source"
							className="eight wide column"
						/>
					</div>
					{this.renderSaveAndCancel()}
				</div>
			</form>
		);
	}

	renderEditAndDelete(transaction) {
		return (
			<div className="right floated content">
				<button
					className="ui button primary"
					onClick={() => this.props.updateEditState(transaction)}
				>
					Edit
				</button>
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

	renderSaveAndCancel(transaction) {
		return (
			<div className="right floated content">
				<button
					className="ui button primary"
					// onClick={() => this.props.updateTransaction(transaction)}
				>
					Save
				</button>
				<button className="ui button negative">Cancel</button>
			</div>
		);
	}

	renderTransaction(transaction) {
		if (!transaction.editting) {
			return this.renderViewTransaction(transaction);
		} else {
			console.log('transaction', this.renderEditTransaction(transaction));
			return this.renderEditTransaction(transaction);
		}
	}

	renderTransactions = () => {
		return this.props.transactions.map((transaction) => {
			return this.renderTransaction(transaction);
		});
	};

	render() {
		return (
			<div>
				<h2>Transactions</h2>
				<div className="ui celled list">
					{this.renderTransactions()}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		transactions: Object.values(state.transactions),
	};
};

const validate = (formValues) => {
	const errors = {};

	if (!formValues.type) {
		errors.type = 'Enter a title';
	}

	if (!formValues.source) {
		errors.source = 'Enter a source';
	}

	return errors;
};

const formWrapped = reduxForm({
	form: 'transactionEdit',
	validate: validate,
})(TransactionList);

export default connect(mapStateToProps, {
	fetchTransactions,
	deleteTransaction,
	updateTransaction,
	updateEditState,
})(formWrapped);
