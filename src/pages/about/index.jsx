import banner from "../../img/aboutBanner.svg";
import logo from "../../img/kenzieLogo.png";

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
          <div className="card">
            <img
              src="https://assets.gitlab-static.net/uploads/-/system/user/avatar/6027914/avatar.png"
              alt=""
            />
            <h1>Johnnatan Santos</h1>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/johnnsantos/"
            >
              {" "}
              <h2>Linkedin</h2>{" "}
            </a>
          </div>
          <div className="card">
            <img
              src="https://assets.gitlab-static.net/uploads/-/system/user/avatar/6515935/avatar.png"
              alt=""
            />
            <h1>Matheus Gasparotto</h1>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/matheusgasparotto/"
            >
              {" "}
              <h2>Linkedin</h2>{" "}
            </a>
          </div>
          <div className="card">
            <img
              src="https://gitlab.com/uploads/-/system/user/avatar/6533699/avatar.png"
              alt=""
            />
            <h1>Yuri Baldini</h1>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/yuri-baldini-67371918b/"
            >
              {" "}
              <h2>Linkedin</h2>{" "}
            </a>
          </div>
          <div className="card">
            <img
              src="https://gitlab.com/uploads/-/system/user/avatar/6535259/avatar.png"
              alt=""
            />
            <h1>thiago jacques</h1>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/thiago-linhares-jacques/"
            >
              {" "}
              <h2>Linkedin</h2>{" "}
            </a>
          </div>
          <div className="card">
            <img
              src="https://gitlab.com/uploads/-/system/user/avatar/6534080/avatar.png"
              alt=""
            />
            <h1>Christian Sequeira</h1>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/christian-smmc/"
            >
              {" "}
              <h2>Linkedin</h2>{" "}
            </a>
          </div>
        </div>
        <div className="teamAnounce">
          <h1>Kenzie Academy</h1>
        </div>
        <div className="kenzie">
          <a target="_blank" rel="noreferrer" href="https://kenzie.com.br/">
            {" "}
            <img src={logo} alt="" width="100" />
          </a>
          <h1>
            Todo o conhecimento utilizado para criar este website,foi explicado
            e conduzido pela Kenzie Academy Brasil
          </h1>
        </div>
        <div className="teamAnounce">
          <h1>Api</h1>
        </div>
        <div className="kenzie">
          <a
            className="api"
            target="_blank"
            rel="noreferrer"
            href="https://gitlab.com/ka-br-jul-2020/kenziehub-api/-/blob/master/readme.md"
          >
            <h2>Kenzie Hub</h2>
          </a>
          <h1>
            Foi a API utilizada neste projeto, feita por um dos facilitadores da
            Kenzie, Gabriel Araújo
          </h1>
        </div>
      </div>
    </Container>
  );
};

export default About;
