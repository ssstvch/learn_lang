import React from 'react';
import '../styles/newWords.scss'
import { 
    Container, 
    TableRow,
    TableCell,
    TextField,
    IconButton,

} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DoneIcon from '@mui/icons-material/Done';


const WordRow = ({word, translate, transcription, theme, explanation}) => {

    const [redrow, setRedrow] = React.useState(false);

    const handleRowClick = () => {
        setRedrow(!redrow);
    };


    return (
        <React.Fragment>
                {
                    redrow
                    ? <TableRow>
                        <TableCell className={`tablecell`}>
                            <TextField 
                                size="small"
                                variant="standard" 
                                defaultValue={word}
                                className={`tablecell__input`}
                            />
                        </TableCell>
                        <TableCell className={`tablecell`}  >
                            <TextField 
                                size="small"
                                variant="standard" 
                                defaultValue={translate} 
                                className={`tablecell__input`}
                            />
                        </TableCell>
                        <TableCell className={`tablecell`} >
                            <TextField 
                                size="small" 
                                variant="standard" 
                                defaultValue={transcription}
                                className={`tablecell__input`}
                            />
                        </TableCell>
                        <TableCell className={`tablecell`} >
                            <TextField 
                                size="small" 
                                variant="standard" 
                                defaultValue={theme} 
                                className={`tablecell__input`}
                            />
                        </TableCell>
                        <TableCell className={`tablecell tablecell_big`} >
                            <TextField 
                                size="small" 
                                variant="standard" 
                                multiline
                                sx= {{width: "100%"}}
                                defaultValue={explanation}
                                className={`tablecell__input`}
                            />
                        </TableCell>
                        <TableCell className={`tablecell__icons`} >
                        <Container>
                        <IconButton>
                            <DoneIcon 
                                onClick={handleRowClick}
                            />
                        </IconButton>
                        <IconButton>
                            <RemoveCircleIcon 
                                onClick={handleRowClick}
                            />
                        </IconButton>
                        </Container>
                        </TableCell>
                    </TableRow>
                    : <TableRow>
                        <TableCell className={`tablecell`} >{word}</TableCell>
                        <TableCell className={`tablecell`} >{translate}</TableCell>
                        <TableCell className={`tablecell`} >{transcription}</TableCell>
                        <TableCell className={`tablecell`} >{theme}</TableCell>
                        <TableCell className={`tablecell_big`} >{explanation}</TableCell>
                        <TableCell className={`tablecell__icons`} >
                            <Container>
                                <IconButton>
                                    <EditIcon 
                                        onClick={handleRowClick}
                                    />
                                </IconButton>
                                <IconButton>
                                    <DeleteIcon />
                                </IconButton>
                            </Container>
                        </TableCell>
                    </TableRow>
                }
        </React.Fragment>
    )
}

export default WordRow


 
