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

// export const deleteTransaction = (transactionId) => {
//     return {
//         type: "DELETE_TRANSACTION",
//         payload: transactionId
//     }
// }

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