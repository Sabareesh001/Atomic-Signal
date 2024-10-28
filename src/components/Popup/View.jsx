import * as React from "react";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { Avatar, Box } from "@mui/material";
import { useState, forwardRef } from "react";
import { RxCross2 } from "react-icons/rx";
import { Dialogue, stylesnew } from "./Style";
import { Flex, Signalcolour } from "../../pages/feedback/Style";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function View({
  setPrincing,
  name,
  signal,
  performance,
  photo,
  to,
  response,
  c,
}) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    setPrincing(false);
  };

  return (
    <Dialogue
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
    >
      <DialogContent>
        <Box sx={stylesnew.head}>
          <Box>View feedback</Box>
          <Box sx={stylesnew.cross}>
            <RxCross2 onClick={handleClose} />
          </Box>
        </Box>
        <Box sx={stylesnew.body}>
          {c == 0 && (
            <Box sx={stylesnew.profile}>
              <Box sx={stylesnew.flex}>
                <Avatar src={photo} sx={stylesnew.photo1} />
                <Box>{name}</Box>
              </Box>
              <Box sx={stylesnew.desi}>Visual Designer</Box>
            </Box>
          )}

          {c == 1 && (
            <Box sx={stylesnew.profile}>
              <Box sx={stylesnew.flex}>
                <Avatar src={photo} sx={stylesnew.photo1} />
                <Box>
                  {name}
                  <Box sx={stylesnew.desi}>Visual Designer</Box>
                </Box>
              </Box>
              <Box sx={{ color: "#948DE3" }}>
                <FaArrowRightLong />
              </Box>
              <Box sx={stylesnew.flex}>
                <Avatar src={photo} sx={stylesnew.photo1} />
                <Box>
                  {to}
                  <Box sx={stylesnew.desi}>Visual Designer</Box>
                </Box>
              </Box>
            </Box>
          )}

          <Box sx={stylesnew.feed}>
            <Box sx={{ ...stylesnew.flex }}>
              <Signalcolour performance={performance}>{signal[0]}</Signalcolour>
              {signal}
            </Box>
            <Box sx={stylesnew.desi1}>{performance}</Box>
          </Box>
          <Box sx={stylesnew.res}>Feedback reason will be displayed here</Box>
          <Box sx={stylesnew.respon}>
            Your way of presenting the topic was very good in the client meeting
          </Box>
          <Box sx={stylesnew.dash}></Box>

          <Flex sx={{ ...stylesnew.res, color: "#353448" }}>
            <Flex>
              <Box
                sx={{
                  ...stylesnew.tick,
                  color: response === "yes" ? "green" : "black",
                }}
              >
                <IoCheckmarkDoneSharp />
              </Box>
              {response === "yes"
                ? "Response submitted"
                : "Response not submitted"}
            </Flex>
            {response === "yes" && (
              <Box sx={stylesnew.desi}>31 Jan 2023, 01:30 PM</Box>
            )}
          </Flex>
          {response === "yes" && (
            <>
              <Box sx={stylesnew.res}>
                Thanks! I'll try to improve further 👍🏽
              </Box>
              <Box sx={stylesnew.respon1}>Happy to hear it from you.</Box>
            </>
          )}
        </Box>
      </DialogContent>
    </Dialogue>
  );
}
