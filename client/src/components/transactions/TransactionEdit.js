import React from 'react';
import _ from 'lodash';
import Modal from '../Modal';
import history from '../../history';
import TransactionForm from './TransactionForm';
import {
	fetchTransaction,
	editTransaction,
} from '../../actions/transactionActions';
import { connect } from 'react-redux';

class TransactionEdit extends React.Component {
	componentDidMount() {
		this.props.fetchTransaction(this.props.match.params.id);
	}

	onSubmit = (formValues) => {
		this.props.editTransaction(this.props.match.params.id, formValues);
	};

	renderContent() {
		return (
			<React.Fragment>
				<h2>Edit a Transaction</h2>
				<div className="ui celled list">
					<TransactionForm
						initialValues={_.pick(this.props.transaction, [
							'type',
							'source',
						])}
						onSubmit={this.onSubmit}
					/>
				</div>
			</React.Fragment>
		);
	}

	render() {
		return (
			<Modal
				title="Edit Stream"
				content={this.renderContent()}
				onDismiss={() => history.push('/')}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		transaction: state.transactions[ownProps.match.params.id],
	};
};

export default connect(mapStateToProps, {
	editTransaction,
	fetchTransaction,
})(TransactionEdit);
