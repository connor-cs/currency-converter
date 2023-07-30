import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Select from './components/Select'

//first make a form
//then make use effect to get pairs only on load
//

const KEY = 'fca_live_g8psjoZmt4fMQik3MIkdDyYhsL4glGwRSj9gUz8N'
const URL = 'https://app.freecurrencyapi.com/dashboard'



function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='main'>
        <Select />
      </div>
  )
}

export default App
