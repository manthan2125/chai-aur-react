import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App | Manthan</h1>
        </div>
    )
}

const anotherUser = "Chai or Coffee with ManthanKirti"
const reactElement = React.createElement(
    'a',
    {
        href: 'https://google.com',
        target: '_blank'
    },
    'Click me to Visit google | ManthanKirti ',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).
render(
    <App />
    // <MyApp />
    // reactElement
)
