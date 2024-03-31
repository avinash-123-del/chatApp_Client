import { createContext, useState } from "react";

export const ApiContext = createContext()

export const ApiProvider = ({ children }) => {
    
const userId = localStorage.getItem('userId')
    const [currentChat, setCurrentChat] = useState(null)
    const [socket , setSocket] = useState(null)
    const [room , setRoom] = useState("")
    const [checkOnline , setCheckOnline] = useState(null)



    const value = {
        currentChat, setCurrentChat,
        userId,
        socket, setSocket,
        room , setRoom,
        checkOnline , setCheckOnline
    }

    return (
        <ApiContext.Provider value={value}>
            {children}
        </ApiContext.Provider>
    ) 

}
