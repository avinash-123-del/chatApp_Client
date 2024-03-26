import { createContext, useState } from "react";

export const ApiContext = createContext()

export const ApiProvider = ({ children }) => {
    
const userId = localStorage.getItem('userId')
    const [currentChat, setCurrentChat] = useState(null)
    

    const value = {
        currentChat, setCurrentChat,userId
    }

    return (
        <ApiContext.Provider value={value}>
            {children}
        </ApiContext.Provider>
    ) 

}
