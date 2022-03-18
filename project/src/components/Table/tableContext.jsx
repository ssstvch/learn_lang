import React, { createContext, useState } from "react";

const TableContext = createContext();

const TableProvider = ({ children }) => {
  const [inputText, setInputText] = useState({
    id: "",
    english: "",
    transcription: "",
    russian: "",
    tags: "",
    tags_json: "",
  });
  const [inputError, setInputError] = useState(false);

  const handleChange = (e) => {
    let value = e.target.value;
    value.match(/^\s+$/) || value === ""
      ? setInputError(true)
      : setInputError(false);
    setInputText({ ...inputText, [e.target.name]: value });
  };

  const handleClickRemove = () => {
    setInputText({
      id: "",
      english: "",
      transcription: "",
      russian: "",
      tags: "",
      tags_json: "",
    });
    return true;
  };

  return (
    <TableContext.Provider
      value={{ inputText, setInputText, handleChange, handleClickRemove }}
    >
      {children}
    </TableContext.Provider>
  );
};

export { TableContext, TableProvider };
