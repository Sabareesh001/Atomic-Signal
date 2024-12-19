import { Box, useTheme } from "@mui/material";
import React, { useState } from "react";
import StyledInputLabel from "../inputLabel/inputLabel";
import StyledTextField from "../textField/textField";
import { CatButton, stylesnew } from "./styles";
import StyledDatePicker from "../datePicker/datePicker";

function Filter({ activeTab }) {
  const theme = useTheme();
  const styles = stylesnew(theme);
  const [Signals, setSignal] = useState("Communication");
  const [Performances, setPerformance] = useState("Impactful");
  const [Responses, setResponse] = useState("Yes");
  const Signal = [
    "Communication",
    "Efficiency",
    "Delivery",
    "Time management",
    "Unavailability",
  ];

  const Performance = [
    "Impactful",
    "Spectacular",
    "Very good",
    "Good",
    "Need to improve",
    "Need to improve a lot",
    "Completely away",
  ];

  const Response = ["Yes", "No"];

  const getLabel = () => {
    if (activeTab === "1") return "Send to";
    if (activeTab === "2") return "Receive from";
    return "Receive from";
  };

  return (
    <Box sx={{ height: "100%", width: "304px", padding: "0 24px" }}>
      <StyledInputLabel>{getLabel()}</StyledInputLabel>
      <StyledTextField
        sx={styles.mt}
        placeholder="Team member name"
        size="small"
        fullWidth
      />
      {activeTab === "3" && (
        <>
          <StyledInputLabel sx={styles.mtt}>Send to</StyledInputLabel>
          <StyledTextField
            sx={styles.mt}
            placeholder="Team member name"
            size="small"
            fullWidth
          />
        </>
      )}
      <StyledInputLabel sx={styles.mtt}>Signals</StyledInputLabel>
      {Signal.map((category) => (
        <CatButton
          key={category}
          sx={Signals === category ? { ...styles.active } : ""}
          onClick={() => setSignal(category)}
        >
          {category}
        </CatButton>
      ))}

      <StyledInputLabel sx={styles.mtt}>Performance</StyledInputLabel>
      {Performance.map((Performance) => (
        <CatButton
          key={Performance}
          sx={Performances === Performance ? { ...styles.active } : ""}
          onClick={() => setPerformance(Performance)}
        >
          {Performance}
        </CatButton>
      ))}

      <StyledInputLabel sx={styles.mtt} required>
        Date range
      </StyledInputLabel>
      <StyledDatePicker />

      <StyledInputLabel sx={styles.mtt}>Response status</StyledInputLabel>
      {Response.map((Response) => (
        <CatButton
          key={Response}
          sx={Responses === Response ? { ...styles.active } : ""}
          onClick={() => setResponse(Response)}
        >
          {Response}
        </CatButton>
      ))}
    </Box>
  );
}

export default Filter;
