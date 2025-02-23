import { useState } from 'react'
import './App.css'
import {RecoilRoot} from "recoil"
import Navbar from './components/Navbar'
import ShoppingPage from './components/ShoppingPage'
import PurchaseModal from './components/PurchaseModal'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RecoilRoot>
        <div className="app-container">
          <Navbar />
          {/* <ShoppingPage /> */}
          <div className="pr-modal-cont">
            <PurchaseModal />
          </div>
        </div>
      </RecoilRoot>
    </>
  )
}

export default App
