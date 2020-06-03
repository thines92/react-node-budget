import {
  items
} from "../staticItems";

export default (
  state = {
    transactions: items,
    edittingTransaction: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case "FETCH_TRANSACTIONS": {
      return state
    }
    case "ADD_TRANSACTION": {
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
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
        (transaction) => transaction.id == action.payload.id
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
      return { ...state, edittingTransaction: true, edittedTransaction: action.payload }
    }
    case "SET_VIEW_STATE": {
      return { ...state, edittingTransaction: false }
    }
    default:
      return state;
  }
};