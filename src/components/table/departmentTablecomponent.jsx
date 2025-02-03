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
import { useEffect, useRef, useState } from "react";
import StyledDrawer from "../drawer/drawer";
import StyledTextField from "../textField/textField";
import StyledTextArea from "../textArea/styledTextArea";
import { EmSizeMWeight, MSizeRWeight } from "../typography/typography";
import PencilIconSvg from "../../assets/icons/pencil";
import IosSwitch from "../switch/iosSwitch";
import settingStore from "../../zustand/settings/store";
const DepartmentTableComponent = ({
  headings,
  rows,
  setRows,
  searchQuery = "",
  Deactivate,
}) => {
  const [filteredRows, setFilteredRows] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const [isEditMemberDrawerOpen, setIsEditMemberDrawerOpen] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [clicked, setClicked] = useState(true);
  const [rowss, setRow] = useState(0);
  const inputRef = useRef();
  const [indexs, setIndexs] = useState(0);
  const [modifiedRows, setModifiedRows] = useState([]);
  const replaceDepartmentRow = settingStore(
    (state) => state.replaceDepartmentRow
  );
  const handleDepartmentActiveButton = settingStore(
    (state) => state.handleDepartmentActiveButton
  );
  const DrawerForm = () => {
    return (
      <StyledFormControl>
        <StyledInputLabel required>Name</StyledInputLabel>
        <StyledTextField
          placeholder="Type name"
          size="small"
          fullWidth
          inputRef={inputRef}
        ></StyledTextField>
        <StyledInputLabel>Description</StyledInputLabel>
        <StyledTextArea minRows={7} />
      </StyledFormControl>
    );
  };
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

  function UpdateItem() {
    const currentDate = new Date();
    const time = currentDate.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: "true",
    });
    const day = currentDate.toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    replaceDepartmentRow({
      oldItem: filteredRows[indexs].department,
      newItem: inputRef.current.value,
      day: day,
      time: time,
    });

    setIsEditMemberDrawerOpen(false);
  }
  const handleToggleClick = (index, status, dialog) => {
    const newClickedState = !clicked;
    setClicked(newClickedState);
    setRow(index);
    if (dialog) {
      handleDepartmentActiveButton({
        oldItem: index + 1,
        status: newClickedState,
        active: status,
        dialog: dialog,
      });
    } else {
      handleDepartmentActiveButton({
        oldItem: index + 1,
        status: newClickedState,
        active: status,
      });
    }
  };

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
                    {row?.cday}, {row?.ctime}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row?.mday}, {row?.mtime}
                  </StyledTableCell>
                  <StyledTableCell minWidth={125}>
                    <IosSwitch
                      onclick={(dialog) => {
                        if (row.status) {
                          handleToggleClick(i, row.status, (dialog = true));
                        } else {
                          handleToggleClick(i, row.status, (dialog = false));
                        }
                        // setIndexs(i)
                        Deactivate(i);
                      }}
                      checked={row.status}
                    />{" "}
                    {i === rowss
                      ? row.status
                        ? "Active"
                        : "Deactive"
                      : row.status
                        ? "Active"
                        : "Deactive"}
                  </StyledTableCell>
                  <StyledTableCell>
                    <PencilIconContainer>
                      <PencilIconSvg
                        onClick={() => {
                          setIndexs(i);
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
        bottomLeftButton={{ label: "Save", onClick: UpdateItem }}
        onClose={() => {
          setIsEditMemberDrawerOpen(false);
        }}
        open={isEditMemberDrawerOpen}
      />
    </TableDiv>
  );
};

export default DepartmentTableComponent;
