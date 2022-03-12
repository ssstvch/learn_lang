import React from "react";
import { TableCell, FormControl, Input, FormHelperText } from "@mui/material";

const TableInput = ({ inputError, handleChange, name, value }) => {
  return (
    <TableCell className={`tablecell`}>
      <FormControl error={inputError} variant="standard">
        <Input
          name={name}
          value={value}
          onChange={handleChange}
          className={`tablecell__input ${inputError ? "error" : ""}`}
        />
        {inputError ? (
          <FormHelperText id="component-error-text">
            Incorrectly entry
          </FormHelperText>
        ) : (
          ""
        )}
      </FormControl>
    </TableCell>
  );
};

export default TableInput;
