import LoginForm from "../../components/LoginForm";
import backgroundLogin from "../../img/login.svg";
import { StyledDiv, StyledImg } from "./styles";

const Login = () => {
  return (
    <StyledDiv>
      <StyledImg src={backgroundLogin} />
      <LoginForm />
    </StyledDiv>
  );
};

export default Login;
