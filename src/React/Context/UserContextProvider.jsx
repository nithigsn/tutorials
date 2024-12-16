import React, {  children,createContext, useEffect, useState } from 'react'




export const UserContext = createContext();



const UserContextProvider = ({children}) => {

    const userURL = "http://localhost:3434/player/signup"

    const [id, setId] = useState(() => {
        const savedId = sessionStorage.getItem('userId');
        return savedId ? savedId : "";
    })

    useEffect(() => {
        sessionStorage.setItem('userId', id)
    }, [id])

    return (
        <UserContext.Provider
            value={{
                id,
                setId,
                userURL
            }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
