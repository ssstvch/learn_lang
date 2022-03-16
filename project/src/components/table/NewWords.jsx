import React, { useState, useContext, useEffect } from "react";
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
import Modal from "../Modal";
import WordRow from "./WordRow";
import { WordsContext } from "../WordsContext";

const tableCell = [
  { id: "01", name: "Word" },
  { id: "02", name: "Translate" },
  { id: "03", name: "Transcription" },
  { id: "04", name: "Theme" },
];
const checkInputs = (obj) => {
  const checkEnglishWord = /^[a-zA-Z]{2,16}$/g;
  const checkRussianWord = /^[а-яА-ЯёЁ]{2,16}$/g;
  const checkTranscribation = /^[/[{1}]\D{1,16}[\]{1}]$/g;

  let check = 0;
  for (let text in obj) {
    let value = obj[text].trim();
    switch (text) {
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
      default:
        console.log(`error in switch`);
    }
  }
  return check !== 0 ? false : true;
};

const NewWords = () => {
  // global state
  const [words, setWords] = useContext(WordsContext);

  // local states
  const [redrow, setRedrow] = useState(-1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const [inputID, setInputID] = useState("");
  const [change, setChange] = useState(false);

  useEffect(() => {
    fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setIsLoaded(true);
        changeWords(result);
      });
  }, []);

  /* -- functions -- */
  const changeWords = (obj) => {
    setWords(obj);
  };
  const handleClickEdit = (index) => {
    setRedrow(index);
  };
  const handleClickRemove = () => {
    setRedrow(-1);
  };

  // saving field data inputs
  const handleClickDone = (id, inputText) => {
    let check = checkInputs(inputText);
    for (let i = 0; i < words.length; i++) {
      if (words[i].id === id) {
        let newWords = words;
        newWords[i] = inputText;
        setWords(newWords);
      }
    }
    return check === false
      ? alert("Некорректно введены данные")
      : setRedrow(-1);
  };

  // modal functions and delete row
  const handleOpen = (id) => {
    setInputID(id);
    setOpen(true);
  };
  const handleClose = (e) => {
    let choose = e.target.id;
    let id = +choose.slice(6);
    console.log(inputID);
    if (id === 1) {
      for (let i = 0; i < words.length; i++) {
        if (+words[i].id === +inputID) {
          console.log(words[i].id === inputID);
          let newWords = words;
          newWords.splice(i, 1);
          setWords(newWords);
          setChange(!change);
          console.log(change);
        }
      }
    }
    setOpen(false);
  };

  /* -- component -- */
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
        <TableBody dataset-id={`${change}`}>
          {words.map((word, i) => {
            return (
              <WordRow
                // table data
                key={`${word.tags_json}-${word.english}`}
                english={word.english}
                russian={word.russian}
                transcription={word.transcription}
                tags={
                  word.tags.trim() === "" ? (
                    <i style={{ color: "gray" }}>без темы</i>
                  ) : (
                    word.tags
                  )
                }
                tags_json={word.tags_json}
                id={word.id}
                // table function
                redrow={redrow === i}
                handleClickEdit={() => handleClickEdit(i)}
                handleClickRemove={handleClickRemove}
                handleClickDone={handleClickDone}
                handleOpen={handleOpen}
              />
            );
          })}
          <Modal open={open} handleClose={handleClose} />
        </TableBody>
      </Table>
    </Container>
  );
};

export default NewWords;
