/* eslint-disable */
import { Grid, Container, Typography, Box } from "@material-ui/core";
import { StyledButton } from "./styles";

import { useHistory } from "react-router-dom";

const DisplayDev = (props) => {
  const history = useHistory();
  return (
    <>
      <Container maxWidth={props.isHome ? "md" : "lg"}>
        <Box m={3}>
          <Typography
            variant="h5"
            color="textPrimary"
            component="p"
            align="center"
          >
            {props.isHome && "Veja os Devs que já se cadastraram:"}
          </Typography>
        </Box>
        <Grid
          container
          direction="row"
          alignItems="stretch"
          justify="center"
          spacing={4}
        >
          {props.children}
        </Grid>
      </Container>
      <Box m={3}>
        {props.isHome && (
          <Grid container direction="row" alignItems="center" justify="center">
            <StyledButton
              variant="contained"
              color="primary"
              size="large"
              disableElevation
              onClick={() => {
                history.push("/login");
              }}
            >
              Faça login para ver mais!
            </StyledButton>
          </Grid>
        )}
      </Box>
    </>
  );
};

export default DisplayDev;

{
  /* <DisplayDev>
            {devs.map((dev, index) => (
              <DevCard
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
          </DisplayDev> */
}

{
  /* <DisplayDev isHome>
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
</DisplayDev> */
}
