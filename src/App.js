import './scss/app.scss'
import Header from './Components/Header/Header'
import Categories from './Components/Categories/Categories'
import Sort from './Components/Sort/Sort'
import PizzaBlock from './Components/PizzaBlock/PizzaBlock'

import { Route, Routes } from 'react-router'
import NotFoundBlock from './Components/NotFoundBlock/NotFoundBlock'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <NotFoundBlock />
          <Routes>
            <Route />
            <Route />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
