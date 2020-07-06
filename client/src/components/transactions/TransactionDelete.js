import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import {
	fetchTransaction,
	deleteTransaction,
} from '../../actions/transactionActions';

class TransactionDelete extends React.Component {
	componentDidMount() {
		console.log(this.props);
		this.props.fetchTransaction(this.props.match.params.id);
	}

	renderContent() {
		if (!this.props.transaction) {
			return 'Are you sure you want to delete this transaction:';
		}

		return `Are you sure you want to delete this transaction: ${this.props.transaction.source}`;
	}

	renderActions() {
		const { id } = this.props.match.params;

		return (
			<React.Fragment>
				<button
					onClick={() => this.props.deleteTransaction(id)}
					className="ui button negative"
				>
					Delete
				</button>
				<Link to="/" className="ui button">
					Cancel
				</Link>
			</React.Fragment>
		);
	}

	render() {
		return (
			<Modal
				header="Delete Transaction"
				content={this.renderContent()}
				actions={this.renderActions()}
				onDismiss={() => history.push('/')}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	console.log(state);
	return {
		transaction: state.transactions[ownProps.match.params.id],
	};
};

export default connect(mapStateToProps, {
	deleteTransaction,
	fetchTransaction,
})(TransactionDelete);
