import React, { useState } from "react";
import Table from "@mui/material/Table";
import { Box, TablePagination, useTheme } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { stylesnew } from "./style";
import { StyledTableCell, StyledTableRow } from "./style";

function Tablesty({ Rowdata, Column, searchQuery }) {
  const theme = useTheme();
  const styles = stylesnew(theme);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const filteredRows = Rowdata.filter((row) => {
    return row.name
      .toLowerCase()
      .includes(searchQuery.searchQuery.toLowerCase());
  });

  const currentPageRows = filteredRows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box>
      <Box sx={styles.out}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {Column.map((column) => (
                <StyledTableCell key={column.id} align={column.Header}>
                  {column.Header}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPageRows.map((row) => (
              <StyledTableRow key={row.id}>
                {Column.map((column) => (
                  <StyledTableCell key={column.id}>
                    {column.container(row)}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ ...styles.tablefooterc, paddingLeft: "100px" }}
      />
    </Box>
  );
}

export default Tablesty;
