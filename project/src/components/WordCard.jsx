import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Container,
  Typography,
} from "@mui/material";
import ButtonLeaf from "./ButtonLeaf";

const WordCard = ({ theme, word, transcription, translate, explanation }) => {
  const [prompt, setPrompt] = React.useState(false);
  const [translateWord, setTranslateWord] = React.useState(false);

  const handlePromptClick = () => {
    translateWord === true && setTranslateWord(!translateWord);
    setPrompt(!prompt);
  };

  const handleTranslateClick = () => {
    prompt === true && setPrompt(!prompt);
    setTranslateWord(!translateWord);
  };

  return (
    <Container>
      <Card
        variant="outlined"
        sx={{
          width: "25vw",
          m: "0 auto",
          p: "2vw 2vw 1vw 2vw",
        }}
      >
        <Typography
          component="h2"
          color="text.secondary"
          sx={{ fontSize: "0.7vw" }}
        >
          {theme}
        </Typography>

        <Typography variant="h5" component="div">
          {word}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {transcription}
        </Typography>

        <CardActions
          sx={{
            justifyContent: "end",
            p: 0,
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
            expand={translateWord.toString()}
            onClick={handleTranslateClick}
            aria-expanded={translateWord}
            aria-label="show translate"
          >
            translate
          </Button>
        </CardActions>

        <Collapse in={prompt}>
          <CardContent>
            <Typography>{explanation}</Typography>
          </CardContent>
        </Collapse>

        <Collapse in={translateWord}>
          <CardContent>
            <Typography variant="h6" component="span" color="text.secondary">
              translate:
            </Typography>
            <Typography>{translate}</Typography>
          </CardContent>
        </Collapse>
      </Card>

      <Container
        sx={{
          width: "25vw",
          m: "1vw auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ButtonLeaf color="warning" text="Don't know" />
        <ButtonLeaf color="info" text="Know" />
      </Container>
    </Container>
  );
};

export default WordCard;
