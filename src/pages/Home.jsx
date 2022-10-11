import { useEffect, useState } from 'react'
import PizzaBlock from './../Components/PizzaBlock/PizzaBlock'
import Skeleton from './../Components/PizzaBlock/Skeleton'
import Categories from './../Components/Categories/Categories'
import Sort from './../Components/Sort/Sort'

function Home() {
  const [items, setItems] = useState([])
  const [isLoadig, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    fetch('https://6342939b3f83935a78453789.mockapi.io/items')
      .then((res) => res.json())
      .then((data) => {
        setItems(data)
        setIsLoading(false)
      })
  }, [])
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoadig
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((pizza) => (
              <PizzaBlock key={pizza.id} items={items} {...pizza} />
            ))}
      </div>
    </>
  )
}

export default Home
