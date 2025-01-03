import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import { styled, useTheme } from "@mui/material";

const StyledDatePickerComponent = styled(DatePicker)(({ theme }) => ({
  fontSize: theme.typography.fontSize.small,
  color: theme.palette.text.default,
  "& .MuiInputBase-input::placeholder": {
    color: theme.palette.text.placeholder,
    opacity: 1,
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.secondary.main,
    },
  },
}));

export default function StyledDatePicker({ size, value, onchange, inputRef }) {
  const theme = useTheme();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <StyledDatePickerComponent
          value={value}
          onChange={onchange}
          inputRef={inputRef}
          slots={{
            openPickerButton: (props) => (
              <EventOutlinedIcon
                sx={{
                  fontSize: theme.typography.fontSize.medium,
                }}
                fontSize="inhereit"
                {...props}
              />
            ),
          }}
          slotProps={{
            textField: {
              size: "small",
              placeholder: "Select a date",
              fullWidth: true,
            },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
