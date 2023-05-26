import React, { useRef } from 'react';
import styles from './BooksRow.module.css';
import { Link } from 'react-router-dom';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const BooksRow = ({ books }) => {
  const refResize = useRef(null);

  // Scroll
  const scrollX = (scroll) => {
    if (refResize.current) {
      refResize.current.scrollLeft += scroll;
    }
  };

  // Related Books List
  const listOfBooks = books?.map((book) => (
    <Link key={book.id} to={`/books/${book.id}`}>
      <img
        className={styles['book__list-img']}
        src={
          book.volumeInfo?.imageLinks?.medium ||
          book.volumeInfo?.imageLinks?.thumbnail
        }
        alt="pics"
      />
    </Link>
  ));

  return (
    <div className={styles['books__list']} ref={refResize}>
      <button
        type="button"
        onClick={() => scrollX(-90)}
        className={`${styles['books__list-scroll']} ${styles['books__list-scroll__left']}`}
      >
        <RiArrowLeftSLine size={60} />
      </button>
      <button
        type="button"
        onClick={() => scrollX(90)}
        className={`${styles['books__list-scroll']} ${styles['books__list-scroll__right']}`}
      >
        <RiArrowRightSLine size={60} />
      </button>
      {listOfBooks}
    </div>
  );
};

export default BooksRow;
