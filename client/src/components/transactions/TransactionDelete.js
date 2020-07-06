import React from 'react';
import Modal from '../Modal';
import {
	fetchTransaction,
	deleteTransaction,
} from '../../actions/transactionActions';
import { connect } from 'react-redux';

class TransactionDelete extends React.Component {
	componentDidMount() {
		this.props.fetchTransaction();
	}

	renderContent() {
		return;
	}

	renderActions() {
		return;
	}

	render() {
		return (
			<Modal
				title="Delete Stream"
				content={this.renderContent}
				actions={this.renderActions}
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
	deleteTransaction,
	fetchTransaction,
})(TransactionDelete);
