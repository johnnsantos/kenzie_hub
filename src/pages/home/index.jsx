import bannerImg from "../../img/codeDark.svg";

import { Container } from "./style";

import Header from "../../components/header";

const Home = () => {
  return (
    <>
      <Header />
      <br></br>
      <Container>
        <img src={bannerImg} alt="" />
        <div className="bannerText">
          <h1>
            {/* <span>&lt;h1&gt;</span> */}
            Compartilhe suas experiências e projetos
            {/* <span>&lt;/h1&gt;</span> */}
          </h1>
          <h2>
            {/* <span>&lt;h2&gt;</span> */}
            Veja o projeto de outros devs e muito mais
            {/* <span>&lt;h2&gt;</span> */}
          </h2>
          <button>Cadastre-se</button>
        </div>
      </Container>
    </>
  );
};

export default Home;
