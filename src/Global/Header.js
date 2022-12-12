import React from 'react';
import styles from '../CSS/Global/Components/Header.module.css';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header id={styles.headerBg}>
      <nav className="container" id={styles.nav}>
        <h1 className="font-1-l">
          {' '}
          <Link to="/">DIOGO LIMA</Link>{' '}
        </h1>

        <ul id={styles.navList}>
          {/* <a href="projects" className="font-1-s">
            Projetos
          </a>
          <Link to="blog" className="font-1-s">
            Blog
          </Link> */}
          <li>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://wa.me/5511915647291"
              className="button-border font-1-s"
            >
              {' '}
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
