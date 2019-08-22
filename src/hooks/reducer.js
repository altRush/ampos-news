const reducer = (state, action) => {
  switch (action.type) {
    case 'searchSubmit':
      return {
        ...state,
        text: action.newSearch
      }

    default:
      return state
  }
}

export default reducer
