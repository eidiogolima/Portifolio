import React from 'react'
import styles from '../CSS/Components/Introduction.module.css';
import Foto from '../assets/img/perfil.jpg';
const Introduction = () => {
  return (
    <section id={styles.homeBg}>
    <div className="container" id = {styles.mainPharse}>
      <div id={styles.img}>
        <img width  = '670' height = '669' src={Foto} alt=""/>
      </div>

      <div id={styles.pharse}>
        <p id = {styles.creator} className = "font-2-xs cor-7">(DESENVOLVEDOR DE SITES)</p>
        <h1 className="font-1-xl">Desenvolvedor Front-End & UX|UI Design </h1>
        <p className='font-1-s' id={styles.online}>Disponivel para novos projetos</p>

        <div id={styles.buttons}>
          <button>
            {' '}
            <a target="_blank" rel="noreferrer noopener"  href = "https://www.linkedin.com/in/diogo-lima-8117bb211/" className="button-border">
              LinkedIn
            </a>
          </button>
          <button>
            {' '}
            <a target="_blank" rel="noreferrer noopener" href = "https://www.behance.net/eidiogolima"  className="button-border">
              Behance
            </a>
          </button>
          <button>
            {' '}
            <a target="_blank" rel="noreferrer noopener"  href = "https://github.com/eidiogolima" className="button-border">
              GitHub
            </a>
          </button>
        </div>

        {/* <button className='font-1-s cor-6'>VER MAIS </button> */}
      </div>
    </div>
  </section>
  )
}

export default Introduction