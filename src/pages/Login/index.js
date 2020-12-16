import LoginForm from "../../components/LoginForm";
import backgroundLogin from "../../img/login.svg";
import { StyledDiv, StyledImg } from "./styles";

import { motion } from "framer-motion";

const Login = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <StyledDiv>
        <StyledImg src={backgroundLogin} />
        <LoginForm />
      </StyledDiv>
    </motion.div>
  );
};

export default Login;
