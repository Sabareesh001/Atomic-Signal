import { Avatar, Box, Button, Grid2, Stack, Typography } from "@mui/material";
import { styledItem } from "./style";
import { useState } from "react";
import { FeedBackTypes } from "../../components/feedbacktype/feedBackTypes";

export default function FeedBack() {
  const styles = styledItem();
  return (
    <Grid2 sx={{ ...styles.parentGridSignalStyle, padding: 0, height: "85vh" }}>
      <Grid2
        sx={{
          ...styles.parentGridSignalStyle,
          border: 0,
          margin: 0,
          overflowX: "auto",
        }}
      >
        <Box sx={styles.parentBoxSignalStyle}>
          <Typography sx={styles.headSignalStyle}>
            Edit feedback structure type
          </Typography>
          <Button
            variant="contained"
            sx={{ ...styles.signalButtonStyle, padding: "3px 20px" }}
          >
            Save
          </Button>
        </Box>
      </Grid2>
      <Typography component="hr" sx={{ border: "1px solid #EBEBEB" }} />
      <FeedBackTypes heading="What type of feedback structure have you implemented or would like to implement?" />
    </Grid2>
  );
}
