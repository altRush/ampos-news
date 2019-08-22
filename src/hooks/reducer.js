const reducer = (state, action) => {
  switch (action.type) {
    case 'searchUser':
      return {
        ...state,
        uers: action.searchedUsers
      }

    default:
      return state
  }
}

export default reducer
