import { Box, styled, Typography } from "@mui/material";
import { DepartmentTable } from "../../components/table";
import { useState } from "react";
import SearchBox from "../../components/searchBox/searchBox";
import StyledButton from "../../components/button/button";
import StyledDrawer from "../../components/drawer/drawer";
import { StyledFormControl } from "../../components/table/departmentTable.styles";
import StyledInputLabel from "../../components/inputLabel/inputLabel";
import StyledTextField from "../../components/textField/textField";
import StyledTextArea from "../../components/textArea/styledTextArea";

const Department = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddDepartmentOpen, setIsAddDepartmentOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      id: 1,
      department: "Design",
      created_on: "08 Feb 2023, 04:40 PM",
      modified_on: "08 Feb 2023, 04:40 PM",
      status: 1,
    },
    {
      id: 2,
      department: "Product",
      created_on: "08 Feb 2023, 04:40 PM",
      modified_on: "08 Feb 2023, 04:40 PM",
      status: 1,
    },
    {
      id: 3,
      department: "Management",
      created_on: "08 Feb 2023, 04:40 PM",
      modified_on: "08 Feb 2023, 04:40 PM",
      status: 1,
    },
  ]);
  return (
    <DepartmentSectionContainer>
      <DepartmentHeader>
        <SignalsTitle>Departments ({rows.length})</SignalsTitle>
        <DepartmentHeaderTools>
          <SearchBox
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            placeholder={"Search by department name"}
            minWidth={"10em"}
            fullWidth
            size="small"
          />
          <StyledButton
            onClick={() => {
              setIsAddDepartmentOpen(true);
            }}
            sx={{ minWidth: "11em" }}
            variant="contained"
          >
            Add department
          </StyledButton>
        </DepartmentHeaderTools>
      </DepartmentHeader>

      <DepartmentTable
        searchQuery={searchQuery}
        rowData={rows}
        setRowData={setRows}
      ></DepartmentTable>
      <StyledDrawer
        anchor={"right"}
        bottomLeftButton={{ label: "Add" }}
        title={"Add department"}
        content={<AddDepartmentDrawerForm />}
        onClose={() => {
          setIsAddDepartmentOpen(false);
        }}
        open={isAddDepartmentOpen}
      />
    </DepartmentSectionContainer>
  );
};

const DepartmentSectionContainer = styled(Box)({
  margin: "20px",
  padding: "16px",
  backgroundColor: "white",
  borderRadius: "4px",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

const SignalsTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize.medium,
  fontWeight: theme.typography.fontWeightMedium,
}));

const DepartmentHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  rowGap: "10px",
});

const DepartmentHeaderTools = styled(Box)({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  gap: "16px",
  flexWrap: "wrap",
});

const AddDepartmentDrawerForm = () => {
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

export default Department;
