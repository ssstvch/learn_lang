import React, { useContext } from "react";
import "../../styles/_newWords.scss";
import { Container, TableRow, TableCell, IconButton } from "@mui/material";
import TableInput from "./TableInput";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DoneIcon from "@mui/icons-material/Done";
import { WordsContext } from "../WordsContext";

const tableCell = ["english", "russian", "transcription", "tags"];

const checkInputs = (obj) => {
  const checkEnglishWord = /^[a-zA-Z]{2,16}$/g;
  const checkRussianWord = /^[а-яА-ЯёЁ]{2,16}$/g;
  const checkTranscribation = /^[\[{1}]\D{1,16}[\]{1}]$/g;

  let check = 0;
  for (let key in obj) {
    let value = obj[key].trim();
    switch (key) {
      case "word":
        checkEnglishWord.test(value) === false
          ? check++
          : checkEnglishWord.test(value);
        break;
      case "translate":
        checkRussianWord.test(value) === false
          ? check++
          : checkRussianWord.test(value);
        break;
      case "transcription":
        checkTranscribation.test(value) === false
          ? check++
          : checkTranscribation.test(value);
        break;
      case "theme":
        checkRussianWord.test(value) === false
          ? check++
          : checkRussianWord.test(value);
        break;
    }
  }
  return check !== 0 ? false : true;
};

const WordRow = ({
  english,
  transcription,
  russian,
  tags,
  id,
  tags_json,
  setRedrow,
  redrow,
  onclick,
  handleChangeRemove,
}) => {
  // global state
  const [words, setWords] = useContext(WordsContext);

  // local states
  const [inputText, setInputText] = React.useState({
    id: id,
    english: english,
    transcription: transcription,
    russian: russian,
    tags: tags,
    tags_json: tags_json,
  });
  const [inputError, setInputError] = React.useState(false);

  // functions
  const handleChange = (e) => {
    let value = e.target.value;
    value.match(/^\s+$/) || value === ""
      ? setInputError(true)
      : setInputError(false);
    setInputText({ ...inputText, [e.target.name]: value });
  };

  const handleChangeDone = (e) => {
    let check = checkInputs(inputText),
      rowId = e.target.parentNode.dataset.id;
    for (let i = 0; i < words.length; i++) {
      if (words[i].id === rowId) {
        let newWords = words;
        newWords[i] = inputText;
        setWords(newWords);
      }
    }
    return check === false
      ? alert("Некорректно введены данные")
      : setRedrow(-1);
  };

  // component
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
                onClick={handleChangeDone}
                disabled={inputError}
              >
                <DoneIcon />
              </IconButton>
              <IconButton data-id={id} onClick={handleChangeRemove}>
                <RemoveCircleIcon />
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
