import React from "react";
import "../styles/newWords.scss";
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
import { words } from "../data/words";

const tableCellStyle = [{ width: "9vw", p: "1.2vw 0.7vw" }];
const tableCellBigStyle = [{ width: "15vw", p: "1.2vw 0.7vw" }];

const NewWords = () => {
  return (
    <Container sx={{ mt: "2vw" }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={tableCellStyle}>
              <b>Word</b>
            </TableCell>
            <TableCell sx={tableCellStyle}>
              <b>Translate</b>
            </TableCell>
            <TableCell sx={tableCellStyle}>
              <b>Transcription</b>
            </TableCell>
            <TableCell sx={tableCellStyle}>
              <b>Theme</b>
            </TableCell>
            <TableCell sx={tableCellBigStyle}>
              <b>Explanation</b>
            </TableCell>
            <TableCell sx={{ width: "6vw" }}>{` `}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {words.map((word) => {
            console.log(word);
            return (
              <WordRow
                key={word.id}
                id={word.id}
                word={word.word}
                translate={word.translate}
                transcription={word.transcription}
                theme={word.theme}
                explanation={word.explanation}
              />
            );
          })}
        </TableBody>
      </Table>
    </Container>
  );
};

export default NewWords;
{
  /* 
    <TableRow>
        <TableCell className={`tablecell`} component="th" scope="row">
            <TextField 
                size="small"  
                sx={textFieldStyle}
                variant="standard" 
                defaultValue="butterfly"
            />
        </TableCell>
        <TableCell className={`tablecell`}  >
            <TextField 
                size="small" 
                sx={textFieldStyle}
                variant="standard" 
                defaultValue="Бабочка" 
            />
        </TableCell>
        <TableCell className={`tablecell`} >
            <TextField 
                size="small" 
                sx={textFieldStyle} 
                variant="standard" 
                defaultValue="[ ˈbʌtəflaɪ ]" 
            />
        </TableCell>
        <TableCell className={`tablecell`} >
            <TextField 
                size="small" 
                variant="standard" 
                sx={textFieldStyle}
                defaultValue="Animals"  
            />
        </TableCell>
        <TableCell className={`tablecell_big`} >
            <TextField 
                size="small" 
                sx={textFieldStyle} 
                variant="standard" 
                defaultValue="Beautiful insect with brighty colored wings. Feed on flower nectar or fruit juice." 
            />
        </TableCell>
        <TableCell className={`tablecell_icons`} >
            <Container>
                <IconButton>
                    <DoneIcon />
                </IconButton>
                <IconButton>
                    <RemoveCircleIcon />
                </IconButton>
                
            </Container>
        </TableCell>
    </TableRow>
*/
}
