// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

const errorStyle = {
  color: 'red',
}
function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState(null)

  const handleChange = event => {
    setUsername(event.target.value.toLowerCase())
  }
  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(username)
  }
  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleChange}
          value={username}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
