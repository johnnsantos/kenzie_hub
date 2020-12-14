import "./works.css";
import { NewTypography, StyledButton } from "../../style/styles";

const Works = () => {
  const props = [
    {
      profile: "Jose",
      work: "lorem epsulom",
      link: "https://www.google.com.br/",
    },
    {
      profile: "Pedro",
      work: "lorem epsulom",
      link: "https://www.google.com.br/",
    },
    {
      profile: "João",
      work: "lorem epsulom",
      link: "https://www.google.com.br/",
    },
    {
      profile: "Maria",
      work: "lorem epsulom",
      link: "https://www.google.com.br/",
    },
  ];

  return (
    <div className="outer">
      <NewTypography>
        <h1>Trabalhos</h1>
      </NewTypography>
      <div className="render">
        <div className="card">
          <h1>{props[0].profile}</h1>
          <div className="textarea">{props[0].work}</div>
          <StyledButton className="linkbutton">
            <a target="_blank" href={props[3].link}>
              Link Deploy
            </a>
          </StyledButton>
        </div>
        <div className="card">
          <h1>{props[1].profile}</h1>
          <div className="textarea">{props[1].work}</div>
          <StyledButton className="linkbutton">
            <a target="_blank" href={props[3].link}>
              Link Deploy
            </a>
          </StyledButton>
        </div>
      </div>
      <div className="render">
        <div className="card">
          <h1>{props[2].profile}</h1>
          <div className="textarea">{props[2].work}</div>
          <StyledButton className="linkbutton">
            <a target="_blank" href={props[3].link}>
              Link Deploy
            </a>
          </StyledButton>
        </div>
        <div className="card">
          <h1>{props[3].profile}</h1>
          <div className="textarea">{props[3].work}</div>
          <StyledButton className="linkbutton">
            <a target="_blank" href={props[3].link}>
              Link Deploy
            </a>
          </StyledButton>
        </div>
      </div>
    </div>
  );
};

export default Works;
