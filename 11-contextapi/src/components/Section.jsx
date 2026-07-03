import {React, useContext} from 'react'
import { DataContext } from '../context/UserContext'
const Section = () => {
    const naam = useContext(DataContext)
    return (
        <div>
            <h1>Section - {naam}</h1>
        </div>
    )
}

export default Section
