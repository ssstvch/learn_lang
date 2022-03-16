import React, { useState } from "react";
import "../../styles/_newWords.scss";
import { TableRow, TableCell, IconButton } from "@mui/material";
import TableCellInputs from "./TableCellInputs";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const WordRow = ({
  english,
  transcription,
  russian,
  tags,
  id,
  tags_json,
  redrow,
  handleClickEdit,
  handleClickRemove,
  handleClickDone,
  handleOpen,
  inputError,
  setInputError,
}) => {
  /* --- local states --- */
  const [inputText, setInputText] = useState({
    id: id,
    english: english,
    transcription: transcription,
    russian: russian,
    tags: tags,
    tags_json: tags_json,
  });

  /* --- functions --- */

  // check empty fields
  const handleChange = (e) => {
    let value = e.target.value;
    value.match(/^\s+$/) || value === ""
      ? setInputError(true)
      : setInputError(false);
    setInputText({ ...inputText, [e.target.name]: value });
  };

  /* --- component --- */
  return (
    <React.Fragment>
      {redrow ? (
        <TableCellInputs
          inputError={inputError}
          handleChange={handleChange}
          inputText={inputText}
          handleClickDone={handleClickDone}
          handleClickRemove={handleClickRemove}
          id={id}
        />
      ) : (
        <TableRow dataset-id={id}>
          <TableCell className={`tablecell`}>{english}</TableCell>
          <TableCell className={`tablecell`}>{russian}</TableCell>
          <TableCell className={`tablecell`}>{transcription}</TableCell>
          <TableCell className={`tablecell`}>{tags}</TableCell>
          <TableCell className={`tablecell__icons`}>
            <IconButton onClick={handleClickEdit} className={`icons__button`}>
              <EditIcon className={`icons__svg`} />
            </IconButton>
            <IconButton
              data-id={id}
              onClick={() => handleOpen(id)}
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
