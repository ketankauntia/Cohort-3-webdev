import { useState } from "react";
import "./App.css";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ShoppingPage from "./components/ShoppingPage";
import PurchaseModal from "./components/PurchaseModal";
import ProductPage from "./components/ProductPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RecoilRoot>
        <Router>
          <div className="app-container">
            <Navbar />
            <Routes>
              <Route path="/" element={<ProductPage />} />
              <Route path="/cart" element={<ShoppingPage />} />
            </Routes>
            {/* <div className="pr-modal-cont">
            <PurchaseModal />
            </div> */}
          </div>
        </Router>
      </RecoilRoot>
    </>
  );
}

export default App;
