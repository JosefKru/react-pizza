import './scss/app.scss'
import Header from './Components/Header/Header'
import Home from './pages/Home'
import NotFoundBlock from './Components/NotFoundBlock/NotFoundBlock'

import { Route, Routes } from 'react-router'
import Cart from './pages/Cart'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFoundBlock />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
