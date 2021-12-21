import React from 'react';
import '../styles/newWords.module.scss'
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
const textFieldStyle = [{fontSize: '0.8vw', textAlign: 'right'}]

const NewWords = () => {
    return (
        <React.Fragment>
            <Container sx={{mt:"2vw"}} component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={tableCellStyle}><b>Word</b></TableCell>
                            <TableCell align="right" sx={tableCellStyle}><b>Translate</b></TableCell>
                            <TableCell align="right" sx={tableCellStyle}><b>Transcription</b></TableCell>
                            <TableCell align="right" sx={tableCellStyle}><b>Theme</b></TableCell>
                            <TableCell align="right" sx={tableCellBigStyle}><b>Explanation</b></TableCell>
                            <TableCell align="right" sx={tableCellStyle}>{` `}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* через метод map будут прогружаться строки */}
                        <TableRow>
                            <TableCell sx={tableCellStyle} className={`tablecell`} component="th" scope="row">butterfly</TableCell>
                            <TableCell sx={tableCellStyle} className={`tablecell`} align="right">Бабочка</TableCell>
                            <TableCell sx={tableCellStyle} className={`tablecell`} align="right">[ ˈbʌtəflaɪ ]</TableCell>
                            <TableCell sx={tableCellStyle} className={`tablecell`} align="right">Animals</TableCell>
                            <TableCell sx={tableCellBigStyle} className={`tablecell_big`} align="right">Beautiful insect with brighty colored wings. Feed on flower nectar or fruit juice.</TableCell>
                            <TableCell sx={tableCellStyle} className={`tablecell_icons`} align="right">
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
                                <TextField variant="standart" defaultValue="butterfly" sx={textFieldStyle}></TextField>
                            </TableCell>
                            <TableCell className={`tablecell`} align="right" >
                                <TextField variant="standart" defaultValue="Бабочка" sx={textFieldStyle}></TextField>
                            </TableCell>
                            <TableCell className={`tablecell`} align="right">
                                <TextField variant="standart" defaultValue="[ ˈbʌtəflaɪ ]" sx={textFieldStyle}></TextField>
                            </TableCell>
                            <TableCell className={`tablecell`} align="right">
                                <TextField variant="standart" defaultValue="Animals" sx={textFieldStyle}></TextField>
                            </TableCell>
                            <TableCell className={`tablecell_big`} align="right">
                                <TextField variant="standart" defaultValue="Beautiful insect with brighty colored wings. Feed on flower nectar or fruit juice." sx={textFieldStyle} ></TextField>
                            </TableCell>
                            <TableCell className={`tablecell_icons`} align="right">
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
