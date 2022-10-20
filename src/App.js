import './scss/app.scss'
import Header from './Components/Header/Header'
import Home from './pages/Home'
import NotFoundBlock from './Components/NotFoundBlock/NotFoundBlock'
import Cart from './pages/Cart'
import { createContext, useState } from 'react'
import { Route, Routes } from 'react-router'

export const SearchContext = createContext()

function App() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFoundBlock />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  )
}

export default App
