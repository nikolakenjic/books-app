import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../UI/Button';
import styles from './BookDetails.module.css';
import DataContext from '../context/DataContext';
import BooksRow from './BooksRow';

const BookDetails = () => {
  const params = useParams();
  const { books } = useContext(DataContext);

  const [bookDetails, setBookDetails] = useState([]);

  useEffect(() => {
    const fetchDataDetails = async () => {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${params.id}`
      );
      const data = await response.json();
      setBookDetails(data);
    };

    fetchDataDetails();
  }, [params.id]);

  return (
    <div>
      <Button>
        <Link to=".." relative="path">
          Back
        </Link>
      </Button>
      <div className={styles['book__details']}>
        <img
          className={styles['book__details-img']}
          src={
            bookDetails.volumeInfo?.imageLinks?.medium ||
            bookDetails.volumeInfo?.imageLinks?.thumbnail
          }
          alt="pics"
        />

        <div className={styles['book__details-info']}>
          <h1>{bookDetails.volumeInfo?.title}</h1>
          <h3>{bookDetails.volumeInfo?.categories}</h3>
          <p>{bookDetails.volumeInfo?.description}</p>
        </div>
      </div>

      <BooksRow books={books} />
    </div>
  );
};

export default BookDetails;
