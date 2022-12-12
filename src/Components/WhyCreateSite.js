import React from 'react';
import styles from '../CSS/Components/HowCreateSite.module.css';
const WhyCreateSite = () => {
  return (
    <section id={styles.createBg}>
      <div className="container" id={styles.create}>
        <div className={styles.card}>
          <h1 className="font-1-xl">P<span className='font-1-l'>orque criar um site ?</span> </h1>
          <p className="font-2-s cor-5">
            Diferente de lojas físicas que tem um número de visitantes limitado
            a quem mora naquela cidade os sites não funcionam assim, só no
            Brasil 138, 8 milhões de brasileiros tem acesso continuo a internet
            e grande porcentagem desses números utilizam ferramentas de pesquisa
            para achar o seu Negócio. sem site você perde dinheiro pois você
            deixa o visual da sua loja limitado somente para acesso físico, o
            site nada mais é do que sua loja em uma vitrine mundial disponível
            para todos acessarem de qualquer lugar. Seus concorrentes já usam
            site, agora só falta você.
          </p>
        </div>


        <div className={styles.card}>
          <h1 className="font-1-xl">Q<span className='font-1-l'>uem sou eu?</span> </h1>
          <p className="font-2-s cor-5">
          Programador Front-End (Desenvolvedor de sites) e UX|UI Designer (Design de interface para sites & e experiência do usuário), me chamo Diogo Lima. Não faço somente sites, mas sim gero visíbilidade e rentabilidade para seu negócio. 
          </p>
        </div>


      </div>
    </section>
  );
};

export default WhyCreateSite;
