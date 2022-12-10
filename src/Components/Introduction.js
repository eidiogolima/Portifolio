import React from 'react'
import styles from '../CSS/Components/Introduction.module.css';
import Foto from '../assets/img/perfil.jpg';
const Introduction = () => {
  return (
    <section id={styles.homeBg}>
    <div className="container" id = {styles.mainPharse}>
      <div id={styles.img}>
        <img src={Foto} alt="" />
      </div>

      <div id={styles.pharse}>
        <h5 id = {styles.creator} className = "font-2-xs cor-6">(CRIADOR DE SITES)</h5>
        <h1 className="font-1-xl">Desenvolvedor Front-End & UX|UI Design </h1>
        <h5 className='font-1-s' id={styles.online}>Disponivel para novos projetos</h5>

        <div id={styles.buttons}>
          <button>
            {' '}
            <a href = "https://www.linkedin.com/in/diogo-lima-8117bb211/" className="button-border">
              LinkedIn
            </a>
          </button>
          <button>
            {' '}
            <a href = "https://www.behance.net/eidiogolima" className="button-border">
              Behance
            </a>
          </button>
          <button>
            {' '}
            <a href = "https://github.com/eidiogolima" className="button-border">
              GitHub
            </a>
          </button>
        </div>

        <button className='font-1-s cor-6'>VER MAIS </button>
      </div>
    </div>
  </section>
  )
}

export default Introduction