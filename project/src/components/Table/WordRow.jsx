import React, { useContext } from "react";
import "../../styles/_Table.scss";
import { TableRow, TableCell, IconButton } from "@mui/material";
import TableCellInputs from "./TableCellInputs";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { TableContext } from "./tableContext";

const WordRow = ({ word, index }) => {
  const { edit, handleClickEdit, handleOpen } = useContext(TableContext);
  /* --- component --- */
  return (
    <React.Fragment>
      {edit === index ? (
        <TableCellInputs id={word.id} word={word} />
      ) : (
        <TableRow dataset-id={word.id}>
          <TableCell className={`tablecell`}>{word.english}</TableCell>
          <TableCell className={`tablecell`}>{word.russian}</TableCell>
          <TableCell className={`tablecell`}>{word.transcription}</TableCell>
          <TableCell className={`tablecell`}>{word.tags}</TableCell>
          <TableCell className={`tablecell__icons`}>
            <IconButton
              onClick={() => handleClickEdit(index)}
              className={`icons__button`}
            >
              <EditIcon className={`icons__svg`} />
            </IconButton>
            <IconButton
              data-id={word.id}
              onClick={() => handleOpen(word.id)}
              className={`icons__button`}
            >
              <DeleteIcon className={`icons__svg`} />
            </IconButton>
          </TableCell>
        </TableRow>
      )}
    </React.Fragment>
  );
};

export default WordRow;
