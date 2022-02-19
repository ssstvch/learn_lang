import { Typography } from "@mui/material";
import React from "react";

const Title = ({ text }) => {
  return (
    <React.Fragment>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        sx={{
          m: "7vw auto 2vw auto",
          fontWeight: "300",
          letterSpacing: "0.1vw",
        }}
      >
        {text}
      </Typography>
    </React.Fragment>
  );
};

export default Title;
