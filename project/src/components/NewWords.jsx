import React from 'react';
import '../styles/newWords.scss';
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
import WordRow from './WordRow';
// import { words } from '../data/words';

const words = [
    {
        id:"00000",
        word:"butterfly",
        transcription:"[ ˈbʌtəflaɪ ]",
        translate:"бабочка",
        explanation: "Beautiful insect with brighty colored wings. Feed on flower nectar or fruit juice.",
        theme:"Насекомые"
    },
    {
        id:"00001",
        word:"hedgehog",
        transcription:"[ˈhedʒhɔːɡ]",
        translate:"ёжик",
        explanation: " ",
        theme:"Животные"
    },
    {
        id:"00002",
        word:"apple",
        transcription:"[ˈæpl]",
        translate:"яблоко",
        explanation: " ",
        theme:"Фрукты"
    },
    {
        id:"00003",
        word:"pear",
        transcription:"[peə]",
        translate:"груша",
        explanation: " ",
        theme:"Фрукты"
    },
    {
        id:"00004",
        word:"carrot",
        transcription:"[ˈkærət]",
        translate:"морковка",
        explanation: " ",
        theme:"Овощи"
    },
    {
        id:"00005",
        word:"plum",
        transcription:"[plʌm]",
        translate:"слива",
        explanation: " ",
        theme:"Фрукты"
    },
    {
        id:"00006",
        word:"unicorn",
        transcription:"",
        translate:"единорог",
        explanation: " ",
        theme:"Животные"
    },
    {
        id:"00007",
        word:"cat",
        transcription:"[kæt]",
        translate:"кот",
        explanation: " ",
        theme:"Животные"
    },
]

const tableCellStyle = [{width:'5vw', p:'1.2vw 0.7vw'}];
const tableCellBigStyle = [{width:'10vw', p:'1.2vw 0.7vw'}];
const textFieldStyle = [{ width: '100%' }];

const NewWords = () => (
    <React.Fragment>
        <Container sx={{ mt: "2vw" }} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={tableCellStyle}><b>Word</b></TableCell>
                        <TableCell sx={tableCellStyle}><b>Translate</b></TableCell>
                        <TableCell sx={tableCellStyle}><b>Transcription</b></TableCell>
                        <TableCell sx={tableCellStyle}><b>Theme</b></TableCell>
                        <TableCell sx={tableCellBigStyle}><b>Explanation</b></TableCell>
                        {/* <TableCell sx={tableCellStyle}>{` `}</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {words.map((word) => {
                        console.log(word);
                        return (<WordRow
                            key={word.id}
                            word={word.word}
                            translate={word.translate}
                            transcription={word.transcription}
                            theme={word.theme}
                            explanation={word.explanation} 
                        />);
                    })}
                    {/* <WordRow
                        word={words[0].word}
                        translate={words[0].translate}
                        transcription={words[0].transcription}
                        theme={words[0].theme}
                        explanation={words[0].explanation} />


                    <WordRow
                        word={words[1].word}
                        translate={words[1].translate}
                        transcription={words[1].transcription}
                        theme={words[1].theme}
                        explanation={words[1].explanation} /> */}
                </TableBody>
            </Table>
        </Container>
    </React.Fragment>
)

export default NewWords
{/* 
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
*/}