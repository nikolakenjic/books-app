import React, { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className={styles.header}>
      <h1 className={styles['header__title']}>
        <span>#</span>BOOKSTORE
      </h1>
      <div className={styles.links}>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/books">BOOKS</Link>
      </div>
      <div className={styles['toggle__show']}>
        <GiHamburgerMenu
          className={styles['toggle__btn']}
          fontSize={27}
          onClick={() => setToggleMenu((prevValue) => !prevValue)}
        />

        <div
          className={`${styles['toggle__menu']} ${toggleMenu && styles.show}`}
        >
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/books">BOOKS</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
