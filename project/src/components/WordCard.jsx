import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Container,
  Typography,
} from "@mui/material";
import "../styles/_training.scss";

const WordCard = ({ theme, word, transcription, translate }) => {
  const [translateWord, setTranslateWord] = useState(false);
  const ref = useRef(null);

  const handleTranslateClick = () => {
    setTranslateWord(!translateWord);
  };

  const focusButton = () => {
    ref.current.focus();
  };

  useEffect(() => focusButton());

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
            ref={ref}
            expand={translateWord.toString()}
            onClick={handleTranslateClick}
            aria-expanded={translateWord}
            aria-label="show translate"
            sx={{
              p: "0.5vw 1.5vw",
              mr: -3,
            }}
          >
            translate
          </Button>
        </CardActions>

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
      ></Container>
    </Container>
  );
};

export default WordCard;
