import {
  CardActions,
  CardContent,
  Typography,
  Grid,
  Divider,
  Box,
} from "@material-ui/core";
import styled from "styled-components";
import { Card, CardMedia, Button } from "@material-ui/core";
import {
  StyledCard,
  StyledDelete,
  StyledEdit,
  StyledCardContent,
} from "./styles";
import { useHistory } from "react-router-dom";
const TechCard = (props) => {
  const history = useHistory();
  // const {stacks, index, module, id} = props

  return (
    <Grid item xs={4}>
      <StyledCard>
        <StyledCardContent>
          <StyledDelete />

          <Box m={2}>
            <Typography
              variant="overline"
              color="textPrimary"
              component="p"
              align="left"
              noWrap
            >
              Stack: React
            </Typography>
          </Box>

          <Box m={2}>
            <Typography
              variant="overline"
              color="textPrimary"
              component="p"
              align="left"
              noWrap
            >
              Status : 1º Modulo - Iniciante
              <StyledEdit onClick={() => history.push("/devs")} />
            </Typography>
          </Box>
        </StyledCardContent>
      </StyledCard>
    </Grid>
  );
};

export default TechCard;
