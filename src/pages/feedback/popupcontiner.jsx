import { Box, useTheme } from "@mui/material";
import React from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  stylesnew,
  Profile,
  Photo,
  Profileothers,
} from "../../components/popUp/style";
import { Signalcolour, Flex } from "./style";
import { FaArrowDown } from "react-icons/fa6";

function Popupcontainer({
  c,
  nameprofile,
  name,
  signal,
  performance,
  response,
  to,
}) {
  const theme = useTheme();
  const styles = stylesnew(theme);
  return (
    <Box sx={styles.body}>
      {c === 0 && (
        <Profile>
          <Photo src={nameprofile} />
          <Flex sx={styles.fli}>
            <Box>{name}</Box>
            <Box sx={styles.desi}>Visual Designer</Box>
          </Flex>
        </Profile>
      )}

      {c === 1 && (
        <Profileothers>
          <Flex>
            <Photo src={nameprofile} />
            <Box>
              {name}
              <Box sx={styles.desi}>Visual Designer</Box>
            </Box>
          </Flex>
          <Box sx={styles.arrow}>
            <Box sx={styles.icon1}>
              <FaArrowRightLong />
            </Box>
            <Box sx={styles.icon2}>
              <FaArrowDown />
            </Box>
          </Box>
          <Flex>
            <Photo src={nameprofile} />
            <Box>
              {to}
              <Box sx={styles.desi}>Visual Designer</Box>
            </Box>
          </Flex>
        </Profileothers>
      )}

      <Box sx={styles.feed}>
        <Signalcolour performance={performance}>{signal[0]}</Signalcolour>
        <Flex sx={styles.fli}>
          {signal}
          <Box sx={styles.desi1}>{performance}</Box>
        </Flex>
      </Box>
      <Box sx={styles.res}>Feedback reason will be displayed here</Box>
      <Box sx={styles.respon}>
        Your way of presenting the topic was very good in the client meeting
      </Box>
      <Box sx={styles.dash}></Box>

      <Box sx={{ ...styles.res, color: "#353448" }}>
        <Box
          sx={{
            ...styles.tick,
            color: response === "yes" ? "green" : "black",
          }}
        >
          <IoCheckmarkDoneSharp />
        </Box>
        <Box sx={styles.block}>
          {response === "yes" ? "Response submitted" : "Response not submitted"}
          {response === "yes" && (
            <Box sx={styles.desi}>31 Jan 2023, 01:30 PM</Box>
          )}
        </Box>
      </Box>

      {response === "yes" && (
        <>
          <Box sx={styles.res}>Thanks! I'll try to improve further 👍🏽</Box>
          <Box sx={styles.respon1}>Happy to hear it from you.</Box>
        </>
      )}
    </Box>
  );
}

export default Popupcontainer;
