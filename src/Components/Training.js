import React from 'react';
import styles from '../CSS/Components/Training.module.css';
const Training = () => {
  return (
    <section styles={styles.trainingBg}>
      <div className="container" id={styles.training}>
        <h1 className="font-1-xl cor-10" id={styles.title}>
          F<span className="font-1-l">ormação</span>
        </h1>

        <div id={styles.description}>


          <div className={styles.listItem}>
            <h2 className="font-1-l cor-p7">Origamid</h2>
            <span className='font-2-xs'>Front-End developer</span>
          </div>

          <div className={styles.listItem}>
            <ul id = {styles.list}>
              <li className={styles.itemList + ' cor-10 font-1-s'}>UX|UI DESIGN: <a href="https://www.origamid.com/certificate/c878ba30">https://www.origamid.com/certificate/c878ba30 </a></li>
              <li className={styles.itemList + ' cor-10 font-1-s'}>HTML/CSS: <a href="https://www.origamid.com/certificate/1a1a1edb">https://www.origamid.com/certificate/1a1a1edb </a></li>
              <li className={styles.itemList + ' cor-10 font-1-s'}>JavaScript:  <a href="https://www.origamid.com/certificate/4166d7cb">https://www.origamid.com/certificate/4166d7cb </a></li>
              <li className={styles.itemList + ' cor-10 font-1-s'}>React.js: <a href="https://www.origamid.com/certificate/35deb6a2">https://www.origamid.com/certificate/35deb6a2 </a></li>
            </ul>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Training;
