import React, { useState } from "react";
import "../../styles/_newWords.scss";
import { Container, TableRow, TableCell, IconButton } from "@mui/material";
import TableInput from "./TableInput";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DoneIcon from "@mui/icons-material/Done";

const tableCell = ["english", "russian", "transcription", "tags"];

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
  const [inputError, setInputError] = useState(false);

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
        <TableRow>
          {tableCell.map((_, i) => {
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
            <Container>
              <IconButton
                data-id={id}
                onClick={(e) => handleClickDone(id, inputText)}
                disabled={inputError}
              >
                <DoneIcon />
              </IconButton>
              <IconButton data-id={id} onClick={handleClickRemove}>
                <RemoveCircleIcon data-id={id} />
              </IconButton>
            </Container>
          </TableCell>
        </TableRow>
      ) : (
        <TableRow dataset-id={id}>
          <TableCell className={`tablecell`}>{english}</TableCell>
          <TableCell className={`tablecell`}>{russian}</TableCell>
          <TableCell className={`tablecell`}>{transcription}</TableCell>
          <TableCell className={`tablecell`}>{tags}</TableCell>
          <TableCell className={`tablecell__icons`}>
            <Container>
              <IconButton onClick={handleClickEdit}>
                <EditIcon />
              </IconButton>
              <IconButton
                data-id={id}
                onClick={() => handleOpen(id)}
                style={{ zIndex: 2 }}
              >
                <DeleteIcon />
              </IconButton>
            </Container>
          </TableCell>
        </TableRow>
      )}
    </React.Fragment>
  );
};

export default WordRow;
