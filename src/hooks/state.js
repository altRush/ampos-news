// state.js is being used for maintaining the global state for the entire app

import React, { createContext, useContext, useReducer } from 'react'
export const StateContext = createContext()
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)
export const useStateValue = () => useContext(StateContext)
