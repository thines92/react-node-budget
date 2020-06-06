import transactions from "../apis/transactions";

import {
    FETCH_TRANSACTIONS,
    ADD_TRANSACTION,
    EDIT_TRANSACTION,
    DELETE_TRANSACTION,
} from "./types";

export const fetchTransactions = () => async (dispatch) => {
    const response = await transactions.get("/transaction");

    dispatch({ type: FETCH_TRANSACTIONS, payload: response.data });
};

export const addTransaction = (transaction) => async (dispatch) => {
    const response = await transactions.post("/transaction", {...transaction});

    dispatch({ type: ADD_TRANSACTION, payload: response.data });
};

export const updateTransaction = (transaction) => async (dispatch) => {
    const response = await transactions.put(
        `/transaction/${transaction._id}`,
        transaction
    );
    dispatch({ type: EDIT_TRANSACTION, payload: response.data });
};

export const deleteTransaction = (id) => async (dispatch) => {
    await transactions.delete(`/transaction/${id}`, id);

    dispatch({ type: DELETE_TRANSACTION, payload: id });
};

export const updateEditState = (transaction) => {
    return {
        type: "UPDATE_EDIT_STATE",
        payload: transaction,
    };
};
