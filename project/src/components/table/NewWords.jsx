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

const NewWords = () => {
  const [redrow, setRedrow] = React.useState(-1);
  const handleRowClick = (index) => {
    setRedrow(index);
  };
  const handleChangeDone = (inputError) => {
    return inputError ? alert("Заполните все поля") : setRedrow(-1);
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
