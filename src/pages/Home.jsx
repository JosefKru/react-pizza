import { useContext, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice'
import { SearchContext } from './../App'
import PizzaBlock from './../Components/PizzaBlock/PizzaBlock'
import Skeleton from './../Components/PizzaBlock/Skeleton'
import Categories from './../Components/Categories/Categories'
import Sort from './../Components/Sort/Sort'
import Pagination from './../Components/Pagination/index'
import '../scss/app.scss'
import axios from 'axios'

function Home() {
  const { categoryId, sortType, currentPage } = useSelector(
    (state) => state.filter
  )
  const dispatch = useDispatch()
  const onClickCategory = (id) => {
    dispatch(setCategoryId(id))
  }

  const onChangePage = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber))
  }

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { searchValue } = useContext(SearchContext)

  useEffect(() => {
    setIsLoading(true)

    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const sortBy = sortType.sortProperty.replace('-', '')
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'

    axios
      .get(
        `https://6342939b3f83935a78453789.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}`
      )
      .then((response) => {
        setItems(response.data)
        setIsLoading(false)
      })
  }, [categoryId, sortType, searchValue, currentPage])

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(id) => onClickCategory(id)}
        />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
          : items
              .filter((obj) =>
                obj.title.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((pizza) => (
                <PizzaBlock key={pizza.id} items={items} {...pizza} />
              ))}
      </div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  )
}

export default Home
