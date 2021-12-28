import React from 'react';
import { words } from '../data/words'
import { Button, Card, CardActions, CardContent, Collapse, Container, Typography } from '@mui/material';
import ButtonLeaf from './ButtonLeaf';

const WordCard = () => {
    const [prompt, setPrompt] = React.useState(false);
    const [translate, setTranslate] = React.useState(false);

    const handlePromptClick = () => {
        (translate === true) && setTranslate(!translate);
        setPrompt(!prompt);
    };

    const handleTranslateClick = () => {
        (prompt === true) && setPrompt(!prompt);
        setTranslate(!translate);
    };

    return (
        <React.Fragment>
            <Card 
                variant="outlined" 
                sx={{
                    width:"25vw", 
                    m: "0 auto", 
                    p: "2vw 2vw 1vw 2vw"
                }}>
                <Typography
                    component="h2"
                    color="text.secondary"
                    sx={{fontSize:"0.7vw"}}
                >
                    {words[0].theme}
                </Typography>

                <Typography 
                    variant="h5" 
                    component="div"
                >
                    {words[0].word}
                </Typography>

                <Typography 
                    sx={{ mb: 1.5 }} 
                    color="text.secondary"
                >
                    {words[0].transcription}
                </Typography>

                <CardActions
                    sx={{
                        justifyContent: "end",
                        p: 0
                    }}
                >
                    <Button
                        expand={prompt.toString()}
                        onClick={handlePromptClick}
                        aria-expanded={prompt}
                        aria-label="show prompt"
                    >
                        prompt
                    </Button>

                    <Button
                        expand={translate.toString()}
                        onClick={handleTranslateClick}
                        aria-expanded={translate}
                        aria-label="show translate"
                    >
                        translate
                    </Button>

                </CardActions>

                <Collapse 
                    in={prompt}
                >
                    <CardContent>
                        <Typography>
                            {words[0].explanation}
                        </Typography>
                    </CardContent>
                </Collapse>

                <Collapse 
                    in={translate}
                >
                    <CardContent>
                        <Typography
                            variant="h6"
                            component="span"
                            color="text.secondary"
                        >
                            translate:
                        </Typography>
                        <Typography>
                            {words[0].translate}
                        </Typography>
                    </CardContent>
                </Collapse>

            </Card>

            <Container
                sx={{
                    width:"25vw", 
                    m: "1vw auto", 
                    display: "flex",
                    justifyContent: "space-between",
                }}
            > 
                <ButtonLeaf
                    color="warning"
                    text="Don't know"
                />
                <ButtonLeaf
                    color="info"
                    text="Know"
                />
            </Container>
        </React.Fragment>
    )
}

export default WordCard;