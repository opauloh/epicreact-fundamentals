// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

const errorStyle = {
  color: 'red',
}
function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef('')
  const [error, setError] = React.useState(null)
  const handleSubmit = event => {
    event.preventDefault()
    alert(inputRef.current.value)
  }

  const handleChange = event => {
    const error =
      inputRef.current.value !== inputRef.current.value.toLowerCase()
        ? 'username must be lower case'
        : null
    setError(error)
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
          ref={inputRef}
        />
        {error && (
          <div role="alert" style={errorStyle}>
            {error}
          </div>
        )}
      </div>
      <button disabled={error} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
