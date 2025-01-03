import { TableBody, TableRow, useTheme } from "@mui/material";
import StyledInputLabel from "../inputLabel/inputLabel";
import {
  ActionContainer,
  ActionContent,
  ActionHeaderContainerSeparator,
  ActionPaginationContainerSeparator,
  ActionStickyContainerSeparator,
  LightTooltip,
  MemberProfile,
  MoreTag,
  PencilIcon,
  ProfileAvatar,
  ReportingList,
  SignalList,
  SignalsAvatar,
  StatusContainer,
  StickyCell,
  StickyHeading,
  StyledBottomTableContainer,
  StyledFormControl,
  StyledTable,
  StyledTableCell,
  StyledTableContainer,
  StyledTableFooter,
  StyledTableHead,
  StyledTableHeading,
  StyledTablePagination,
  StyledTableRow,
  TableDiv,
  ToolTipContent,
} from "./membersTable.styles";

import Table from "@mui/material/Table";
import { useEffect, useRef, useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import StyledButton from "../button/button";
import StyledChip from "../chip/chip";
import StyledDatePicker from "../datePicker/datePicker";
import StyledDrawer from "../drawer/drawer";
import StyledSelect from "../select/select";
import IOSSwitch from "../switch/switch";
import StyledTextField from "../textField/textField";
import { EmSizeMWeight, MSizeRWeight } from "../typography/typography";
import IosSwitch from "../switch/iosSwitch";
import teamStore from "../../zustand/teams/store";
import MembersDrawerForm from "../../pages/team/addMemberForm";
const MembersTableComponent = ({
  headings,
  stickyheadings,
  rows,
  stickyColumnData,
  setRows,
  searchQuery = "",
  Deactivate,
}) => {
  const theme = useTheme();
  const [filteredRows, setFilteredRows] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const [isEditMemberDrawerOpen, setIsEditMemberDrawerOpen] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [clicked, setClicked] = useState(true);
  const [rowss, setRow] = useState(0);
  const inputRef = useRef();
  const [indexs, setIndexs] = useState(0);
  const {
    handleTeamActiveButton,
    handleTeamUpdateMember,
    TeamRowDatas,
    handleTeamChange,
    TeamRowData,
  } = teamStore();
  const [modifiedRows, setModifiedRows] = useState([]);
  useEffect(() => {
    setModifiedRows(
      rows.filter((data) => {
        return data?.profile?.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase().trim());
      })
    );
  }, [rows, searchQuery]);

  useEffect(() => {
    const startIndex = currPage * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    // console.log(startIndex, endIndex);
    setFilteredRows(modifiedRows.slice(startIndex, endIndex));
  }, [modifiedRows, currPage, rowsPerPage]);

  useEffect(() => {
    setCurrPage(0);
  }, [rowsPerPage]);
  const handleToggleClick = (index) => {
    setClicked(!clicked);
    setRow(index);
    if (TeamRowData.dialog) {
      handleTeamActiveButton(index + 1);
      console.log(TeamRowDatas);
    } else {
      handleTeamActiveButton(index + 1);
      console.log(TeamRowDatas);
    }
  };
  function UpdatedMember() {
    console.log(indexs);
    handleTeamUpdateMember(indexs);
    console.log(TeamRowDatas);
  }

  return (
    <TableDiv>
      <ActionStickyContainerSeparator />
      <ActionHeaderContainerSeparator />
      <ActionPaginationContainerSeparator />
      <StyledTableContainer>
        <StyledTable
          onScroll={(e) => {
            e.stopPropagation();
          }}
        >
          <StyledTableHead>
            <StyledTableRow>
              {headings?.map((data, index) => (
                <StyledTableHeading key={index}>
                  <EmSizeMWeight content={data} />
                </StyledTableHeading>
              ))}
              {stickyheadings?.map((data, i) => (
                <StickyHeading align="center" key={i}>
                  {" "}
                  <EmSizeMWeight content={data} />
                </StickyHeading>
              ))}
            </StyledTableRow>
          </StyledTableHead>
          <TableBody>
            {filteredRows?.map((row, i) => {
              return (
                <StyledTableRow key={i}>
                  <StyledTableCell>
                    <MemberProfile>
                      <ProfileAvatar
                        height={"35px"}
                        width={"35px"}
                        src={row?.profile?.image}
                      ></ProfileAvatar>{" "}
                      <MSizeRWeight content={row?.profile?.name} />
                    </MemberProfile>
                  </StyledTableCell>
                  <StyledTableCell>
                    <MSizeRWeight content={row?.designation} />
                  </StyledTableCell>
                  <StyledTableCell>
                    <MSizeRWeight content={row?.department} />
                  </StyledTableCell>
                  <StyledTableCell>
                    <SignalList>
                      {row?.signals.map((signal, index) => {
                        return (
                          <LightTooltip
                            key={index}
                            fontSize={"0.8em"}
                            title={
                              <ToolTipContent>
                                <div>{`${signal?.name}`}</div>{" "}
                                {`last updated ${signal?.last_updated}`}
                              </ToolTipContent>
                            }
                            arrow
                            placement="bottom"
                          >
                            <SignalsAvatar
                              color={signal?.color}
                              bgColor={signal?.bgcolor}
                            >
                              {signal?.name[0]}
                            </SignalsAvatar>
                          </LightTooltip>
                        );
                      })}
                    </SignalList>
                  </StyledTableCell>
                  <LightTooltip
                    arrow
                    slotProps={{
                      popper: {
                        modifiers: [
                          {
                            name: "offset",
                            options: {
                              offset: [0, -25],
                            },
                          },
                        ],
                      },
                    }}
                    title="Overall Good"
                  >
                    <StyledTableCell
                      padding="0px"
                      align="center"
                      minWidth={190}
                    >
                      <ReactSpeedometer
                        width={100}
                        value={50}
                        height={70}
                        paddingHorizontal={0}
                        paddingVertical={0}
                        currentValueText={""}
                        ringWidth={10}
                        needleColor={"black"}
                        maxSegmentLabels={0}
                        needleHeightRatio={0.4}
                        minValue={0}
                        maxValue={100}
                      />
                    </StyledTableCell>
                  </LightTooltip>
                  <StyledTableCell minWidth={290}>
                    <MemberProfile>
                      <ProfileAvatar
                        height={"35px"}
                        width={"35px"}
                        src={row?.reporting_to?.[0]?.image}
                      ></ProfileAvatar>{" "}
                      <MSizeRWeight content={row?.reporting_to?.[0]?.name} />
                      {row?.reporting_to?.length > 1 && (
                        <LightTooltip
                          key={i}
                          title={
                            <ReportingList>
                              {row?.reporting_to?.slice(1)?.map((data, i) => (
                                <MemberProfile fontSize={"1.4em"} key={i}>
                                  <ProfileAvatar
                                    height={"25px"}
                                    width={"25px"}
                                    src={data?.image}
                                  ></ProfileAvatar>{" "}
                                  <MSizeRWeight content={data.name} />
                                </MemberProfile>
                              ))}
                            </ReportingList>
                          }
                        >
                          <MoreTag>
                            + {row?.reporting_to?.length - 1} More{" "}
                          </MoreTag>
                        </LightTooltip>
                      )}
                    </MemberProfile>
                  </StyledTableCell>
                  <StyledTableCell>
                    <MSizeRWeight content={row?.role} />
                  </StyledTableCell>
                  <StyledTableCell>
                    <MSizeRWeight content={row?.email} />
                  </StyledTableCell>
                  <StyledTableCell>
                    <MSizeRWeight content={row?.experience} />
                  </StyledTableCell>
                  <StyledTableCell>
                    <IosSwitch
                      onclick={(dialog) => {
                        if (row.status) {
                          handleTeamChange("active", true);
                          handleTeamChange("status", !clicked);
                          handleTeamChange("dialog", true);
                          handleToggleClick(i);
                        } else {
                          handleTeamChange("status", !clicked);
                          handleTeamChange("active", false);
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
                  <StickyCell align="center">
                    <ActionContainer>
                      <ActionContent>
                        <StyledButton
                          fullWidth
                          size="small"
                          variant="contained"
                        >
                          <MSizeRWeight content={"Add Feedback"} />
                        </StyledButton>
                        <PencilIcon
                          onClick={() => {
                            setIndexs(i + 1);
                            setIsEditMemberDrawerOpen(true);
                          }}
                        />
                      </ActionContent>
                    </ActionContainer>
                  </StickyCell>
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
                count={modifiedRows.length}
              />
            </TableRow>
          </StyledTableFooter>
        </Table>
      </StyledBottomTableContainer>
      <StyledDrawer
        title={"Edit member"}
        content={<MembersDrawerForm />}
        anchor={"right"}
        bottomLeftButton={{ label: "Save", onClick: UpdatedMember }}
        onClose={() => {
          setIsEditMemberDrawerOpen(false);
        }}
        open={isEditMemberDrawerOpen}
      />
    </TableDiv>
  );
};

export default MembersTableComponent;
