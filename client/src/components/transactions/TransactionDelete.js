import React from 'react';
import _ from 'lodash';
import TransactionForm from './TransactionForm';
import {
	fetchTransaction,
	deleteTransaction,
} from '../../actions/transactionActions';
import { connect } from 'react-redux';

class TransactionDelete extends React.Component {
	render() {
		return <div>DeleteTransaction</div>;
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
