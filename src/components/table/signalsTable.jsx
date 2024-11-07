import {
  Avatar,
  Box,
  FormControl,
  styled,
  TableBody,
  TableRow,
  Typography,
} from "@mui/material";
import StyledInputLabel from "../inputLabel/InputLabel";
import {
  ReportingList,
  TableDiv,
  StyledTableContainer,
  StyledBottomTableContainer,
  StyledTablePagination,
  StyledTableFooter,
  StyledTableRow,
  MemberProfile,
  MoreTag,
  SignalsAvatar,
  StyledTableHead,
  StyledTableHeading,
  StyledTableCell,
  ToolTipContent,
  SignalList,
  LightTooltip,
  StickyHeading,
  ProfileAvatar,
  StickyCell,
  PencilIcon,
  ActionContainer,
  ActionStickyContainerSeparator,
  ActionPaginationContainerSeparator,
  ActionHeaderContainerSeparator,
  ActionContent,
  StyledTable,
  StyledFormControl,
  PencilIconContainer,
} from "./signalTablestyles";

import ReactSpeedometer from "react-d3-speedometer";
import Table from "@mui/material/Table";
import IosSwitch from "../switch/iosSwitch";

import StyledButton from "../button/Button";

import { useEffect, useState } from "react";
import Drawer from "../drawer/Drawer";
import StyledDrawer from "../drawer/Drawer";
import StyledInput from "../input/Input";
import StyledTextField from "../textField/TextField";
import StyledDatePicker from "../datePicker/datePicker";
import StyledSelect from "../select/Select";
import StyledChip from "../chip/Chip";
import StyledTextArea from "../textArea/StyledTextArea";
const SignalTableComponent = ({
  headings,
  stickyheadings,
  rows,
  stickyColumnData,
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
        return data?.signal
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
                <StyledTableHeading sx={{ position: data.position }}>
                  {data.heading}
                </StyledTableHeading>
              ))}
            </StyledTableRow>
          </StyledTableHead>
          <TableBody>
            {filteredRows?.map((row, i) => {
              return (
                <StyledTableRow>
                  <StyledTableCell>{i + 1}</StyledTableCell>
                  <StyledTableCell>{row?.signal}</StyledTableCell>
                  <StyledTableCell>
                    {row?.day}, {row?.time}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row?.day}, {row?.time}
                  </StyledTableCell>
                  <StyledTableCell minWidth={125}>
                    <IosSwitch
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
                    />{" "}
                    {row?.status ? "Active" : "Deactive"}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{ position: "sticky", zIndex: 2, right: 0 }}
                  >
                    <PencilIconContainer>
                      <PencilIcon
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

export default SignalTableComponent;
