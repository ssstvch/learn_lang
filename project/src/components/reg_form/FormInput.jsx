import React from "react";
import { FormControl, TextField } from "@mui/material";

const FormInput = ({ label, id, type, helperText }) => {
  return (
    <React.Fragment>
      <FormControl>
        <TextField
          required
          id={id}
          label={label}
          type={type}
          helperText={helperText}
        />
      </FormControl>
    </React.Fragment>
  );
};

export default FormInput;
