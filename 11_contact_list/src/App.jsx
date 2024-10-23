import { useState } from 'react'
import './index.css'
import { CreateContactContext } from './Context'
import Form from './Form.jsx'
import AllContact from './AllContact.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <CreateContactContext>
      <Form/>
      <AllContact/>
    </CreateContactContext>
  )
}

export default App
