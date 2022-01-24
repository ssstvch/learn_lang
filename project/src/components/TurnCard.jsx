import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import WordCard from "./WordCard";
import { words } from "../data/words";

const TurnCard = ({ index }) => {
  const [card, setCard] = React.useState(index ?? 0);

  const nextCard = () => {
    card === words.length - 1
      ? alert(`Это последняя карточка`)
      : setCard(card + 1);
  };

  const prevCard = () => {
    card === 0 ? alert(`Это первая карточка`) : setCard(card - 1);
  };

  useEffect(() => {
    console.log(card);
  }, [card]);

  return (
    <React.Fragment>
      <Grid
        sx={{
          m: "0 auto",
          width: "30vw",
          flexWrap: "nowrap",
          alignItems: "center",
        }}
        container
        spacing={2}
      >
        <IconButton onClick={prevCard}>
          <ArrowBackIosNew />
        </IconButton>
        {
          (words[card] === undefined) ? alert(`Карточки не получены`) : <WordCard
            key={words[card].id}
            word={words[card].word}
            transcription={words[card].transcription}
            translate={words[card].translate}
            explanation={words[card].explanation}
            theme={words[card].theme}
          />
        }
        <IconButton onClick={nextCard}>
          <ArrowForwardIos />
        </IconButton>
      </Grid>
      <Typography component="div" sx={{ textAlign: "center", m: "1vw auto" }}>{`${
        card + 1
      }/${words.length}`}</Typography>
    </React.Fragment>
  );
};

export default TurnCard;
