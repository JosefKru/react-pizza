import './scss/app.scss'
import Header from './Components/Header/Header'
import Home from './pages/Home'
import NotFoundBlock from './Components/NotFoundBlock/NotFoundBlock'
import Cart from './pages/Cart'
import { useState } from 'react'
import { Route, Routes } from 'react-router'

function App() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home searchValue={searchValue} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFoundBlock />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
