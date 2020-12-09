import {
  CardActions,
  CardContent,
  Typography,
  Grid,
  Divider,
  Box,
} from "@material-ui/core";
import { StyledCard, StyledCardMedia, StyledButton } from "./styles";
import PersonIcon from "@material-ui/icons/Person";

const DevCard = (props) => {
  // const { name, image, key, module, tecnologies } = props;
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <StyledCard>
        <StyledCardMedia
          image={
            "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
        />
        <CardContent>
          <Box m={1}>
            <Typography
              variant="h6"
              color="textPrimary"
              component="p"
              align="center"
            >
              Joselito Adalberto
            </Typography>
          </Box>

          <Divider />
          <Box m={1}>
            <Typography
              variant="subtitle1"
              color="textPrimary"
              component="p"
              align="center"
            >
              Primeiro módulo (Introdução ao Frontend)
            </Typography>
          </Box>

          <Divider />
          <Box m={1}>
            <Typography
              variant="subtitle1"
              color="textPrimary"
              component="p"
              align="center"
            >
              React | HTML | CSS
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Box m="auto" mb={1}>
            <StyledButton
              variant="contained"
              color="primary"
              size="large"
              disableElevation
              startIcon={<PersonIcon />}
            >
              Ver perfil
            </StyledButton>
          </Box>
        </CardActions>
      </StyledCard>
    </Grid>
  );
};

export default DevCard;
