import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
export default function StyledDatePicker({ size }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          slots={{ openPickerButton: EventOutlinedIcon }}
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
