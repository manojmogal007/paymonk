import React, { createContext, useState } from 'react'


export const Context=createContext()

const Contextprovider = ({children}) => {
    const [users,setusers]=useState([])

    const values={users,setusers}
  return (
    <Context.Provider value={values} >{children}</Context.Provider>
  )
}

export default Contextprovider