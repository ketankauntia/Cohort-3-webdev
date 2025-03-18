import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/Button'
import { ShareIcon } from './components/icons/ShareIcon'

function App() {

  return (
    <>
      <Button variant="primary" size="lg" text={"Primary Button"} startIcon={<ShareIcon />} onClick={()=>{}} />
      <Button variant="secondary" size="lg" text={"Secondary Button"} startIcon={<ShareIcon />} onClick={()=>{}} />
    </>
  )
}

export default App
