import _ from 'lodash'

export default (state = {}, action) => {
    switch (action.type) {
        case "FETCH_TRANSACTIONS": {
            // return {
            //     ...state,
            //     transactions: action.payload,
            // };
            return { ...state, ..._.mapKeys(action.payload, '_id') };
        }
        case "ADD_TRANSACTION": {
            console.log("ADD_TRANSACTION", action.payload);
            // return {
            //     ...state,
            //     transactions: [...state.transactions],
            // };

            return { ...state, [action.payload._id]: action.payload };
        }
        case "DELETE_TRANSACTION": {
            // return {
            //     ...state,
            //     transactions: state.transactions.map((transaction) => {
            //         if (transaction._id !== action.payload._id) {
            //             return transaction;
            //         }
            //     }),
            // };

            return _.omit(state, action.payload);
        }
        case "EDIT_TRANSACTION": {
          console.log("EDIT_TRANSACTION action", action)
            // return {
            //     ...state,
            //     transactions: state.transactions.map((transaction) => {
            //         if (transaction._id === action.payload._id) {
            //             return action.payload;
            //         }

            //         return transaction;
            //     }),
            // };

            return { ...state, [action.payload._id]: action.payload };
        }

        case "UPDATE_EDIT_STATE": {
            // return {
            //     ...state,
            //     transactions: state.transactions.map((transaction, index) => {
            //         if (transaction._id === action.payload._id) {
            //             return {
            //                 ...action.payload,
            //                 editting: action.payload.editting,
            //             };
            //         }
            //         return transaction;
            //     }),
            // };

            return { ...state, [action.payload._id]: action.payload }
        }
        default:
            return state;
    }
};
