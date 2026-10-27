import React,{useState, useContext} from 'react'
import userContext from "../context/UserContext.js"

const Login = () => {

    const [username, setUsename] = useState(' ')
    const [password, setPassword] = useState(' ')

    const {setUser} = useContext(userContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input
        value={username}
        onChange={(e) => {setUsename(e.target.value)}}
        type="text" placeholder="username" />
        <br />
        <br />
        <input 
        value={password}
        onChange={(e) => {setPassword(e.target.value)}}
        type="text" placeholder="password" />
        <br />
        <br />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
