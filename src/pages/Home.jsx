import { useEffect, useState } from 'react'
import PizzaBlock from './../Components/PizzaBlock/PizzaBlock'
import Skeleton from './../Components/PizzaBlock/Skeleton'
import Categories from './../Components/Categories/Categories'
import Sort from './../Components/Sort/Sort'
import '../scss/app.scss'
import client from './../contentful/index'

function Home() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)

    client
      .getEntries({
        content_type: 'home',
        limit: 2,
      })
      .then((response) => {
        const [items] = response.items
        setItems(items.fields.items)
        setIsLoading(false)
      })
  }, [])

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
          : items.map((pizza) => (
              <PizzaBlock key={pizza.id} items={items} {...pizza} />
            ))}
      </div>
    </div>
  )
}

export default Home
