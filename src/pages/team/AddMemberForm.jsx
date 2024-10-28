import StyledChip from "../../components/chip/Chip";
import StyledDatePicker from "../../components/datepicker/DatePicker";
import StyledInputLabel from "../../components/inputlabel/InputLabel";
import StyledSelect from "../../components/select/Select";
import { StyledFormControl } from "../../components/table/DepartmentTable.styles";
import StyledTextField from "../../components/textfield/TextField";

const AddMembersDrawerForm = () => {
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

export default AddMembersDrawerForm;
