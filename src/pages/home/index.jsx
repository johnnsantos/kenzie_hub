import { useSelector } from "react-redux";
import bannerImg from "../../img/codeDark.svg";
import { Container } from "./style";
import Header from "../../components/header";
import DisplayDev from "../../components/DisplayDev";
import DevCard from "../../components/DevCard";

const Home = () => {
  const { devs } = useSelector((state) => state.reducer);
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
      <DisplayDev isHome>
        {devs.slice(devs.length - 3, devs.length).map((dev, index) => (
          <DevCard
            isHome
            key={index}
            id={dev.id}
            name={dev.name}
            image={dev.avatar_url}
            module={dev.course_module}
            stacks={
              dev.techs.length !== 0
                ? dev.techs.map((tech) => `${tech.title} | `)
                : "Sem tecnologias ainda."
            }
          />
        ))}
      </DisplayDev>
    </>
  );
};

export default Home;
