import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from 'react-bootstrap/Form'

const KEY = 'fca_live_g8psjoZmt4fMQik3MIkdDyYhsL4glGwRSj9gUz8N'
const URL = 'https://app.freecurrencyapi.com/dashboard'
function Select() {
  return (
    <Form.Select>
      <option>Select Currency</option>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
    </Form.Select>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Select />
      </div>
    </>
  )
}

export default App
