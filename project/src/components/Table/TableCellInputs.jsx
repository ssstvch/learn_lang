import React, { useContext, useEffect } from "react";
import { TableRow, TableCell, IconButton } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DoneIcon from "@mui/icons-material/Done";
import TableInput from "./TableInput";
import { WordsContext } from "../App/WordsContext";
import { TableContext } from "./tableContext";

const TableCellInputs = ({ id, word }) => {
  const { inputError, handleClickDone } = useContext(WordsContext);
  const {
    tableCell,
    inputText,
    getInputText,
    handleChange,
    handleClickRemove,
    closeEdit,
  } = useContext(TableContext);

  useEffect(() => {
    getInputText(word);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableRow>
      {tableCell.map((_, i) => {
        return (
          <TableInput
            inputError={inputError}
            handleChange={(e) => handleChange(e)}
            name={_.inputName}
            value={inputText[_.inputName]}
            key={`${_.inputName}-${i}`}
          />
        );
      })}
      <TableCell className={`tablecell__icons`}>
        <IconButton
          data-id={id}
          onClick={() => {
            handleClickDone(id, inputText)
              ? closeEdit()
              : console.log(`something went wrong..`);
          }}
          disabled={inputError}
        >
          <DoneIcon />
        </IconButton>
        <IconButton
          data-id={id}
          onClick={() => {
            handleClickRemove()
              ? closeEdit()
              : console.log(`something went wrong..`);
          }}
        >
          <RemoveCircleIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default TableCellInputs;
