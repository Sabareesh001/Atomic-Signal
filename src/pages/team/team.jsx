import { Typography, useTheme } from "@mui/material";
import { MembersTable } from "../../components/table";
import StyledButton from "../../components/button/button";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SearchBox from "../../components/searchBox/searchBox";
import CheckBox from "../../components/checkBox/checkBox";
import {
  TeamMembersContainer,
  TeamMembersHeader,
  TeamMembersPageTools,
  VerticalDivider,
  CheckBoxWithLabel,
  StyledBadge,
  FilterFormContainer,
  FilterFormField,
  ImportIcon,
} from "./team.styles";

import { useEffect, useRef, useState } from "react";
import StyledDrawer from "../../components/drawer/drawer";
import FilterForm from "./filterForm";
import MembersDrawerForm from "./addMemberForm";
import DialogBox from "../../components/dialogBox/dialogBox";
import teamStore from "../../zustand/teams/store";

const TeamPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [isAddMemberOpen, setIsAddMemberOpen] = useState(false);
  const stickyHeadings = ["Actions"];
  const theme = useTheme();
  const [indexes, setIndexes] = useState(0);

  const { TeamRowDatas, handleAddTeamMemnber } = teamStore() || {};

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
  function HandleDialogIndex(index) {
    setIndexes(index);
    // console.log(index)
  }

  const stickyColumnData = [["Im Sticky"]];

  function Clicked() {
    handleAddTeamMemnber();
    // console.log(TeamRowDatas)
  }

  return (
    <TeamMembersContainer>
      <TeamMembersHeader>
        <Typography
          fontSize={theme.typography.fontSize.large}
          fontWeight={theme.typography.fontWeightMedium}
        >
          Team members
        </Typography>
        <TeamMembersPageTools>
          <CheckBoxWithLabel>
            <CheckBox></CheckBox>
            <Typography
              fontSize={theme.typography.fontSize.small}
              fontWeight={theme.typography.fontWeightMedium}
            >
              Show only my reportees
            </Typography>
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
            size="large"
          >
            <StyledBadge overlap="circular" badgeContent={1} variant="dot">
              <FilterAltOutlinedIcon sx={{ fontSize: "24px" }} />
            </StyledBadge>
          </StyledButton>
          <VerticalDivider orientation="vertical" />
          <StyledButton
            size="large"
            startIcon={<ImportIcon />}
            variant="outlined"
          >
            <Typography
              fontSize={theme.typography.fontSize.small}
              fontWeight={theme.typography.fontWeightMedium}
            >
              Import
            </Typography>
          </StyledButton>

          <StyledButton
            size="large"
            onClick={() => {
              setIsAddMemberOpen(true);
            }}
            variant="contained"
          >
            <Typography
              fontSize={theme.typography.fontSize.medium}
              fontWeight={theme.typography.fontWeightRegular}
            >
              Add member
            </Typography>
          </StyledButton>
        </TeamMembersPageTools>
      </TeamMembersHeader>
      <MembersTable
        stickyHeadings={stickyHeadings}
        searchQuery={searchQuery}
        rowData={TeamRowDatas}
        setRowData={setRowData}
        stickyColumnData={stickyColumnData}
        Deactivate={HandleDialogIndex}
      />
      <StyledDrawer
        title={"Add member"}
        anchor={"right"}
        bottomLeftButton={{ label: "Add Member", onClick: Clicked }}
        content={<MembersDrawerForm />}
        open={isAddMemberOpen}
        onClose={() => {
          setIsAddMemberOpen(false);
        }}
      />
      <DialogBox
        open={indexes}
        message="Are you sure, would you like to deactivate Team Member?"
        Datas={TeamRowDatas}
        Page="TeamRowDatas"
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
