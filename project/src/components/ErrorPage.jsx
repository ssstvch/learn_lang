import { CardMedia, Container, Grid, Typography } from "@mui/material";
import React from "react";

const ErrorPage = () => {
  return (
    <React.Fragment>
      <Grid
        sx={{
          m: "8vw auto 0 auto",
          width: "50vw",
          flexWrap: "nowrap",
          alignItems: "center",
        }}
        container
        spacing={2}
      >
        <Container sx={{ textAlign: "center" }}>
          <Typography
            variant="h1"
            element="div"
            sx={{ fontSize: "9rem", fontWeight: "100" }}
          >
            404
          </Typography>
          <Typography
            variant="h4"
            element="div"
            sx={{
              textTransform: "uppercase",
              fontSize: "4rem",
              fontWeight: "300",
            }}
          >
            error
          </Typography>
          <Typography variant="h6" element="div">
            The page is not found
          </Typography>
        </Container>
        <Container item>
          <CardMedia
            component="img"
            height="50%"
            width="50%"
            image="/images/negative_man.png"
            alt="404 Error"
          />
        </Container>
      </Grid>
    </React.Fragment>
  );
};

export default ErrorPage;
