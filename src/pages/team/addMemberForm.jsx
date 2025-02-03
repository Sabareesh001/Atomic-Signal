import { MenuItem } from "@mui/material";
import StyledChip from "../../components/chip/chip";
import StyledDatePicker from "../../components/datePicker/datePicker";
import StyledInputLabel from "../../components/inputLabel/inputLabel";
import StyledSelect from "../../components/select/select";
import { StyledFormControl } from "../../components/table/departmentTable.styles";
import StyledTextField from "../../components/textField/textField";
import { useRef, useState } from "react";
import teamStore from "../../zustand/teams/store";

const MembersDrawerForm = () => {
  const [reporting, setReporting] = useState("");
  const { handleChange, TeamRowData } = teamStore();
  console.log(TeamRowData);

  return (
    <StyledFormControl>
      <StyledInputLabel required>Name</StyledInputLabel>
      <StyledTextField
        placeholder="Type name"
        size="small"
        fullWidth
        onChange={(e) => handleChange("name", e.target.value)}
      ></StyledTextField>
      <StyledInputLabel required>Email</StyledInputLabel>
      <StyledTextField
        placeholder="Email"
        size="small"
        fullWidth
        onChange={(e) => handleChange("email", e.target.value)}
      ></StyledTextField>
      <StyledInputLabel required>Date of Joining</StyledInputLabel>
      <StyledDatePicker
        onchange={(e) => handleChange("date", e)}
      ></StyledDatePicker>
      <StyledInputLabel>Department</StyledInputLabel>
      <StyledSelect
        placeholder="Select department"
        size="small"
        onChange={(e) => handleChange("departmemt_name", e.target.value)}
      >
        <MenuItem value={"Design"}>Design</MenuItem>
        <MenuItem value={"Engineering"}>Engineering</MenuItem>
      </StyledSelect>
      <StyledInputLabel required>Designation</StyledInputLabel>
      <StyledSelect
        placeholder="Select"
        size="small"
        onChange={(e) => handleChange("designation", e.target.value)}
      >
        <MenuItem value={"Visual Designer"}>Visual Designer</MenuItem>
        <MenuItem value={"Full Stack Developer"}>Full Stack Developer</MenuItem>
      </StyledSelect>
      <StyledInputLabel required>Role</StyledInputLabel>
      <StyledSelect
        placeholder="Select"
        size="small"
        onChange={(e) => handleChange("role", e.target.value)}
      >
        <MenuItem value={"Employee"}>Employee</MenuItem>
        <MenuItem value={"Manager"}>Manager</MenuItem>
      </StyledSelect>
      <StyledInputLabel>Reporting To</StyledInputLabel>
      <StyledSelect
        placeholder="Manager name"
        size="small"
        onChange={(e) => handleChange("reporting_name", e.target.value)}
      >
        <MenuItem value={"Steven"}>Steven</MenuItem>
        <MenuItem value={"David Goer"}>David Goer</MenuItem>
      </StyledSelect>
      {TeamRowData.reporting_name ? (
        <StyledChip
          hasAvatar={true}
          avatarImg={
            "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"
          }
          variant="outlined"
          label={TeamRowData.reporting_name}
          onDelete={() => {}}
        />
      ) : (
        ""
      )}
    </StyledFormControl>
  );
};

export default MembersDrawerForm;
