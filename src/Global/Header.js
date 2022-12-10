import React from 'react'
import styles from '../CSS/Global/Components/Header.module.css';

import {Link} from 'react-router-dom';

const Header = () => {


  return (
    <header id = {styles.headerBg}>
      <nav className='container' id = {styles.nav}>

        <h1 className='font-1-l'> <Link to = '/'>DIOGO LIMA</Link> </h1>

        <ul id= {styles.navList}>
          <Link to = 'projetos' className='font-1-s'>Projetos</Link>
          <Link to = 'blog' className='font-1-s'>Blog</Link>
          <Link to = 'contato' className='button-border font-1-s'> Contato</Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header