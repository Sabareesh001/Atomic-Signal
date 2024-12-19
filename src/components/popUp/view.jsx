import * as React from "react";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { Box, useTheme } from "@mui/material";
import { useState, forwardRef } from "react";
import { RxCross2 } from "react-icons/rx";
import { Body, Dialogue, Popuphead, stylesnew } from "./style";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function View({
  setPrincing,
  title = "",
  children,
  height,
  width,
}) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    setPrincing(false);
  };

  const theme = useTheme();
  const styles = stylesnew(theme);

  return (
    <Dialogue
      height={height}
      width={width}
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
    >
      <DialogContent>
        <Popuphead>
          <Box>{title}</Box>
          <Box sx={styles.cross}>
            <RxCross2 onClick={handleClose} />
          </Box>
        </Popuphead>
        <Body>{children}</Body>
      </DialogContent>
    </Dialogue>
  );
}
