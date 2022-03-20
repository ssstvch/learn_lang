import React, { useContext } from "react";
import "../../styles/_Table.scss";
import { WordsContext } from "../App/WordsContext";
import { TableContext } from "./tableContext";
import {
  Container,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import LoadingWords from "./LoadingWords";
import Body from "./Body";

const TableWords = () => {
  // global state
  const { isLoading } = useContext(WordsContext);
  const { tableCell } = useContext(TableContext);

  /* -- component -- */
  return (
    <Container className={`table-conatiner`} component={Paper}>
      <Table className={`table`} aria-label="caption table">
        <TableHead>
          <TableRow>
            {tableCell.map((_) => {
              return (
                <TableCell key={_.id} className={`table__headers`}>
                  <b>{_.name}</b>
                </TableCell>
              );
            })}
            {/* empty cell */}
            <TableCell className={`table__headers`} />
          </TableRow>
        </TableHead>
        {isLoading ? <LoadingWords /> : <Body />}
      </Table>
    </Container>
  );
};

export default TableWords;
