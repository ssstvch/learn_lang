import React, { useContext, useEffect } from "react";
import { TableRow, TableCell, IconButton } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DoneIcon from "@mui/icons-material/Done";
import TableInput from "./TableInput";
import { WordsContext } from "../App/WordsContext";
import { TableContext } from "./tableContext";

const tableCellInputs = ["english", "russian", "transcription", "tags"];

const TableCellInputs = ({ id, word, setEdit }) => {
  const { inputError, handleClickDone } = useContext(WordsContext);
  const { inputText, setInputText, handleChange, handleClickRemove } =
    useContext(TableContext);

  useEffect(() => {
    word !== undefined && word !== null
      ? setInputText({
          id: word.id,
          english: word.english,
          transcription: word.transcription,
          russian: word.russian,
          tags: word.tags,
          tags_json: word.tags_json,
        })
      : console.log("set");
  }, []);

  return (
    <TableRow>
      {tableCellInputs.map((_, i) => {
        return (
          <TableInput
            inputError={inputError}
            handleChange={(e) => handleChange(e)}
            name={_}
            value={inputText[_]}
            key={`${_}-${i}`}
          />
        );
      })}
      <TableCell className={`tablecell__icons`}>
        <IconButton
          data-id={id}
          onClick={() => {
            handleClickDone(id, inputText)
              ? setEdit(-1)
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
              ? setEdit(-1)
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
