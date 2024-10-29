import { Typography } from "@mui/material";
import { MembersTable } from "../../components/table";
import StyledButton from "../../components/button/Button";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SearchBox from "../../components/searchbox/SearchBox";
import CheckBox from "../../components/checkbox/CheckBox";
import {
  TeamMembersContainer,
  TeamMembersHeader,
  TeamMembersPageTools,
  ImportIcon,
  VerticalDivider,
  CheckBoxWithLabel,
  StyledBadge,
  FilterFormContainer,
  FilterFormField,
} from "./team.styles";

import { useEffect, useState } from "react";
import StyledDrawer from "../../components/drawer/Drawer";
import { StyledFormControl } from "../../components/table/DepartmentTable.styles";
import StyledInputLabel from "../../components/inputlabel/InputLabel";
import StyledTextField from "../../components/textfield/TextField";
import StyledDatePicker from "../../components/datepicker/DatePicker";
import StyledSelect from "../../components/select/Select";
import StyledChip from "../../components/chip/Chip";
import {
  StyledToggleButton,
  StyledToggleButtonGroup,
} from "../../components/toggleButton/StyledToggleButton";
import FilterForm from "./FilterForm";
import AddMembersDrawerForm from "./AddMemberForm";
const TeamPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [isAddMemberOpen, setIsAddMemberOpen] = useState(false);
  const stickyHeadings = ["Actions"];
  const [rowData, setRowData] = useState([
    {
      id: 40,
      profile: {
        name: "Ramesh",
        image:
          "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
      },
      designation: "Visual Designer",
      department: "Design",
      signals: [
        {
          name: "Excellent",
          bgcolor: "darkgreen",
          last_updated: "07 Feb '23, 11:30 AM",
        },
        {
          name: "Good",
          bgcolor: "green",
          last_updated: "07 Feb '23, 11:30 AM",
        },
        {
          name: "Moderate",
          bgcolor: "orange",
          color: "black",
          last_updated: "07 Feb '23, 11:30 AM",
        },
      ],
      performance: 90,
      reporting_to: [
        {
          image:
            "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
          name: "Suresh Kumaran",
        },
        {
          image:
            "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
          name: "Ramesh",
        },
        {
          image:
            "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
          name: "Ramesh",
        },
      ],
      role: "employee",
      email: "email@email.com",
      experience: "3 yrs 4 Mon",
      status: 1,
    },

    {
      id: 45,
      profile: {
        name: "Kumaresan",
        image:
          "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
      },
      designation: "Visual Designer",
      department: "Design",
      signals: [
        {
          name: "Excellent",
          bgcolor: "darkgreen",
          last_updated: "07 Feb '23, 11:30 AM",
        },
        {
          name: "Bad",
          bgcolor: "red",
          last_updated: "07 Feb '23, 11:30 AM",
        },
        {
          name: "Good",
          bgcolor: "green",
          last_updated: "07 Feb '23, 11:30 AM",
        },
        {
          name: "Moderate",
          bgcolor: "orange",
          color: "black",
          last_updated: "07 Feb '23, 11:30 AM",
        },
      ],
      performance: 90,
      reporting_to: [
        {
          image:
            "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
          name: "Suresh",
        },
      ],
      role: "employee",
      email: "email@email.com",
      experience: "3 yrs 4 Mon",
      status: 0,
    },
  ]);

  useEffect(() => {
    setRowData((prev) => [
      ...prev,
      ...Array(10)
        .fill({})
        .map((_, i) => {
          const modifiedRowData = { ...rowData[0] };
          modifiedRowData.id = i;
          return modifiedRowData;
        }),
    ]);
  }, []);

  const stickyColumnData = [["Im Sticky"]];

  return (
    <TeamMembersContainer>
      <TeamMembersHeader>
        <Typography fontFamily={"Poppins"} fontSize={"1.2em"}>
          Team members
        </Typography>
        <TeamMembersPageTools>
          <CheckBoxWithLabel>
            <CheckBox></CheckBox>
            Show only my reportees
          </CheckBoxWithLabel>

          <SearchBox
            minWidth={"10em"}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            placeholder={"Search by name, email"}
            size="small"
          ></SearchBox>
          <StyledButton
            onClick={() => {
              setFilterDrawerOpen(true);
            }}
            variant="contained"
          >
            <StyledBadge overlap="circular" badgeContent={1} variant="dot">
              <FilterAltOutlinedIcon />
            </StyledBadge>
          </StyledButton>
          <VerticalDivider orientation="vertical" />
          <StyledButton startIcon={<ImportIcon />} variant="outlined">
            Import
          </StyledButton>

          <StyledButton
            onClick={() => {
              setIsAddMemberOpen(true);
            }}
            variant="contained"
          >
            Add member
          </StyledButton>
        </TeamMembersPageTools>
      </TeamMembersHeader>
      <MembersTable
        stickyHeadings={stickyHeadings}
        searchQuery={searchQuery}
        rowData={rowData}
        setRowData={setRowData}
        stickyColumnData={stickyColumnData}
      />
      <StyledDrawer
        title={"Add member"}
        anchor={"right"}
        content={<AddMembersDrawerForm />}
        bottomLeftButton={{ label: "Add Member" }}
        open={isAddMemberOpen}
        onClose={() => {
          setIsAddMemberOpen(false);
        }}
      />

      <StyledDrawer
        maxWidth={"450px"}
        title={"Filters"}
        anchor={"right"}
        content={<FilterForm />}
        bottomLeftButton={{ label: "Apply Filter" }}
        open={isFilterDrawerOpen}
        onClose={() => {
          setFilterDrawerOpen(false);
        }}
      />
    </TeamMembersContainer>
  );
};

export default TeamPage;
