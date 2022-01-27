import React,{ useState, useReducer } from 'react'

const BookingContext = React.createContext();

// Khởi tạo default data
const initialData = {
  selectClinic: null
}

// udate state thông qua action dispatch
// cách call: 
// dispatch({type: 'SELECT_CLINIC', clinicID: 1 })
const actionReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_CLINIC': {
      let {clinic}  = action;
      return {...state, selectClinic: clinic}
    }
    default:
      return state
  }
}


const BookingContextProvider = ({children}) => {
  
  const[state, dispatch] = useReducer(actionReducer, initialData)
  return (
    <BookingContext.Provider value={{
      selectClinic: state.selectClinic,
      dispatchBooking: dispatch
    }}>
      {children}
    </BookingContext.Provider>
  )
}

export {
  BookingContext,
  BookingContextProvider,
}
