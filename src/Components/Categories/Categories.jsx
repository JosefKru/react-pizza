import { useState } from 'react'

const Categories = () => {
  const [index, setIndex] = useState(0)
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ]
  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li
            key={i} // передаю index в key, так как categories статичный массив
            onClick={() => setIndex(i)}
            className={index === i ? 'active' : ''}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
