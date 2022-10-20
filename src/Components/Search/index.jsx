import React, { useContext } from 'react'
import styles from './Search.module.scss'
import search from '../../assets/icons/search-icon.png'
import close from '../../assets/icons/close-icon.png'
import { SearchContext } from '../../App'

function Search() {
  const { searchValue, setSearchValue } = useContext(SearchContext)
  return (
    <div className={styles.root}>
      <img className={styles.icon} src={search} alt="search" />
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {searchValue && (
        <img
          alt="clear"
          className={styles.clearIcon}
          src={close}
          onClick={() => setSearchValue('')}
        />
      )}
    </div>
  )
}

export default Search
