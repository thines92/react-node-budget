import {
  items
} from "../staticItems";

export default (
  state = {
    transactions: [],
    edittingTransaction: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case "FETCH_TRANSACTIONS": {
      return {
        ...state, transactions: action.payload.data
      }
    }
    case "ADD_TRANSACTION": {
      return {
        ...state,
        transactions: [...state.transactions],
      };
    }
    case "DELETE_TRANSACTION": {
      const filteredTransactions = state.transactions.filter(
        (transaction) => transaction.id != action.payload
      );

      return {
        ...state,
        transactions: filteredTransactions,
      };
    }
    case "EDIT_TRANSACTION": {
      const editedTransactionIndex = state.transactions.findIndex(
        (transaction) => transaction._id == action.payload._id
      );
      const editedTransactions = state.transactions.splice(
        editedTransactionIndex, 1, action.payload
      );

      return {
        ...state,
        transactions: state.transactions,
        edittingTransaction: state.edittingTransaction
      };
    }
    case "SET_EDIT_STATE": {
      console.log('action.payload', action.payload)
      return { ...state, edittingTransaction: true, edittedTransaction: action.payload }
    }
    case "SET_VIEW_STATE": {
      return { ...state, edittingTransaction: false, edittedTransaction: null }
    }
    default:
      return state;
  }
};