/* eslint-disable */
import { Grid, Container, Typography, Box } from "@material-ui/core";
import { StyledButton } from "./styles";

const DisplayDev = (props) => {
  return (
    <>
      <Container maxWidth="lg">
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
          alignItems="center"
          justify="center"
          spacing={3}
          flex={"1"}
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
            >
              Cadastre-se também!
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
