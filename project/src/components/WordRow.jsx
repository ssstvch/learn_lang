import React from "react";
import "../styles/_newWords.scss";
import {
  Container,
  TableRow,
  TableCell,
  TextField,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DoneIcon from "@mui/icons-material/Done";

const tableCell = ["word", "translate", "transcription", "theme"];

const WordRow = ({
  word,
  translate,
  transcription,
  theme,
  id,
  redrow,
  onclick,
  handleChangeDone,
  handleChangeRemove,
}) => {
  const [inputText, setInputText] = React.useState({
    word: word,
    translate: translate,
    transcription: transcription,
    theme: theme,
  });

  const handleChange = (e) => {
    let value = e.target.value;
    setInputText({ ...inputText, [e.target.name]: value });
  };

  return (
    <React.Fragment>
      {redrow ? (
        <TableRow>
          {tableCell.map((_, i) => {
            return (
              <TableCell className={`tablecell`} key={`${_}-${i}`}>
                <TextField
                  size="small"
                  variant="standard"
                  name={_}
                  value={inputText[_]}
                  onChange={handleChange}
                  className={`tablecell__input ${_}-${id}`}
                />
              </TableCell>
            );
          })}
          <TableCell className={`tablecell__icons`}>
            <Container>
              <IconButton data-id={`${word}-${id}`} onClick={handleChangeDone}>
                <DoneIcon />
              </IconButton>
              <IconButton
                data-id={`${word}-${id}`}
                onClick={handleChangeRemove}
              >
                <RemoveCircleIcon />
              </IconButton>
            </Container>
          </TableCell>
        </TableRow>
      ) : (
        <TableRow>
          <TableCell className={`tablecell`}>{word}</TableCell>
          <TableCell className={`tablecell`}>{translate}</TableCell>
          <TableCell className={`tablecell`}>{transcription}</TableCell>
          <TableCell className={`tablecell`}>{theme}</TableCell>
          <TableCell className={`tablecell__icons`}>
            <Container>
              <IconButton onClick={onclick}>
                <EditIcon />
              </IconButton>
              <IconButton>
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
