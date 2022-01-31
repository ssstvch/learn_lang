import React from "react";
import "../styles/_newWords.scss";
import {
  Container,
  TableRow,
  TableCell,
  TextField,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DoneIcon from "@mui/icons-material/Done";

const WordRow = ({ word, translate, transcription, theme, id }) => {
  const [redrow, setRedrow] = React.useState(false);
  const [inputText, setInputText] = React.useState(-1);

  const handleRowClick = () => {
    setRedrow(!redrow);
  };

  const handleChange = (e) => {
    // достаю инпуты редактируемой строки
    const dataset = e.target.parentNode.dataset.id;
    let inputParent = document.getElementsByClassName(dataset);

    // создаю массив для хранения значений из инпутов
    let inputs = [];

    // сохраняю в массив данные из инпутов
    for (let key of inputParent) {
      inputs.push(key.children[0].children[0].value);
    }
    console.log(inputs);

    // бывает, что возвращается пустой массив, проверка перед рендерингом
    inputs.length !== 0
      ? setInputText()
      : console.log("Нулевой массив, нужно нажать ещё раз");
  };

  return (
    <React.Fragment>
      {redrow ? (
        <TableRow>
          <TableCell className={`tablecell`}>
            <TextField
              size="small"
              variant="standard"
              defaultValue={word}
              className={`tablecell__input ${`${word}-${id}`}`}
            />
          </TableCell>
          <TableCell className={`tablecell`}>
            <TextField
              size="small"
              variant="standard"
              defaultValue={translate}
              className={`tablecell__input ${`${word}-${id}`}`}
            />
          </TableCell>
          <TableCell className={`tablecell`}>
            <TextField
              size="small"
              variant="standard"
              defaultValue={transcription}
              className={`tablecell__input ${`${word}-${id}`}`}
            />
          </TableCell>
          <TableCell className={`tablecell`}>
            <TextField
              size="small"
              variant="standard"
              defaultValue={theme}
              className={`tablecell__input ${`${word}-${id}`}`}
            />
          </TableCell>
          <TableCell className={`tablecell__icons`}>
            <Container>
              <IconButton data-id={`${word}-${id}`} onClick={handleChange}>
                <DoneIcon />
              </IconButton>
              <IconButton data-id={`${word}-${id}`} onClick={handleRowClick}>
                <RemoveCircleIcon />
              </IconButton>
            </Container>
          </TableCell>
        </TableRow>
      ) : (
        <TableRow>
          <TableCell className={`tablecell`}>{word}</TableCell>
          <TableCell className={`tablecell`}>{translate}</TableCell>
          <TableCell className={`tablecell`}>{transcription}</TableCell>
          <TableCell className={`tablecell`}>{theme}</TableCell>
          <TableCell className={`tablecell__icons`}>
            <Container>
              <IconButton onClick={handleRowClick}>
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
