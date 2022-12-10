import React from 'react';
import styles from '../CSS/Components/Projects.module.css';
import Card from './Card';
import MotorsHibrid from '../assets/img/MotorsHibrid.jpg';
import SixCode from '../assets/img/Six-code.jpg';
import Thiago from '../assets/img/Thiago.jpg';
import Calhas from '../assets/img/Calhas.jpg';
import Imobiliaria from '../assets/img/Imobiliaria.jpg';
import Bolos from '../assets/img/bolos.jpg';
const Projects = () => {
  return (
    <section id={styles.projectsBg}>
      <div className="container" id={styles.project}>
        <div id={styles.title}>
          <h1 className="font-1-xl cor-2">
            P<span className="font-1-l">rojetos</span>
          </h1>
        </div>

        <div id={styles.carroselCard}>
          <Card img={MotorsHibrid} nome="MotorsHibrid" link = ''/>
          <Card img={SixCode} nome="Six Code" />
          <Card img={Thiago} nome="Landing Page" />
        </div>

        <div id={styles.carroselCard}>
          <Card img={Imobiliaria} nome="Imobiliaria" />
          <Card img={Bolos} nome="Bolos Thay" />
          <Card img={Calhas} nome="Calhas" />
        </div>


      </div>
    </section>
  );
};

export default Projects;
