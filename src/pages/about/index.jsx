import banner from "../../img/aboutBanner.svg";
import logo from "../../img/kenzieLogo.png";

import AboutCard from "../../components/aboutCard";

import { Container } from "./style";

const About = () => {
  return (
    <Container>
      <div className="banner">
        <img className="bannerImg" src={banner} alt="About Banner" />
        <div className="bannerText">
          <h2>Quem nós somos</h2>
          <h1>Futuros desenvolvedores full stack</h1>
        </div>
      </div>
      <div className="container">
        <div className="teamAnounce">
          <h1>Nossa Equipe</h1>
        </div>

        <div className="team">
          <AboutCard />
        </div>
        <div className="teamAnounce">
          <h1>Kenzie Academy</h1>
        </div>
        <div className="kenzie left">
          <a
            className="kenzieButton"
            target="_blank"
            rel="noreferrer"
            href="https://kenzie.com.br/"
          >
            {" "}
            <img src={logo} alt="" width="100" />
          </a>
          <h1>
            Todo o conhecimento utilizado para criar este website,foi explicado
            e conduzido pela Kenzie Academy Brasil
          </h1>
        </div>
        <div className="teamAnounce">
          <h1 className="leftPanel">Kenzie Hub</h1>
        </div>
        <div className="kenzie right">
          <h1>
            Foi a API utilizada neste projeto, feita por um dos facilitadores da
            Kenzie, Gabriel Araújo
          </h1>
          <a
            className="api"
            target="_blank"
            rel="noreferrer"
            href="https://gitlab.com/ka-br-jul-2020/kenziehub-api/-/blob/master/readme.md"
          >
            <h2>Kenzie Hub</h2>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default About;
