import {
  Avatar,
  Box,
  FormControl,
  styled,
  TableBody,
  TableRow,
  Typography,
} from "@mui/material";
import StyledInputLabel from "../inputLabel/inputLabel";
import {
  TableDiv,
  StyledTableContainer,
  StyledBottomTableContainer,
  StyledTablePagination,
  StyledTableFooter,
  StyledTableRow,
  StyledTableHead,
  StyledTableHeading,
  StyledTableCell,
  PencilIcon,
  ActionPaginationContainerSeparator,
  ActionHeaderContainerSeparator,
  StyledTable,
  StyledFormControl,
  PencilIconContainer,
  ActiveContainer,
} from "./departmentTable.styles";

import Table from "@mui/material/Table";
import IOSSwitch from "../switch/switch";
import { useEffect, useState } from "react";
import StyledDrawer from "../drawer/drawer";
import StyledTextField from "../textField/textField";
import StyledTextArea from "../textArea/styledTextArea";
import { EmSizeMWeight, MSizeRWeight } from "../typography/typography";
import PencilIconSvg from "../../assets/icons/pencil";
const DepartmentTableComponent = ({
  headings,
  rows,
  setRows,
  searchQuery = "",
}) => {
  const [filteredRows, setFilteredRows] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const [isEditMemberDrawerOpen, setIsEditMemberDrawerOpen] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [modifiedRows, setModifiedRows] = useState([]);
  useEffect(() => {
    setModifiedRows(
      rows?.filter((data) => {
        return data?.department
          ?.toLowerCase()
          ?.includes(searchQuery?.toLowerCase()?.trim());
      })
    );
  }, [rows, searchQuery]);

  useEffect(() => {
    const startIndex = currPage * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    console.log(startIndex, endIndex);
    setFilteredRows(modifiedRows?.slice(startIndex, endIndex));
  }, [modifiedRows, currPage, rowsPerPage]);

  useEffect(() => {
    setCurrPage(0);
  }, [rowsPerPage]);

  return (
    <TableDiv>
      <ActionHeaderContainerSeparator />
      <ActionPaginationContainerSeparator />
      <StyledTableContainer>
        <StyledTable draggable={false}>
          <StyledTableHead>
            <StyledTableRow>
              {headings?.map((data) => (
                <StyledTableHeading>
                  <EmSizeMWeight content={data} />
                </StyledTableHeading>
              ))}
            </StyledTableRow>
          </StyledTableHead>
          <TableBody>
            {filteredRows?.map((row, i) => {
              return (
                <StyledTableRow>
                  <StyledTableCell>
                    <MSizeRWeight content={i + 1} />
                  </StyledTableCell>
                  <StyledTableCell>
                    <MSizeRWeight content={row?.department} />
                  </StyledTableCell>
                  <StyledTableCell>
                    <MSizeRWeight content={row?.created_on} />
                  </StyledTableCell>
                  <StyledTableCell>
                    <MSizeRWeight content={row?.modified_on} />
                  </StyledTableCell>
                  <StyledTableCell minWidth={125}>
                    <ActiveContainer>
                      <IOSSwitch
                        onChange={(e) => {
                          setRows((prev) => {
                            const newPrev = [...prev];
                            const target = newPrev.findIndex(
                              (data) => data?.id === row?.id
                            );
                            newPrev[target].status = e.target.checked ? 1 : 0;
                            return newPrev;
                          });
                        }}
                        checked={row?.status}
                      />
                      <MSizeRWeight
                        content={row?.status ? "Active" : "Deactive"}
                      />
                    </ActiveContainer>
                  </StyledTableCell>
                  <StyledTableCell>
                    <PencilIconContainer>
                      <PencilIconSvg
                        onClick={() => {
                          setIsEditMemberDrawerOpen(true);
                        }}
                      />
                    </PencilIconContainer>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
      <StyledBottomTableContainer>
        <Table>
          <StyledTableFooter>
            <TableRow>
              <StyledTablePagination
                page={currPage}
                onRowsPerPageChange={(e, value) => {
                  setRowsPerPage(e.target.value);
                }}
                onPageChange={(e, page) => {
                  setCurrPage(page);
                }}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[5, 10, 25, 50]}
                count={modifiedRows ? modifiedRows.length : 0}
              />
            </TableRow>
          </StyledTableFooter>
        </Table>
      </StyledBottomTableContainer>
      <StyledDrawer
        title={"Edit Department"}
        content={<DrawerForm />}
        anchor={"right"}
        bottomLeftButton={{ label: "Save", onClick: () => {} }}
        onClose={() => {
          setIsEditMemberDrawerOpen(false);
        }}
        open={isEditMemberDrawerOpen}
      />
    </TableDiv>
  );
};

const DrawerForm = () => {
  return (
    <StyledFormControl>
      <StyledInputLabel required>Name</StyledInputLabel>
      <StyledTextField
        placeholder="Type name"
        size="small"
        fullWidth
      ></StyledTextField>
      <StyledInputLabel>Description</StyledInputLabel>
      <StyledTextArea minRows={7} />
    </StyledFormControl>
  );
};

export default DepartmentTableComponent;
