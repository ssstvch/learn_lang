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

const tableCellStyle = [{width: '8.5vw', p:'1.2vw 0.7vw'}];
const tableCellBigStyle = [{width: '8.5vw', p:'1.2vw 0.7vw'}];


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
                        <TableCell className={`tablecell`} component="th" scope="row">
                            <TextField 
                                size="small"
                                variant="standard" 
                                defaultValue={word}
                            />
                        </TableCell>
                        <TableCell className={`tablecell`}  >
                            <TextField 
                                size="small"
                                variant="standard" 
                                defaultValue={translate} 
                            />
                        </TableCell>
                        <TableCell className={`tablecell`} >
                            <TextField 
                                size="small" 
                                variant="standard" 
                                defaultValue={transcription}
                            />
                        </TableCell>
                        <TableCell className={`tablecell`} >
                            <TextField 
                                size="small" 
                                variant="standard" 
                                defaultValue={theme} 
                            />
                        </TableCell>
                        <TableCell className={`tablecell_big`} >
                            <TextField 
                                size="small" 
                                variant="standard" 
                                multiline
                                sx= {{width: "100%"}}
                                defaultValue={explanation}
                            />
                        </TableCell>
                        <TableCell className={`tablecell_icons`} >
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
                        <TableCell sx={tableCellStyle} className={`tablecell`} component="th" scope="row">{word}</TableCell>
                        <TableCell sx={tableCellStyle} className={`tablecell`} >{translate}</TableCell>
                        <TableCell sx={tableCellStyle} className={`tablecell`} >{transcription}</TableCell>
                        <TableCell sx={tableCellStyle} className={`tablecell`} >{theme}</TableCell>
                        <TableCell sx={tableCellBigStyle} className={`tablecell_big`} >{explanation}</TableCell>
                        <TableCell sx={tableCellStyle} className={`tablecell_icons`} >
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


 
