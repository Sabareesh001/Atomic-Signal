import { TableBody, TableRow } from "@mui/material";
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
  ActionPaginationContainerSeparator,
  ActionHeaderContainerSeparator,
  StyledTable,
  StyledFormControl,
  PencilIconContainer,
} from "./signalTablestyles";

import Table from "@mui/material/Table";
import IosSwitch from "../switch/iosSwitch";
import PencilIconSvg from "../../assets/icons/pencil";
import { useEffect, useRef, useState } from "react";
import StyledDrawer from "../drawer/drawer";
import StyledTextField from "../textField/textField";

import settingStore from "../../zustand/settings/store";

const SignalTableComponent = ({
  headings,
  stickyheadings,
  rows,
  stickyColumnData,
  setRows,
  searchQuery = "",
  Deactivate,
}) => {
  const {
    replaceSignalBodys,
    handleActiveButton,
    handleChange,
    SignalBodyDatas,
    SignalRowData,
  } = settingStore();

  const [filteredRows, setFilteredRows] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const [isEditMemberDrawerOpen, setIsEditMemberDrawerOpen] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [modifiedRows, setModifiedRows] = useState([]);
  const [clicked, setClicked] = useState(true);
  const [rowss, setRow] = useState(0);
  const inputRef = useRef();
  const [indexs, setIndexs] = useState(0);

  useEffect(() => {
    setModifiedRows(
      rows?.filter((data) => {
        return data?.signal
          ?.toLowerCase()
          ?.includes(searchQuery?.toLowerCase()?.trim());
      })
    );
  }, [rows, searchQuery, indexs]);

  useEffect(() => {
    const startIndex = currPage * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    setFilteredRows(modifiedRows?.slice(startIndex, endIndex));
  }, [modifiedRows, currPage, rowsPerPage, rowss]);

  useEffect(() => {
    setCurrPage(0);
  }, [rowsPerPage]);

  function UpdateItem() {
    replaceSignalBodys(indexs + 1);

    setIsEditMemberDrawerOpen(false);
  }

  const handleToggleClick = (index) => {
    setClicked(!clicked);
    setRow(index);
    if (SignalRowData.dialog) {
      handleActiveButton(index + 1);
      console.log(SignalBodyDatas);
    } else {
      handleActiveButton(index + 1);
      console.log(SignalBodyDatas);
    }
  };
  // console.log(rows[rowss].status)

  return (
    <TableDiv>
      <ActionHeaderContainerSeparator />
      <ActionPaginationContainerSeparator />
      <StyledTableContainer>
        <StyledTable draggable={false}>
          <StyledTableHead>
            <StyledTableRow>
              {headings?.map((data, index) => (
                <StyledTableHeading
                  key={index}
                  sx={{ position: data.position }}
                >
                  {data.heading}
                </StyledTableHeading>
              ))}
            </StyledTableRow>
          </StyledTableHead>
          <TableBody>
            {filteredRows?.map((row, i) => {
              return (
                <StyledTableRow key={i}>
                  <StyledTableCell>{row.id}</StyledTableCell>
                  <StyledTableCell>{row?.signal}</StyledTableCell>
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
                          handleChange("active", true);
                          handleChange("status", !clicked);
                          handleChange("dialog", true);
                          handleToggleClick(i);
                        } else {
                          handleChange("status", !clicked);
                          handleChange("active", false);
                          handleToggleClick(i);
                        }
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
                  <StyledTableCell
                    sx={{ position: "sticky", zIndex: 2, right: 0 }}
                  >
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
        title={"Edit Signal"}
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
const DrawerForm = () => {
  const { SignalRowData, handleChange } = settingStore();
  function handleInput(e) {
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
    handleChange("signal", e);
    handleChange("mday", day);
    handleChange("mtime", time);
  }
  return (
    <StyledFormControl>
      <StyledInputLabel required>Name</StyledInputLabel>
      <StyledTextField
        placeholder="Type name"
        size="small"
        fullWidth
        onChange={(e) => handleInput(e.target.value)}
      ></StyledTextField>
    </StyledFormControl>
  );
};

export default SignalTableComponent;
