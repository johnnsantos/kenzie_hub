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
  const { name, image, key } = props;
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <StyledCard>
        <StyledCardMedia
          image={
            "https://scontent.fudi1-1.fna.fbcdn.net/v/t1.0-9/41511992_1948930365188173_3335674504918597632_o.jpg?_nc_cat=103&ccb=2&_nc_sid=84a396&_nc_ohc=zQMSCCq3fbsAX8NpOxU&_nc_ht=scontent.fudi1-1.fna&oh=a6a6ac36355ec1b3b78290fb656305e1&oe=5FF3B85D"
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
              Johnnatan Santos
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
