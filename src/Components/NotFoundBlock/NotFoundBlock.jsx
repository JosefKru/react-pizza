import React from 'react'
import NotFound from '../../pages/NotFound'
import styles from './NotFoundBlock.module.scss'

function NotFoundBlock() {
  console.log(styles)
  return (
    <>
      {/* <h1 className={styles.root}>Страница не найдена</h1> */}
      <NotFound />
    </>
  )
}

export default NotFoundBlock
