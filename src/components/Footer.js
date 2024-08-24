import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className={styles.footer}>
      <h3>
        NK
        <span> &copy; </span>
        {year}
      </h3>
    </div>
  );
};

export default Footer;
