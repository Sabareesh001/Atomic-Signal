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
import { useEffect, useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import StyledButton from "../button/button";
import StyledChip from "../chip/chip";
import StyledDatePicker from "../datePicker/datePicker";
import StyledDrawer from "../drawer/drawer";
import StyledSelect from "../select/select";
import IOSSwitch from "../switch/switch";
import StyledTextField from "../textField/textField";
import { EmSizeMWeight, MSizeRWeight } from "../typography/typography";
const MembersTableComponent = ({
  headings,
  stickyheadings,
  rows,
  stickyColumnData,
  setRows,
  searchQuery = "",
}) => {
  const theme = useTheme();
  const [filteredRows, setFilteredRows] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const [isEditMemberDrawerOpen, setIsEditMemberDrawerOpen] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);
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
    console.log(startIndex, endIndex);
    setFilteredRows(modifiedRows.slice(startIndex, endIndex));
  }, [modifiedRows, currPage, rowsPerPage]);

  useEffect(() => {
    setCurrPage(0);
  }, [rowsPerPage]);

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
              {headings?.map((data) => (
                <StyledTableHeading>
                  <EmSizeMWeight content={data} />
                </StyledTableHeading>
              ))}
              {stickyheadings?.map((data) => (
                <StickyHeading align="center">
                  {" "}
                  <EmSizeMWeight content={data} />
                </StickyHeading>
              ))}
            </StyledTableRow>
          </StyledTableHead>
          <TableBody>
            {filteredRows?.map((row, i) => {
              return (
                <StyledTableRow>
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
                      {row?.signals.map((signal) => {
                        return (
                          <LightTooltip
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
                          title={
                            <ReportingList>
                              {row?.reporting_to?.slice(1)?.map((data) => (
                                <MemberProfile fontSize={"1.4em"}>
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
                    <StatusContainer>
                      <IOSSwitch
                        onChange={(e) => {
                          setRows((prev) => {
                            const newPrev = [...prev];
                            const target = newPrev.findIndex(
                              (data) => data.id === row?.id
                            );
                            newPrev[target].status = e.target.checked ? 1 : 0;
                            return newPrev;
                          });
                        }}
                        checked={row?.status}
                      />{" "}
                      <MSizeRWeight
                        content={row?.status ? "Active" : "Deactive"}
                      />
                    </StatusContainer>
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
      <StyledInputLabel required>Email</StyledInputLabel>
      <StyledTextField
        placeholder="Email"
        size="small"
        fullWidth
      ></StyledTextField>
      <StyledInputLabel required>Date of Joining</StyledInputLabel>
      <StyledDatePicker></StyledDatePicker>
      <StyledInputLabel>Department</StyledInputLabel>
      <StyledSelect placeholder="Select department" size="small"></StyledSelect>
      <StyledInputLabel required>Designation</StyledInputLabel>
      <StyledSelect placeholder="Select" size="small"></StyledSelect>
      <StyledInputLabel required>Role</StyledInputLabel>
      <StyledSelect placeholder="Select" size="small"></StyledSelect>
      <StyledInputLabel>Reporting To</StyledInputLabel>
      <StyledSelect placeholder="Manager name" size="small"></StyledSelect>
      <StyledChip
        hasAvatar={true}
        avatarImg={
          "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"
        }
        variant="outlined"
        label="Steven"
        onDelete={() => {}}
      />
    </StyledFormControl>
  );
};

export default MembersTableComponent;
