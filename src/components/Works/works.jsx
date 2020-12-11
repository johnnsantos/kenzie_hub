import { useHistory } from "react-router-dom";
import "./works.css";
import { NewTypography, StyledButton } from "../../style/styles";

const Works = () => {
  const history = useHistory();

  return (
    <div className="outer">
      <NewTypography>
        <h1>Trabalhos</h1>
      </NewTypography>
      <div className="render">
        <div className="card">
          <h1>Perfil 1</h1>
          <div className="textarea">
            lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore lorem ipsum dolor sit amet
            consectetur adipiscing elit sed do eiusmod tempor incididunt ut
            labore lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore lorem ipsum dolor sit amet
            consectetur adipiscing elit sed do eiusmod tempor incididunt ut
            labore lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore lorem ipsum dolor sit amet
            consectetur adipiscing elit sed do eiusmod tempor incididunt ut
            labore
          </div>
          <StyledButton className="linkbutton">Link Deploy </StyledButton>
        </div>
        <div className="card">
          <h1>Perfil 2</h1>
          <div className="textarea">
            lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore lorem ipsum dolor sit amet
            consectetur adipiscing elit sed do eiusmod tempor incididunt ut
            labore lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore lorem ipsum dolor sit amet
            consectetur adipiscing elit sed do eiusmod tempor incididunt ut
            labore lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore lorem ipsum dolor sit amet
            consectetur adipiscing elit sed do eiusmod tempor incididunt ut
            labore lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore
          </div>
          <StyledButton className="linkbutton">Link Deploy </StyledButton>
        </div>
      </div>
      <div className="render">
        <div className="card">
          <h1>Perfil 3</h1>
          <div className="textarea">
            lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore consectetur lorem ipsum dolor
            sit amet consectetur adipiscing elit sed do eiusmod tempor
            incididunt ut labore lorem ipsum dolor sit amet consectetur
            adipiscing elit sed do eiusmod tempor incididunt ut labore lorem
            ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
            tempor incididunt ut labore lorem ipsum dolor sit amet consectetur
            adipiscing elit sed do eiusmod tempor incididunt ut labore lorem
            ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
            tempor incididunt ut labore lorem ipsum dolor sit amet consectetur
            adipiscing elit sed do eiusmod tempor incididunt ut labore
          </div>
          <StyledButton className="linkbutton">Link Deploy </StyledButton>
        </div>
        <div className="card">
          <h1>Perfil 4</h1>
          <div className="textarea">
            lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore lorem ipsum dolor sit amet
            consectetur adipiscing elit sed do eiusmod tempor incididunt ut
            labore lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore lorem ipsum dolor sit amet
            consectetur adipiscing elit sed do eiusmod tempor incididunt ut
            labore lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore lorem ipsum dolor sit amet
            consectetur adipiscing elit sed do eiusmod tempor incididunt ut
            labore lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore
          </div>
          <StyledButton className="linkbutton">Link Deploy </StyledButton>
        </div>
      </div>
    </div>
  );
};

export default Works;
