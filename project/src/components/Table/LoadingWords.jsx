import React from "react";
import "../../styles/_Table.scss";
import {
  TableRow,
  TableCell,
  TableBody,
  CircularProgress,
} from "@mui/material";

const LoadingWords = () => {
  return (
    <TableBody>
      <TableRow>
        <TableCell />
        <TableCell />
        <TableCell sx={{ p: "3vw 0", pl: "1.5vw" }}>
          <CircularProgress size={50} sx={{ m: "0 auto" }} />
        </TableCell>
        <TableCell />
        <TableCell />
      </TableRow>
    </TableBody>
  );
};

export default LoadingWords;
