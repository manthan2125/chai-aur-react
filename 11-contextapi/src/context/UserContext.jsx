import React from 'react'
import { createContext } from 'react';

export const DataContext = createContext()

const UserContext = ({ children }) => {

    const user = 'Manthan';
    return (
        <div>
            <DataContext.Provider value={user}>
                {children}
            </DataContext.Provider>
        </div>
    )
}

export default UserContext
