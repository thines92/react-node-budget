import _ from 'lodash';

import {
	FETCH_TRANSACTION,
	FETCH_TRANSACTIONS,
	ADD_TRANSACTION,
	EDIT_TRANSACTION,
	DELETE_TRANSACTION,
} from './types';

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_TRANSACTIONS: {
			return { ...state, ..._.mapKeys(action.payload, '_id') };
		}
		case FETCH_TRANSACTION: {
			return { ...state, [action.payload._id]: action.payload };
		}
		case ADD_TRANSACTION: {
			return { ...state, [action.payload._id]: action.payload };
		}
		case EDIT_TRANSACTION: {
			return { ...state, [action.payload._id]: action.payload };
		}
		case DELETE_TRANSACTION: {
			return _.omit(state, action.payload);
		}
		default:
			return state;
	}
};
