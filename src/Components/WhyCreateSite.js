import React from 'react';
import styles from '../CSS/Components/HowCreateSite.module.css';
const WhyCreateSite = () => {
  return (
    <section id={styles.createBg}>
      <div className="container" id={styles.create}>
        <div className={styles.card}>
          <h1 className="font-1-xl">
            P<span className="font-1-l">orque criar um site ?</span>{' '}
          </h1>
          <p className="font-2-s cor-5">
            Diferente de lojas físicas que possui um número de visitantes
            limitado á moradores daquela região, já os sites não funcionam
            assim. Só no Brasil 138,8 milhões de brasileiros tem acesso contínuo
            á internet e grande parte desse número utiliza o google para achar o
            seu negócio. Sendo assim sem site você perde dinheiro pois você
            deixa o visual da sua loja limitado somente ao acesso físico. O site
            nada mais é do que sua loja em uma vitrine mundial disponível para
            todos acessarem de qualquer lugar. Seus concorrentes já usam site,
            agora só falta você.
          </p>
        </div>

        <div className={styles.card}>
          <h1 className="font-1-xl">
            Q<span className="font-1-l">uem sou eu?</span>{' '}
          </h1>
          <p className="font-2-s cor-5">
            Programador Front-End (Desenvolvedor de sites) e UX|UI Designer
            (Design de experiência do usuário & interface), me
            chamo Diogo Lima. Não faço somente sites, mas sim gero visíbilidade
            e rentabilidade para seu negócio.
          </p>
        </div>

        <div className={styles.card}>
          <h1 className="font-1-xl">
            C<span className="font-1-l">omo um site aumentar as vendas?</span>{' '}
          </h1>
          <p className="font-2-s cor-5">
           Você precisa contratar um instalador de calhas porque sua casa está com problemas de goteira após uma forte chuva, o primeiro lugar que você vai é no google pesquisar o mais rápido possivel um profissional qualificado antes que chegue uma nova chuva, chegando lá você acha somente um com um site que mostra os anos de experiência, serviços feitos, avaliações e as qualidades do atendimento dele com link que leva direto ao whatsApp, sendo ele o único com um site com todas essas informações que você buscava você contrataria ele sem dúvidas para solucionar seu problema somente por esse primeiro contato que teve com o site dele.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyCreateSite;
