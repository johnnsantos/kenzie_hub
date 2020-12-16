import bannerImg from "../../img/codeDark.svg";
import { Container } from "./style";
import DisplayDev from "../../components/DisplayDev";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { motion } from "framer-motion";

const Home = () => {
  const history = useHistory();

  const token = localStorage.getItem("authorizationToken");

  const { userLoged } = useSelector((state) => state.User);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <br></br>
      <Container>
        <img src={bannerImg} alt="" />
        {token ? (
          <div className="bannerText">
            <h1 className="h1Logged">Seja bem vindo !</h1>
            <h2
              style={{
                color: "#3F3D56",
              }}
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
    </motion.div>
  );
};

export default Home;
