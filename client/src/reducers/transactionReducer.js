import _ from 'lodash';

export default (state = {}, action) => {
	switch (action.type) {
		case 'FETCH_TRANSACTIONS': {
			return { ...state, ..._.mapKeys(action.payload, '_id') };
		}
		case 'FETCH_TRANSACTION': {
			return { ...state, [action.payload._id]: action.payload };
		}
		case 'ADD_TRANSACTION': {
			return { ...state, [action.payload._id]: action.payload };
		}
		case 'EDIT_TRANSACTION': {
			return { ...state, [action.payload._id]: action.payload };
		}
		case 'DELETE_TRANSACTION': {
			return _.omit(state, action.payload);
		}
		case 'UPDATE_EDIT_STATE': {
			return {
				...state,
				[action.payload._id]: {
					...action.payload,
					editting: !action.payload.editting,
				},
			};
		}
		default:
			return state;
	}
};
