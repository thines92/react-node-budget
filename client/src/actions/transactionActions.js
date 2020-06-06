import transactions from '../apis/transactions'

import { FETCH_TRANSACTIONS, ADD_TRANSACTION, EDIT_TRANSACTION, DELETE_TRANSACTION } from './types'

// export const fetchTransactions = () => ({
//     type: FETCH_TRANSACTIONS,
//     payload: axios.get('http://localhost:9000/api/transaction')
// })

export const fetchTransactions = () => async (dispatch) => {
    const response = await transactions.get('/transaction');
    console.log('fetchTransactions data', response.data)

    dispatch({ type: FETCH_TRANSACTIONS, payload: response.data })
}

// export const addTransaction = (transaction) => {
//     console.log("addTransaction()", transaction)
//     return (dispatch) => {
//         console.log('dispatch', dispatch)
//         const response = dispatch({
//             type: ADD_TRANSACTION,
//             payload: axios.post('http://localhost:9000/api/transaction', transaction).then(response => {
//                 console.log('response', response)
//             })
//         }).then((data) => {
//             console.log('dispatch', dispatch)
//             dispatch(fetchTransactions())
//         })
//     }
// }

export const addTransaction = (transaction) => async (dispatch) => {
    console.log('addTRansaction init')
    const response = await transactions.post('/transaction', { ...transaction });
    console.log('addtransaction response', response.data)

    dispatch({ type: ADD_TRANSACTION, payload: response.data})
}

// export const deleteTransaction = (transactionId) => {
//     return (dispatch) => {
//         const response = dispatch({
//             type: DELETE_TRANSACTION,
//             payload: axios.delete(`http://localhost:9000/api/transaction/${transactionId}`)
//         }).then(() => {
//             dispatch(fetchTransactions())
//         }) 
//     }
// }

export const deleteTransaction = (id) => async (dispatch) => {
    await transactions.delete(`/transaction/${id}`, id);

    dispatch({ type: DELETE_TRANSACTION, payload: id })
}

// export const updateTransaction = (transaction) => {
//     return (dispatch) => {
//         const response = dispatch({
//             type: EDIT_TRANSACTION,
//             payload: axios.put(`http://localhost:9000/api/transaction/${transaction._id}`, transaction)
//         }).then(() => {
//             dispatch(fetchTransactions())
//         })
//     }
// }

export const updateTransaction = (transaction) => async (dispatch) => {
    console.log('updateTransaction', transaction)
    const response = await transactions.put(`/transaction/${transaction._id}`, transaction);
    console.log('updateTransaction data', response.data)
    dispatch({ type: EDIT_TRANSACTION, payload: response.data })
}

export const updateEditState = (transaction) => {
    return {
        type: "UPDATE_EDIT_STATE",
        payload: transaction
    }
}