import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Footer = () => {

    const naaam  = useContext(DataContext)
    return (
        <div>
            <h1>Footer - {naaam}</h1>
        </div>
    )
}

export default Footer
