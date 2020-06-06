import axios from 'axios'

export const fetchTransactions = () => ({
    type: "FETCH_TRANSACTIONS",
    payload: axios.get('http://localhost:9000/api/transaction')
})

export const addTransaction = (transaction) => {
    return (dispatch) => {
        const response = dispatch({
            type: "ADD_TRANSACTION",
            payload: axios.post('http://localhost:9000/api/transaction', transaction).then(response => {
                console.log('response', response)
            })
        }).then((data) => {
            dispatch(fetchTransactions())
        })
    }
}

export const deleteTransaction = (transactionId) => {
    return (dispatch) => {
        const response = dispatch({
            type: "DELETE_TRANSACTION",
            payload: axios.delete(`http://localhost:9000/api/transaction/${transactionId}`)
        }).then(() => {
            dispatch(fetchTransactions())
        }) 
    }
}

export const updateTransaction = (transaction) => {
    return (dispatch) => {
        const response = dispatch({
            type: "EDIT_TRANSACTION",
            payload: axios.put(`http://localhost:9000/api/transaction/${transaction._id}`, transaction)
        }).then(() => {
            dispatch(fetchTransactions())
        })
    }
}

export const updateEditState = (transaction) => {
    return {
        type: "UPDATE_EDIT_STATE",
        payload: transaction
    }
}