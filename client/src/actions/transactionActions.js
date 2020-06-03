export const fetchTransactions = () => {
    return {
        type: "FETCH_TRANSACTIONS"
    }
}

export const addTransaction = (transaction) => {
    return {
        type: "ADD_TRANSACTION",
        payload: transaction
    }
}

export const deleteTransaction = (transactionId) => {
    return {
        type: "DELETE_TRANSACTION",
        payload: transactionId
    }
}

export const editTransaction = (transaction) => {
    return {
        type: "EDIT_TRANSACTION",
        payload: transaction
    }
}

export const setEditState = (transactionId) => {
    return {
        type: "SET_EDIT_STATE",
        payload: transactionId
    }
}

export const setViewState = () => {
    return {
        type: "SET_VIEW_STATE"
    }
}