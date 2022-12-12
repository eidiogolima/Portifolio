import React from 'react';
import Footer from '../../Components/Footer';
import Introduction from '../../Components/Introduction';
import Projects from '../../Components/Projects';
import Training from '../../Components/Training';
import WhyCreateSite from '../../Components/WhyCreateSite';
import Head from '../../Global/Head';
// import styles from '../../CSS/Pages/Home.module.css';

const Home = () => {
  return (
    <>
      <Head
        title="Diogo Lima | Desenvolvedor de sites"
        description="Olá sou Diogo Lima Desenvolvedor de sites e UX|UI Designer, tenha o seu site feito em pouco tempo mas com muita qualidade, aplie seu negocio com um site, seus concorrentes já tem só falta você!"
      />
      <Introduction />
      <Projects />
      <Training />
      <WhyCreateSite />
      <Footer />
    </>
  );
};

export default Home;
