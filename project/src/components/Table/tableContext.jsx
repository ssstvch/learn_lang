import React, { createContext, useState, useContext } from "react";
import { WordsContext } from "../App/WordsContext";

const TableContext = createContext();

const TableProvider = ({ children }) => {
  // global state
  const { words, setWords, sendData } = useContext(WordsContext);

  const [inputText, setInputText] = useState({
    id: "",
    english: "",
    transcription: "",
    russian: "",
    tags: "",
    tags_json: "",
  });
  const [inputError, setInputError] = useState(false);
  const [edit, setEdit] = useState(-1); // for rows, edit mode
  const [newWord, setNewWord] = useState(false);
  const [open, setOpen] = useState(false); // modal window, delete row
  const [inputID, setInputID] = useState(""); // row id, delete row

  const tableCell = [
    { id: "01", name: "Word", inputName: "english" },
    { id: "02", name: "Translate", inputName: "russian" },
    { id: "03", name: "Transcription", inputName: "transcription" },
    { id: "04", name: "Theme", inputName: "tags" },
  ];

  const handleChange = (e) => {
    let value = e.target.value;
    value.match(/^\s+$/) || value === ""
      ? setInputError(true)
      : setInputError(false);
    setInputText({ ...inputText, [e.target.name]: value });
  };

  const handleClickRemove = () => {
    setInputText({
      id: "",
      english: "",
      transcription: "",
      russian: "",
      tags: "",
      tags_json: "",
    });
    newWord && setNewWord(!newWord);
    return true;
  };

  const getInputText = (word) => {
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
  };
  const addNewWord = () => {
    setNewWord(true);
  };

  const handleClickEdit = (index) => {
    setEdit(index);
  };

  const closeEdit = () => {
    setEdit(-1);
    newWord && setNewWord(!newWord);
  };

  // modal functions and delete row
  const handleOpen = (id) => {
    setInputID(id);
    setOpen(true);
  };
  const handleClose = (e) => {
    let choose = e.target.id;
    let id = +choose.slice(6);
    if (id === 1) {
      for (let i = 0; i < words.length; i++) {
        if (+words[i].id === +inputID) {
          console.log(words[i].id === inputID);
          let newWords = words;
          newWords.splice(i, 1);
          setWords(newWords);
          sendData(id, "delete");
        }
      }
    }
    setOpen(false);
  };

  return (
    <TableContext.Provider
      value={{
        inputText,
        setInputText,
        handleChange,
        handleClickRemove,
        inputError,
        getInputText,
        tableCell,
        newWord,
        setNewWord,
        edit,
        setEdit,
        handleClickEdit,
        addNewWord,
        handleOpen,
        handleClose,
        open,
        setOpen,
        inputID,
        setInputID,
        closeEdit,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export { TableContext, TableProvider };
