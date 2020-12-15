import bannerImg from "../../img/codeDark.svg";
import { Container } from "./style";
import DisplayDev from "../../components/DisplayDev";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const token = localStorage.getItem("authorizationToken");

  const { userLoged } = useSelector((state) => state.User);
  return (
    <>
      <br></br>
      <Container>
        <img src={bannerImg} alt="" />
        {token ? (
          <div className="bannerText">
            <h1 className="h1Logged">Seja bem vindo !</h1>
            <h2
              style={{ borderBottom: "dashed 1px", color: "#3f3d56" }}
              className="h2Logged"
            >
              {userLoged.name}
            </h2>
          </div>
        ) : (
          <div className="bannerText">
            <h1 className="h1Logged">
              Compartilhe suas experiências e projetos
            </h1>
            <h2 className="h2Logged">
              Veja o projeto de outros devs e muito mais
            </h2>
            <button onClick={() => history.push("/register")}>
              Cadastre-se
            </button>
          </div>
        )}
      </Container>
      <DisplayDev />
    </>
  );
};

export default Home;
