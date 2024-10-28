import { styled, TextareaAutosize } from "@mui/material";

const StyledTextArea = styled(TextareaAutosize)({
  border: "solid lightgray 1px",
  borderRadius: "4px",
  resize: "none",
  "&:focus": {
    outline: "none",
  },
});

export default StyledTextArea;
