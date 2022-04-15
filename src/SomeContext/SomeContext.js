import { useState, createContext } from 'react'

const ShowContext = createContext()

function ShowProvider({ children }) {
    const [alert, setAlert] = useState('hide')

    const toggleAlert = () => {
        setAlert(alert === 'hide' ? 'show' : 'hide')
    }

    const value = {
        alert,
        toggleAlert
    }
    return (
        <ShowContext.Provider value={value}>
            {children}
        </ShowContext.Provider>
    )
}

export { ShowContext, ShowProvider }