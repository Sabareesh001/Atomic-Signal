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
import { useDispatch, useSelector } from "react-redux";
import {
  handleActiveButton,
  replaceSignalBody,
} from "../../pages/setting/slices/signalsslice";

const SignalTableComponent = ({
  headings,
  stickyheadings,
  rows,
  stickyColumnData,
  setRows,
  searchQuery = "",
  Deactivate,
}) => {
  const [filteredRows, setFilteredRows] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const [isEditMemberDrawerOpen, setIsEditMemberDrawerOpen] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [modifiedRows, setModifiedRows] = useState([]);
  const [clicked, setClicked] = useState(true);
  const [rowss, setRow] = useState(0);
  const inputRef = useRef();
  const [indexs, setIndexs] = useState(0);

  const BodyDatas = useSelector((state) => state.signalsBody);
  const dispatch = useDispatch();

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
      </StyledFormControl>
    );
  };

  function UpdateItem() {
    console.log(indexs);
    console.log(filteredRows[indexs].signal);
    console.log(inputRef.current.value);
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

    dispatch(
      replaceSignalBody({
        oldItem: filteredRows[indexs].signal,
        newItem: inputRef.current.value,
        day: day,
        time: time,
      })
    );
    setIsEditMemberDrawerOpen(false);
  }

  const handleToggleClick = (index, status, dialog) => {
    const newClickedState = !clicked;
    setClicked(newClickedState);
    setRow(index);
    if (dialog) {
      dispatch(
        handleActiveButton({
          oldItem: index + 1,
          status: newClickedState,
          active: status,
          dialog: dialog,
        })
      );
    } else {
      dispatch(
        handleActiveButton({
          oldItem: index + 1,
          status: newClickedState,
          active: status,
        })
      );
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
                  <StyledTableCell>{i + 1}</StyledTableCell>
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

export default SignalTableComponent;
