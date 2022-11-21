
//sent type (if Add run Case 2 )

export default (state, action) => {
  switch(action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }
    case 'ADD_TRANSACTION':
      return {
        //save old state
        ...state,
        //add new transaction to old one
        transactions: [action.payload, ...state.transactions]
      }
    default:
      return state;
  }
}