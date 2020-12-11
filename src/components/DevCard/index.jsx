import { useHistory, useLocation } from "react-router-dom";
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
import DefaultAvatar from "../../img/DevCard/avatar.webp";

const DevCard = (props) => {
  const history = useHistory();
  const location = useLocation();
  const { name, image, module, stacks, index, id } = props;
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <StyledCard key={index}>
        <StyledCardMedia image={image ? image : DefaultAvatar} />
        <CardContent>
          <Box m={1}>
            <Typography
              variant="h6"
              color="textPrimary"
              component="p"
              align="center"
              noWrap
            >
              {name}
            </Typography>
          </Box>
          <Divider />
          <Box m={1}>
            <Typography
              variant="caption"
              color="textPrimary"
              component="p"
              align="center"
              noWrap
            >
              {module}
            </Typography>
          </Box>
          <Divider />
          <Box m={1}>
            <Typography
              variant="caption"
              color="textPrimary"
              component="p"
              align="center"
              noWrap
            >
              {stacks}
            </Typography>
          </Box>
        </CardContent>
        {location.pathname !== "/" && (
          <CardActions>
            <Box m="auto" mb={1}>
              <StyledButton
                variant="contained"
                color="primary"
                size="large"
                disableElevation
                startIcon={<PersonIcon />}
                onClick={() => {
                  history.push(`/users/${id}`);
                }}
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
