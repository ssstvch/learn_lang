import React, { createContext, useState } from "react";

const WordsContext = createContext();

const WordsProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  return (
    <WordsContext.Provider value={[words, setWords]}>
      {children}
    </WordsContext.Provider>
  );
};

export { WordsContext, WordsProvider };
