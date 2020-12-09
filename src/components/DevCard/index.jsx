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
  const { name, image, module, stacks, isHome } = props;
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <StyledCard>
        <StyledCardMedia image={image} />
        <CardContent>
          <Box m={1}>
            <Typography
              variant="h6"
              color="textPrimary"
              component="p"
              align="center"
            >
              {name}
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
              {module}
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
              {stacks}
            </Typography>
          </Box>
        </CardContent>
        {!isHome && (
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
        )}
      </StyledCard>
    </Grid>
  );
};

export default DevCard;
