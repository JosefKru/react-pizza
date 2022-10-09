import './scss/app.scss'
import Header from './Components/Header/Header'
import Categories from './Components/Categories/Categories'
import Sort from './Components/Sort/Sort'
import PizzaBlock from './Components/PizzaBlock/PizzaBlock'
import { useEffect, useState } from 'react'

function App() {
  const [items, setItems] = useState([])
  useEffect(() => {
    fetch('https://6342939b3f83935a78453789.mockapi.io/items')
      .then((res) => res.json())
      .then((data) => setItems(data))
  }, [])
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((pizza) => (
              <PizzaBlock key={pizza.id} items={items} {...pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
