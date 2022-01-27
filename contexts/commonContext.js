import React, { useContext } from 'react'
import { icons, images, COLORS, SIZES, FONTS } from '../constants'
import Helpers from '../plugins/helpers'

const CommonContext = React.createContext();

const CommonProvider = ({children}) => {

  const constants =  {
    COLORS, SIZES, FONTS, icons, images,
  }

  return (
    <CommonContext.Provider value={{
        constants,
        helpers: Helpers
      }}>
      {children}
    </CommonContext.Provider>
  )
}

export { 
  CommonContext,
  CommonProvider
}