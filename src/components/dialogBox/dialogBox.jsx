import { Box, Dialog, DialogContent, Typography } from "@mui/material";
import React, { useState } from "react";
import AlertIconSvg from "../../assets/icons/alerticon";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { handleDeactiveBox } from "../../pages/setting/slices/signalsSlice";
import { styledItem } from "../../pages/setting/style";

export default function DialogBox({ color, bgcolor, border, open }) {
  const BodyDatas = useSelector((state) => state.signalsBody);
  // console.log(OpenDialogBox.openDeactive)
  const dispatch = useDispatch();
  const styles = styledItem();

  const Button = styled(Box)({
    ...styles.styledDialogBox,
    color: color,
    backgroundColor: bgcolor,
    border: border,
  });
  function HandleDialogDeactivation(status) {
    dispatch(
      handleDeactiveBox({ status: status, index: open + 1, dialog: false })
    );
  }
  const [opened, setOpened] = useState(true);

  return (
    <Dialog
      // onClose={onClose}
      open={BodyDatas[open].dialog}
    >
      <DialogContent sx={styles.styledDialogContent}>
        <Box sx={styles.styledDialogContentBoxImage}>
          <AlertIconSvg />
        </Box>
        <Box sx={{ margin: " 0px 0px 32px 0px" }}>
          <Typography sx={styles.styledDialogContentBoxText}>
            Are you sure, would you like to Deactivate?
          </Typography>
        </Box>
        <Box sx={styles.styledDialogContentButtonBox}>
          <Button
            component="button"
            onClick={() => HandleDialogDeactivation((status = false))}
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
            onClick={() => HandleDialogDeactivation((status = true))}
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
