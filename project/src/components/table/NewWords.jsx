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
  CircularProgress,
} from "@mui/material";
import ModalSelection from "../ui_components/ModalSelection";
import WordRow from "./WordRow";
import { WordsContext } from "../App/WordsContext";
import TableCellInputs from "./TableCellInputs";
import ModalMsg from "../ui_components/ModalMsg";
import { Box } from "@mui/system";
import { TableRows } from "@mui/icons-material";

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
  console.log(obj);
  for (let text in obj) {
    let value = obj[text].trim();
    switch (text) {
      case "english":
        checkEnglishWord.test(value) === false
          ? check++
          : checkEnglishWord.test(value);
        break;
      case "russian":
        checkRussianWord.test(value) === false
          ? check++
          : checkRussianWord.test(value);
        break;
      case "transcription":
        checkTranscribation.test(value) === false
          ? check++
          : checkTranscribation.test(value);
        break;
      case "tags":
        checkRussianWord.test(value) === false
          ? check++
          : checkRussianWord.test(value);
        break;
      case "id":
        break;
      case "tags_json":
        break;
      default:
        console.log(`error in switch`);
        break;
    }
  }
  return check !== 0 ? false : true;
};

const NewWords = () => {
  // global state
  const [words, setWords] = useContext(WordsContext);

  /* -- local states -- */
  const [redrow, setRedrow] = useState(-1); // for rows, open edit fields
  const [isLoaded, setIsLoaded] = useState(false); // table content loaded
  const [open, setOpen] = useState(false); // modal window, delete row
  const [inputID, setInputID] = useState(""); // row id, delete row
  const [change, setChange] = useState(false); // re-render table
  const [newInputText, setNewInputText] = useState({
    id: "",
    english: "",
    transcription: "",
    russian: "",
    tags: "",
    tags_json: "",
  }); // new word
  const [inputError, setInputError] = useState(false); // error for inputs

  useEffect(() => {
    fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then((res) => res.json())
      .then((result) => {
        let array = result.reverse();
        setIsLoaded(true);
        setWords(array);
      });
  }, []);

  /* -- functions -- */
  const handleClickEdit = (index) => {
    setRedrow(index);
  };
  const handleClickRemove = (id) => {
    +id === 1
      ? setNewInputText({
          id: "",
          english: "",
          transcription: "",
          russian: "",
          tags: "",
          tags_json: "",
        })
      : setRedrow(-1);
  };

  // saving field data inputs
  const handleClickDone = (id, text) => {
    let check = checkInputs(text);
    let length = words.length;
    for (let i = 0; i < words.length; i++) {
      if (words[i].id === id) {
        let newWords = words;
        newWords[i] = text;
        setWords(newWords);
      }
    }
    //for new word
    if (id === 1 && check !== false) {
      let newId = +words[0].id + 1;
      let newWord = text;
      console.log(newWord);
      newWord.id = `${newId}`;
      let newWords = words;
      console.log(newWords);
      newWords.unshift(newWord);
      length + 1 === newWords.length ? setWords(newWords) : console.log(length);
      setChange(!change);
      setNewInputText({
        id: "",
        english: "",
        transcription: "",
        russian: "",
        tags: "",
        tags_json: "",
      });
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

  // for new word
  const handleChange = (e) => {
    let value = e.target.value;
    value.match(/^\s+$/) || value === ""
      ? setInputError(true)
      : setInputError(false);
    setNewInputText({ ...newInputText, [e.target.name]: value });
  };

  /* -- component -- */
  return (
    <Container
      sx={{ m: "8vw auto 3vw auto", pb: "1.5vw", width: "50vw" }}
      component={Paper}
    >
      <Table sx={{ width: "100%" }} aria-label="caption table">
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
            <TableCell />
          </TableRow>
        </TableHead>
        {isLoaded ? (
          <TableBody dataset-id={`${change}`}>
            {/* add new word */}
            <TableCellInputs
              inputText={newInputText}
              handleChange={handleChange}
              handleClickDone={() => handleClickDone(1, newInputText)}
              handleClickRemove={() => handleClickRemove(1)}
              id={1}
            />
            {/* table rows */}
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
                  inputError={inputError}
                  // table function
                  redrow={redrow === i}
                  handleClickEdit={() => handleClickEdit(i)}
                  setInputError={setInputError}
                  handleChange={handleChange}
                  handleClickRemove={handleClickRemove}
                  handleClickDone={handleClickDone}
                  handleOpen={handleOpen}
                />
              );
            })}
            <ModalSelection open={open} handleClose={handleClose} />
          </TableBody>
        ) : (
          <TableBody>
            <TableRow>
              <TableCell />
              <TableCell />
              <TableCell sx={{ p: "3vw 0", pl: "1.5vw" }}>
                <CircularProgress size={50} sx={{ m: "0 auto" }} />
              </TableCell>
              <TableCell />
              <TableCell />
            </TableRow>
          </TableBody>
        )}
      </Table>
    </Container>
  );
};

export default NewWords;
