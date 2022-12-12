import React from 'react';
import styles from '../CSS/Components/Footer.module.css';
const Footer = () => {
  return (
    <footer id={styles.footerBg}>
      <div className="container" id={styles.footer}>
        <div id={styles.grid}>
          <h1 className="font-1-l cor-2">DIOGO</h1>
          <div className={styles.cardFooter}>
            <h3 className={styles.title + ' font-1-l cor-2'}>Contatos</h3>
            <ul className={styles.list}>
              <li className={styles.item + ' font-2-s cor-6'}>
                {' '}
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="mailto:eidiogoadm@gmail.com"
                >
                  Email
                </a>{' '}
              </li>
              <li className={styles.item + ' font-2-s cor-6'}>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://wa.me/5511915647291"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <p className="font-2-l cor-4">
            Obrigado pela sua visita, considere deixar uma mensagem se gostou do
            meu trabalho clicando{' '}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://wa.me/5511915647291"
              className="cor-p1"
            >
              aqui
            </a>
          </p>
        </div>

        <div id={styles.copy}>
          <p className="font-2-xs cor-4">
            {' '}
            ©️2022 - Diogo Lima - Todos os direitos reservados{' '}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
