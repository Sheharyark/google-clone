// import React, { createContext, useContext, useReducer } from 'react'

// //preparing for data layer...
// export const StateContext = createContext()
// export const actionTypes = {
//   SET_SEARCH_TERM: 'SET_SEARCH_TERM',
// }
// const reducer = (state, action) => {
//   console.log(action)
//   switch (action.type) {
//     case actionTypes.SET_SEARCH_TERM:
//       return {
//         ...state,
//         term: action.term,
//       }
//     default:
//       return state
//   }
// }

// export const StateProvider = ({ children }) => {
//   let reducerValue = useReducer(reducer, { term: null })

//   return (
//     <StateContext.Provider value={reducerValue}>
//       {children}
//     </StateContext.Provider>
//   )
// }

// //hook which allows us to pull information from data layer...
// export const useStateValue = () => useContext(StateContext)

import React, { createContext, useContext, useReducer } from 'react'

//Preparing the data layer
export const StateContext = createContext()

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

//hook which allows us to pull information from the data layer
export const useStateValue = () => useContext(StateContext)
