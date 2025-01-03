import { Box, Dialog, DialogContent, Typography } from "@mui/material";
import React, { useState } from "react";
import AlertIconSvg from "../../assets/icons/alerticon";
import styled from "@emotion/styled";
import { styledItem } from "../../pages/setting/style";
import settingStore from "../../zustand/settings/store";
import teamStore from "../../zustand/teams/store";

export default function DialogBox({
  color,
  bgcolor,
  border,
  open,
  message,
  Datas,
  Page,
}) {
  const {
    handleDeactiveButton,
    handleDepartmentDeactiveButton,
    handleChange,
    SignalRowData,
  } = settingStore();
  const { handleTeamDeactiveButton, handleTeamChange } = teamStore();

  const styles = styledItem();

  const Button = styled(Box)({
    ...styles.styledDialogBox,
    color: color,
    backgroundColor: bgcolor,
    border: border,
  });
  function HandleDialogDeactivation() {
    if (Page === "SignalBodyDatas") {
      handleDeactiveButton(open + 1);
    }
    if (Page === "DepartmentBodyDatas") {
      handleDepartmentDeactiveButton(open + 1);
    }
    if (Page === "TeamRowDatas") {
      handleTeamDeactiveButton(open + 1);
    }
  }
  const [opened, setOpened] = useState(true);

  return (
    <Dialog open={Datas[open].dialog}>
      <DialogContent sx={styles.styledDialogContent}>
        <Box sx={styles.styledDialogContentBoxImage}>
          <AlertIconSvg />
        </Box>
        <Box sx={{ margin: " 0px 0px 32px 0px" }}>
          <Typography sx={styles.styledDialogContentBoxText}>
            {message}
          </Typography>
        </Box>
        <Box sx={styles.styledDialogContentButtonBox}>
          <Button
            component="button"
            onClick={() => {
              handleChange("dialog", false);
              handleChange("status", false);
              handleTeamChange("dialog", false);
              handleTeamChange("status", false);
              console.log(SignalRowData);
              HandleDialogDeactivation();
            }}
            color={"rgb(73, 199, 146)"}
            bgcolor={"transparent"}
            border={"1.5px solid "}
            sx={{
              minWidth: { sm: "138px", xs: "100px" },
              "@media (min-width: 425px)": { minWidth: "138px" },
            }}
          >
            Cancel
          </Button>
          <Button
            component="button"
            onClick={() => {
              handleChange("dialog", false);
              handleChange("status", true);
              handleTeamChange("dialog", false);
              handleTeamChange("status", true);
              console.log(SignalRowData);
              HandleDialogDeactivation();
            }}
            color={"rgb(255, 255, 255)"}
            bgcolor={"rgb(244, 79, 90)"}
            border={"1.5px solid "}
            sx={{
              minWidth: { sm: "138px", xs: "100px" },
              "@media (min-width: 425px)": { minWidth: "138px" },
            }}
          >
            Deactive
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
