import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/Button'
import { ShareIcon } from './icons/ShareIcon'
import { PlusIcon } from './icons/PlusIcon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button variant='secondary' text='Share Brain' startIcon={<ShareIcon/>} />
      <Button variant='primary' text='Add Content' startIcon={<PlusIcon/>} />
    </>
  )
}

export default App
