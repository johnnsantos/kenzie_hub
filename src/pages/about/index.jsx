import banner from "../../img/aboutBanner.svg";

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
      <div>
        <h1>Nossa Equipe</h1>
      </div>
      <div className="team">
        <div className="card">
          <img
            src="https://assets.gitlab-static.net/uploads/-/system/user/avatar/6027914/avatar.png"
            alt=""
          />
          <h1>Johnnatan Santos</h1>
        </div>
        <div className="card">
          <img
            src="https://assets.gitlab-static.net/uploads/-/system/user/avatar/6515935/avatar.png"
            alt=""
          />
          <h1>Matheus Gasparotto</h1>
        </div>
        <div className="card">
          <img
            src="https://gitlab.com/uploads/-/system/user/avatar/6533699/avatar.png"
            alt=""
          />
          <h1>Yuri Baldini</h1>
        </div>
        <div className="card">
          <img
            src="https://gitlab.com/uploads/-/system/user/avatar/6535259/avatar.png"
            alt=""
          />
          <h1>thiago jacques</h1>
        </div>
        <div className="card">
          <img
            src="https://gitlab.com/uploads/-/system/user/avatar/6534080/avatar.png"
            alt=""
          />
          <h1>Christian Sequeira</h1>
        </div>
      </div>
    </Container>
  );
};

export default About;
