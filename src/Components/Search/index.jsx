import React, { useCallback, useContext, useRef, useState } from 'react'
import styles from './Search.module.scss'
import search from '../../assets/icons/search-icon.png'
import close from '../../assets/icons/close-icon.png'
import { SearchContext } from '../../App'
import debounce from 'lodash.debounce'

function Search() {
  const { setSearchValue } = useContext(SearchContext)
  const [value, setValue] = useState('')
  const inputRef = useRef()

  const updateSearchValue = useCallback(
    debounce((str) => {
      console.log(str)
      setSearchValue(str)
    }, 400),
    []
  )

  const onClickClear = () => {
    setSearchValue('')
    setValue('')
    inputRef.current.focus()
  }

  const onChangeInput = (e) => {
    setValue(e.target.value)
    updateSearchValue(e.target.value)
  }

  return (
    <div className={styles.root}>
      <img className={styles.icon} src={search} alt="search" />
      <input
        ref={inputRef}
        onChange={onChangeInput}
        value={value}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {value && (
        <img
          alt="clear"
          className={styles.clearIcon}
          src={close}
          onClick={onClickClear}
        />
      )}
    </div>
  )
}

export default Search
