export default (
  state = {
    transactions: [],
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
      console.log("ADD_TRANSACTION", action)
      return {
        ...state,
        transactions: [...state.transactions],
      };
    }
    case "DELETE_TRANSACTION": {
      return {
        ...state,
        transactions: state.transactions.map(transaction => {
          if (transaction._id !== action.payload._id) {
            return transaction
          }
        }),
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

    case "UPDATE_EDIT_STATE": {
      return {
        ...state,
        transactions: state.transactions.map((transaction, index) => {
          if (transaction._id === action.payload._id) {
            return {
              ...action.payload,
              editting: action.payload.editting
            }
          }
          return transaction
        })
      }
    }
    default:
      return state;
  }
};