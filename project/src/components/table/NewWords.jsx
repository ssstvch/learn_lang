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
import WordRow from "./WordRow";
import { WordsContext } from "../WordsContext";

const tableCell = [
  { id: "01", name: "Word" },
  { id: "02", name: "Translate" },
  { id: "03", name: "Transcription" },
  { id: "04", name: "Theme" },
];

const NewWords = () => {
  // global state
  const [words, setWords] = useContext(WordsContext);

  // local states
  const [redrow, setRedrow] = useState(-1);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setIsLoaded(true);
        setWords(result);
      });
  }, []);

  // functions
  const handleRowClick = (index) => {
    setRedrow(index);
  };
  const handleChangeRemove = () => {
    setRedrow(-1);
  };

  // component
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
                setRedrow={setRedrow}
                redrow={redrow === i}
                onclick={() => handleRowClick(i)}
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
