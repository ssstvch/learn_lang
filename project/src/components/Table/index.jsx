import React, { useState, useContext } from "react";
import "../../styles/_Table.scss";
import { WordsContext } from "../App/WordsContext";
import { TableContext, TableProvider } from "./tableContext";
import {
  Container,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import ModalSelection from "../ui_components/ModalSelection";
import WordRow from "./WordRow";
import TableCellInputs from "./TableCellInputs";
import LoadingWords from "./LoadingWords";
import ModalMsg from "../ui_components/ModalMsg";

const tableCell = [
  { id: "01", name: "Word" },
  { id: "02", name: "Translate" },
  { id: "03", name: "Transcription" },
  { id: "04", name: "Theme" },
];

const TableWords = () => {
  // global state
  const { words, setWords, isLoading, sendData, handleClickDone } =
    useContext(WordsContext);
  const [edit, setEdit] = useState(-1); // for rows, edit mode
  const [open, setOpen] = useState(false); // modal window, delete row
  const [inputID, setInputID] = useState(""); // row id, delete row

  /* -- functions -- */
  const handleClickEdit = (index) => {
    setEdit(index);
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

  /* -- component -- */
  return (
    <TableProvider>
      <Container className={`table-conatiner`} component={Paper}>
        <Table className={`table`} aria-label="caption table">
          <TableHead>
            <TableRow>
              {tableCell.map((_) => {
                return (
                  <TableCell key={_.id} className={`table__headers`}>
                    <b>{_.name}</b>
                  </TableCell>
                );
              })}
              {/* empty cell */}
              <TableCell className={`table__headers`} />
            </TableRow>
          </TableHead>
          {isLoading ? (
            <LoadingWords />
          ) : (
            <TableBody>
              {/* add new word */}
              <TableCellInputs id={1} />
              {/* table rows */}
              {words.map((word, i) => {
                return (
                  <WordRow
                    // table data
                    word={word}
                    key={`${word.tags_json}-${word.id}`}
                    // table function
                    edit={edit === i}
                    handleClickEdit={() => handleClickEdit(i)}
                    setEdit={setEdit}
                    handleOpen={handleOpen}
                  />
                );
              })}
              <ModalSelection open={open} handleClose={handleClose} />
            </TableBody>
          )}
        </Table>
      </Container>
    </TableProvider>
  );
};

export default TableWords;
