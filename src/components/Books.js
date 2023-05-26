import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import styles from './Books.module.css';
import DataContext from '../context/DataContext';

import SearchIcon from '@material-ui/icons/Search';

const Books = () => {
  const nameInputRef = useRef();
  const { search, setSearch, books, isLoading } = useContext(DataContext);

  const [filteredBooks, setFilteredBooks] = useState([]);
  const [showAll, setShowAll] = useState(false);

  // Submit Search
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchName = nameInputRef.current.value;

    setSearch(searchName);
  };

  // Change Search
  const handleSearchByAuthor = () => {
    const filtered = books.filter((book) =>
      book.volumeInfo.authors?.some((author) =>
        author.toLowerCase().includes(search.toLowerCase())
      )
    );
    setFilteredBooks(filtered);
    setShowAll(true);
  };

  const handleSearchByTitle = () => {
    const filtered = books.filter((book) =>
      book.volumeInfo.title?.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredBooks(filtered);
    setShowAll(true);
  };

  const handleSearchAll = () => {
    setFilteredBooks(books);
    setShowAll(false);
  };

  const filteredList = filteredBooks.length > 0 ? filteredBooks : books;

  // List of books
  const bookList = filteredList?.map((book) => {
    let thumbnail = book.volumeInfo.imageLinks?.thumbnail;
    let title = book.volumeInfo.title;
    let authors = book.volumeInfo.authors;

    return (
      <div key={book.id} className={styles['book__container']}>
        <Link to={book.id}>
          <img
            src={thumbnail}
            alt={book.volumeInfo.title}
            className={styles['book__img']}
          />
          <div className={styles['book__info']}>
            <h3>{title}</h3>
            <h4>{authors}</h4>
            {<p>{book.volumeInfo.publishedDate}</p>}
          </div>
        </Link>
      </div>
    );
  });

  //   JSX
  return (
    <>
      <form className={styles.search} onSubmit={handleSubmit}>
        <input
          className={styles['search__input']}
          placeholder="Search"
          ref={nameInputRef}
          required
        />
        <button type="submit" className={styles.btn}>
          <SearchIcon />
        </button>
      </form>
      {search.length > 0 && (
        <div className={styles['search__btns']}>
          <Button onClick={handleSearchByAuthor}>Search by Author</Button>
          <Button onClick={handleSearchByTitle}>Search by Title</Button>
          {showAll && <Button onClick={handleSearchAll}>All</Button>}
        </div>
      )}

      {isLoading ? (
        <h1 className={styles.loading}>Loading...</h1>
      ) : (
        <div className={`${styles['books__list']}`}>{bookList}</div>
      )}
    </>
  );
};

export default Books;
