import React ,{ useContext, useState } from "react"; 


const AppContext=React.createContext();

const AppProvider=({ children })=>{
    const [value,setValue]=useState(0)
    const [submit,setSubmit]=useState(false)

    return(<AppContext.Provider value={{value,setValue,submit,setSubmit}}>{children}</AppContext.Provider>)
}

const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider ,useGlobalContext}