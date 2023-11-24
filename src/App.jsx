import { useState } from 'react'

import './App.css'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const [loggedIn, setLoggedIn] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === `${name}@gmail.com` && password === '12345') {
      setLoggedIn(true),
      setErrorMessage('')
    } else {
      setErrorMessage('Incorrect username, email pr password.')
    }
      
    
    
  }
  return (
    <>
        <div className='form'>
      {!loggedIn ? (
        <form onSubmit={handleSubmit}>
          <label>
            
            <input placeholder='Name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <label>
            
            <input placeholder='Email' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label>
            <input placeholder='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button type="submit" className='btn'>Login</button>
        </form>
      ) : (
        <h1>Welcome, {name}</h1>
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
    </>
  )
}

export default App
