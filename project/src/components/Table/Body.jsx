import React, { useContext } from "react";
import "../../styles/_Table.scss";
import { Button, TableBody, TableRow, TableCell } from "@mui/material";
import TableCellInputs from "./TableCellInputs";
import WordRow from "./WordRow";
import ModalSelection from "../ui_components/ModalSelection";
import { WordsContext } from "../App/WordsContext";
import { TableContext } from "./tableContext";

const Body = () => {
  // global state
  const { words } = useContext(WordsContext);
  const { newWord, addNewWord } = useContext(TableContext);

  return (
    <TableBody>
      {/* add new word */}
      {newWord ? (
        <TableCellInputs id={1} />
      ) : (
        <TableRow>
          <TableCell className={`tablecell`}></TableCell>
          <TableCell className={`tablecell`}></TableCell>
          <TableCell className={`tablecell`}></TableCell>
          <TableCell className={`tablecell`}></TableCell>
          <TableCell className={`tablecell__icons`}>
            <Button onClick={addNewWord}>Add new word</Button>
          </TableCell>
        </TableRow>
      )}

      {/* table rows */}
      {words.map((word, i) => {
        return (
          <WordRow key={`${word.tags_json}-${word.id}`} word={word} index={i} />
        );
      })}
      <ModalSelection />
    </TableBody>
  );
};

export default Body;
