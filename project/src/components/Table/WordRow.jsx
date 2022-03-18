import React, { useContext, useState } from "react";
import "../../styles/_Table.scss";
import { TableRow, TableCell, IconButton } from "@mui/material";
import TableCellInputs from "./TableCellInputs";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { WordsContext } from "../App/WordsContext";
import { TableContext } from "./tableContext";

const WordRow = ({
  word,
  edit,
  setEdit,
  handleClickEdit,
  tags_json,
  handleOpen,
}) => {
  const { handleClickRemove, handleClickDone, inputError, setInputError } =
    useContext(WordsContext);
  const { inputText, setInputText, handleChange } = useContext(TableContext);

  /* --- local states --- */
  // const [inputText, setInputText] = useState({
  //   id: id,
  //   english: english,
  //   transcription: transcription,
  //   russian: russian,
  //   tags: tags,
  //   tags_json: tags_json,
  // });

  const inputState = () => {
    setInputText({
      id: word.id,
      english: word.english,
      transcription: word.transcription,
      russian: word.russian,
      tags: word.tags,
      tags_json: word.tags_json,
    });
  };

  /* --- functions --- */

  // check empty fields
  // const handleChange = (e) => {
  //   let value = e.target.value;
  //   value.match(/^\s+$/) || value === ""
  //     ? setInputError(true)
  //     : setInputError(false);
  //   setInputText({ ...inputText, [e.target.name]: value });
  // };

  /* --- component --- */
  return (
    <React.Fragment>
      {edit ? (
        <TableCellInputs id={word.id} word={word} setEdit={setEdit} />
      ) : (
        <TableRow dataset-id={word.id}>
          <TableCell className={`tablecell`}>{word.english}</TableCell>
          <TableCell className={`tablecell`}>{word.russian}</TableCell>
          <TableCell className={`tablecell`}>{word.transcription}</TableCell>
          <TableCell className={`tablecell`}>{word.tags}</TableCell>
          <TableCell className={`tablecell__icons`}>
            <IconButton onClick={handleClickEdit} className={`icons__button`}>
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
