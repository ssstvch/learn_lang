import React, { createContext, useState, useEffect } from "react";

const WordsContext = createContext();

const WordsProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // words loading
  const [error, setError] = useState(null); // loading error

  useEffect(() => {
    setIsLoading(true);
    getWords();
  }, []);

  /* -- functions -- */
  const getWords = () => {
    fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("something went wrong..");
        }
      })
      .then((result) => {
        setWords(result);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        // AD AN ERROR MSG FOR USERS
        setIsLoading(false);
      });
  };

  const checkInputs = (obj) => {
    const checkEnglishWord = /^[a-zA-Z]{2,16}$/g;
    const checkRussianWord = /^[а-яА-ЯёЁ]{2,16}$/g;
    const checkTranscribation = /^[/[{1}]\D{1,16}[\]{1}]$/g;
    let check = 0;
    console.log(obj);
    for (let text in obj) {
      let value = obj[text].trim();
      switch (text) {
        case "english":
          checkEnglishWord.test(value) === false
            ? check++
            : checkEnglishWord.test(value);
          break;
        case "russian":
          checkRussianWord.test(value) === false
            ? check++
            : checkRussianWord.test(value);
          break;
        case "transcription":
          checkTranscribation.test(value) === false
            ? check++
            : checkTranscribation.test(value);
          break;
        case "tags":
          checkRussianWord.test(value) === false
            ? check++
            : checkRussianWord.test(value);
          break;
        case "id":
          break;
        case "tags_json":
          break;
        default:
          console.log(`error in switch`);
          break;
      }
    }
    return check !== 0 ? false : true;
  };

  const sendData = (action, id) => {
    setIsLoading(true);
    let url;
    action === "add" ? (url = `${action}`) : (url = `${id}/${action}`);
    fetch(`/api/words/${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(words),
    })
      .then((response) => {
        alert("Данные отправлены");
        setIsLoading(false);
        setWords(words.reverse());
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setError(error);
      });
  };

  const handleClickDone = (id, text) => {
    let check = checkInputs(text);
    let length = words.length;
    for (let i = 0; i < words.length; i++) {
      if (words[i].id === id) {
        let newWords = words;
        newWords[i] = text;
        setWords(newWords);
        sendData(id, "update");
      }
    }
    //for new word
    if (id === 1 && check !== false) {
      let newId = +words[0].id + 1;
      let newWord = text;
      newWord.id = `${newId}`;
      let newWords = words;
      newWords.unshift(newWord);
      length + 1 === newWords.length ? setWords(newWords) : console.log(length);
      sendData("add");
    }
    return true;
  };

  return (
    <WordsContext.Provider
      value={{
        words,
        setWords,
        isLoading,
        sendData,
        handleClickDone,
        error,
      }}
    >
      {children}
    </WordsContext.Provider>
  );
};

export { WordsContext, WordsProvider };
