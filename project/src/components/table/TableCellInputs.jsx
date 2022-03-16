import React from "react";
import { TableRow, TableCell, IconButton } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DoneIcon from "@mui/icons-material/Done";
import TableInput from "./TableInput";

const tableCellInputs = ["english", "russian", "transcription", "tags"];

const TableCellInputs = ({
  inputError,
  inputText,
  handleChange,
  handleClickDone,
  handleClickRemove,
  id,
}) => {
  return (
    <TableRow>
      {tableCellInputs.map((_, i) => {
        return (
          <TableInput
            inputError={inputError}
            handleChange={handleChange}
            name={_}
            value={inputText[_]}
            key={`${_}-${i}`}
          />
        );
      })}
      <TableCell className={`tablecell__icons`}>
        <IconButton
          data-id={id}
          onClick={() => handleClickDone(id, inputText)}
          disabled={inputError}
        >
          <DoneIcon />
        </IconButton>
        <IconButton data-id={id} onClick={handleClickRemove}>
          <RemoveCircleIcon data-id={id} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default TableCellInputs;
