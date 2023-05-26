import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Button from '../UI/Button';

const Home = () => {
  return (
    <main className={styles.main}>
      <img
        src="https://images.unsplash.com/photo-1567539159398-3174869584e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1460&q=80"
        alt="book"
      />
      <div className={`${styles['main__info']}`}>
        <h1>Welcome to Our BookStore</h1>
        <p>We can help you to find your favourite book!!!</p>
        <Button>
          <Link to="/books">Find Your Book!</Link>
        </Button>
      </div>
    </main>
  );
};

export default Home;
