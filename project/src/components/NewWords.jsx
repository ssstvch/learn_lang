import React from 'react';
import '../styles/newWords.module.scss';
import { 
    Container, 
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    IconButton,
    TextField,

} from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';

const tableCellStyle = [{width:'5vw', p:'1.2vw 0.7vw'}];
const tableCellBigStyle = [{width:'10vw', p:'1.2vw 0.7vw'}];
const textFieldStyle = [{ width: '100%' }]

const NewWords = () => {
    return (
        <React.Fragment>
            <Container sx={{mt:"2vw"}} component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={tableCellStyle}><b>Word</b></TableCell>
                            <TableCell  sx={tableCellStyle}><b>Translate</b></TableCell>
                            <TableCell  sx={tableCellStyle}><b>Transcription</b></TableCell>
                            <TableCell  sx={tableCellStyle}><b>Theme</b></TableCell>
                            <TableCell  sx={tableCellBigStyle}><b>Explanation</b></TableCell>
                            <TableCell  sx={tableCellStyle}>{` `}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* через метод map будут прогружаться строки */}
                        <TableRow>
                            <TableCell sx={tableCellStyle} className={`tablecell`} component="th" scope="row">butterfly</TableCell>
                            <TableCell sx={tableCellStyle} className={`tablecell`} >Бабочка</TableCell>
                            <TableCell sx={tableCellStyle} className={`tablecell`} >[ ˈbʌtəflaɪ ]</TableCell>
                            <TableCell sx={tableCellStyle} className={`tablecell`} >Animals</TableCell>
                            <TableCell sx={tableCellBigStyle} className={`tablecell_big`} >Beautiful insect with brighty colored wings. Feed on flower nectar or fruit juice.</TableCell>
                            <TableCell sx={tableCellStyle} className={`tablecell_icons`} >
                                <Container>
                                    <IconButton>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton>
                                        <DeleteIcon />
                                    </IconButton>
                                </Container>
                            </TableCell>
                        </TableRow>
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
                    </TableBody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default NewWords
