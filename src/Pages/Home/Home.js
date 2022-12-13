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
        description="Olá me chamo Diogo Lima e sou Desenvolvedor de sites e UX|UI Designer. Tenha o seu site feito por um profissional na área em pouco tempo e com muita qualidade. O site irá te ajudar a vender mais seu produto/serviço. Seus concorrentes já tem só falta você! ler mais..."
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
