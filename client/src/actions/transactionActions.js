import axios from 'axios'

// export const fetchTransactions = (transactions, data) => {
//     console.log('transactions', transactions);
//     console.log('transaction data', data)
//     return {
//         type: "FETCH_TRANSACTIONS",
//         payload: data
//     }
    
// }

export const fetchTransactions = () => ({
    type: "FETCH_TRANSACTIONS",
    payload: axios.get('http://localhost:9000/api/transaction')
})

export function getTransactions(transactions) {
    return function (dispatch) {
        dispatch(fetchTransactions(transactions))

        return axios.get('http://localhost:9000/api/transaction')
        .then(response => response.data)
        .then(data => {
            console.log('data', data)
            dispatch(fetchTransactions(transactions, data))
        })
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