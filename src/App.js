import './scss/app.scss'
import Header from './Components/Header/Header'
import Home from './pages/Home'
import NotFoundBlock from './Components/NotFoundBlock/NotFoundBlock'

import { Route, Routes } from 'react-router'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="" element={<Home />} />
            <Route path="*" element={<NotFoundBlock />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
