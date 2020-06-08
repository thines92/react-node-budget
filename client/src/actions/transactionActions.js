import history from '../history';
import transactions from '../apis/transactions';

import {
	FETCH_TRANSACTION,
	FETCH_TRANSACTIONS,
	ADD_TRANSACTION,
	EDIT_TRANSACTION,
	DELETE_TRANSACTION,
} from './types';

export const fetchTransaction = (id) => async (dispatch) => {
	const response = await transactions.get(`/transaction/${id}`);

	dispatch({ type: FETCH_TRANSACTION, payload: response.data });
};

export const fetchTransactions = () => async (dispatch) => {
	const response = await transactions.get('/transaction');

	dispatch({ type: FETCH_TRANSACTIONS, payload: response.data });
};

export const createTransaction = (transaction) => async (dispatch) => {
	const response = await transactions.post('/transaction', {
		...transaction,
	});

	dispatch({ type: ADD_TRANSACTION, payload: response.data });
	history.push('/');
};

export const editTransaction = (id, transaction) => async (dispatch) => {
	const response = await transactions.patch(
		`/transaction/${id}`,
		transaction
	);

	dispatch({ type: EDIT_TRANSACTION, payload: response.data });
	history.push('/');
};

export const deleteTransaction = (id) => async (dispatch) => {
	await transactions.delete(`/transaction/${id}`, id);

	dispatch({ type: DELETE_TRANSACTION, payload: id });
};
