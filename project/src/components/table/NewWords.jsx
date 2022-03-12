import React from "react";
import "../../styles/_newWords.scss";
import {
  Container,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import WordRow from "./WordRow";
import { words } from "../../data/words";

const tableCell = [
  { id: "01", name: "Word" },
  { id: "02", name: "Translate" },
  { id: "03", name: "Transcription" },
  { id: "04", name: "Theme" },
];

const checkWords = (obj) => {
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

const NewWords = () => {
  const [redrow, setRedrow] = React.useState(-1);
  const handleRowClick = (index) => {
    setRedrow(index);
  };
  const handleChangeDone = (inputText) => {
    let check = checkWords(inputText);
    check !== false && console.log(inputText);
    return check === false
      ? alert("Некорректно введены данные")
      : setRedrow(-1);
  };
  const handleChangeRemove = () => {
    setRedrow(-1);
  };

  return (
    <Container sx={{ mt: "8vw", width: "50vw" }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            {tableCell.map((_) => {
              return (
                <TableCell
                  key={_.id}
                  sx={{ width: "10.2vw", p: "1.2vw 0.7vw" }}
                >
                  <b>{_.name}</b>
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {words.map((word, i) => {
            return (
              <WordRow
                // table data
                key={word.id}
                id={word.id}
                word={word.word}
                translate={word.translate}
                transcription={word.transcription}
                theme={word.theme}
                // table function
                redrow={redrow === i}
                onclick={() => handleRowClick(i)}
                handleChangeDone={handleChangeDone}
                handleChangeRemove={handleChangeRemove}
              />
            );
          })}
        </TableBody>
      </Table>
    </Container>
  );
};

export default NewWords;
