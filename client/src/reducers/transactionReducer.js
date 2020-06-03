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
      return {
        ...state,
        transactions: state.transactions.map(transaction => {
          if (transaction._id === action.payload._id) {
            return action.payload
          }

          return transaction
        })
      };
    }

    case "SET_EDIT_STATE": {
      return {
        ...state,
        transactions: state.transactions.map((transaction, index) => {
          if (transaction._id === action.payload._id) {
            return action.payload
          }

          return transaction
        })
      }
    }
    default:
      return state;
  }
};