import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'

const Pagination = ({ onChangePage, currentPage }) => {
  const handlePageClick = (event) => {
    onChangePage(event.selected + 1)
  }
  return (
    <div>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={currentPage - 1}
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default Pagination
