import React from "react";
import { LoadingButton } from "@mui/lab";

const ModalMsg = ({ loading }) => {
  return (
    <LoadingButton
      size="large"
      loading={loading}
      variant="outlined"
      sx={{
        textAlign: "center",
        border: "none",
        fontSize: "2vw",
      }}
      disabled
    ></LoadingButton>
  );
};

export default ModalMsg;
