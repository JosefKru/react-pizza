import React from 'react'
import NotFound from '../../pages/NotFound'
import styles from './NotFoundBlock.module.scss'

function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <span>&#128533;</span>
      <h1>Ничего не найдено</h1>
      <p className={styles.description}>
        К сожалению данная страница отсутсвует
      </p>
    </div>
  )
}

export default NotFoundBlock
