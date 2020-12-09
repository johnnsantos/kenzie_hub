import { Grid, Container } from "@material-ui/core";

const DisplayDev = (props) => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
        spacing={3}
      >
        {props.children}
      </Grid>
    </Container>
  );
};

export default DisplayDev;
