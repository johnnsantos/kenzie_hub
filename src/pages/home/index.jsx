import bannerImg from "../../img/codeDark.svg";
import { Container } from "./style";
import DisplayDev from "../../components/DisplayDev";

import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  return (
    <>
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
          <button onClick={() => history.push("/register")}>Cadastre-se</button>
        </div>
      </Container>
      <DisplayDev />
    </>
  );
};

export default Home;
