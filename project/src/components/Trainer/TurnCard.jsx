import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Grid, IconButton, Typography, Container, Button } from "@mui/material";
import React, { useContext, useState } from "react";
import WordCard from "./WordCard";
import Title from "../ui_components/Title";
import { WordsContext } from "../App/WordsContext";

const buttons = [
  {
    id: "01",
    text: "Don't know",
    color: "warning",
    size: "large",
    variant: "contained",
  },
  {
    id: "02",
    text: "Know",
    color: "info",
    size: "large",
    variant: "outlined",
  },
];

let counter = undefined;

const TurnCard = ({ index }) => {
  const { words } = useContext(WordsContext);
  const [card, setCard] = useState(index ?? 0);
  const [selectedButton, setSelectedButton] = useState(-1);
  const [wordsCount, setWordsCount] = useState(0);

  const increaseCounterState = () => {
    setWordsCount(wordsCount + 1);
    return wordsCount + 1;
  };

  const checkWordsId = () => {
    counter.length > 1
      ? counter.filter((_) => {
          return +_.id === +words[card].id;
        }).length === 0
        ? counter.push({
            count: increaseCounterState(),
            id: words[card].id,
          })
        : console.log(`Такое слово уже добавлено в изучение 46`)
      : counter[0].id !== words[card].id
      ? counter.push({
          count: increaseCounterState(),
          id: words[card].id,
        })
      : console.log(`Такое слово уже добавлено в изучение!!!`);
  };

  const increaseCounter = () => {
    counter === undefined && selectedButton === 0
      ? (counter = [{ count: increaseCounterState(), id: words[card].id }])
      : selectedButton === 0
      ? checkWordsId()
      : console.log(`Выученное слово`);
    console.log(counter);
  };

  const addCountNext = () => {
    setCard(card + 1);
    increaseCounter();
  };

  const addCountPrev = () => {
    setCard(card - 1);
    increaseCounter();
  };

  const lastCard = () => {
    increaseCounter();
    alert(`This is last card`);
  };

  const firstCard = () => {
    increaseCounter();
    alert(`This is first card`);
  };

  const nextCard = () => {
    checkButtons()
      ? card === words.length - 1
        ? lastCard()
        : addCountNext()
      : alert(`select your knowledge`);
    setSelectedButton(-1);
  };

  const prevCard = () => {
    checkButtons()
      ? card === 0
        ? firstCard()
        : addCountPrev()
      : alert(`select your knowledge`);
    setSelectedButton(-1);
  };

  const checkButtons = () => {
    return selectedButton === -1 ? false : true;
  };

  const handleClick = (i) => {
    setSelectedButton(i);
  };

  return (
    <React.Fragment>
      <Title text={"Word Card"} />
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
        {words[card] === undefined ? (
          alert(`Карточки не получены`)
        ) : (
          <Grid
            sx={{
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <WordCard
              key={words[card].id}
              word={words[card].english}
              transcription={words[card].transcription}
              translate={words[card].russian}
              theme={
                words[card].tags === "" ? <i>без темы</i> : words[card].tags
              }
            />
            <Container
              sx={{
                width: "max-content",
              }}
            >
              {buttons.map((_, index) => {
                return (
                  <Button
                    key={_.id}
                    color={_.color}
                    size={_.size}
                    variant={
                      selectedButton === index ? "contained" : "outlined"
                    }
                    className={"knowledge"}
                    onClick={() => handleClick(index)}
                  >
                    {_.text}
                  </Button>
                );
              })}
            </Container>
          </Grid>
        )}
        <IconButton onClick={nextCard}>
          <ArrowForwardIos />
        </IconButton>
      </Grid>
      <Typography
        component="div"
        sx={{ textAlign: "center", m: "1vw auto" }}
      >{`${card + 1}/${words.length}`}</Typography>
    </React.Fragment>
  );
};

export default TurnCard;
