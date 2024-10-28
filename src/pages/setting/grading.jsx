import { Box, Button, Grid2, Typography } from "@mui/material";
import { styledItem } from "./style";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useState } from "react";
import Chart from "../profile/chart";

export function Grading() {
  const datas = [
    {
      value: 1,
      chartDesc: "Completely away",
    },
    {
      value: 2,
      chartDesc: "Need to improve a lot",
    },
    {
      value: 3,
      chartDesc: "Need to improve",
    },
    {
      value: 4,
      chartDesc: "Good",
    },
    {
      value: 5,
      chartDesc: "Very good",
    },
    {
      value: 6,
      chartDesc: "Spectacular",
    },
    {
      value: 7,
      chartDesc: "Impactful",
    },
  ];
  return (
    <Grid2 sx={{ ...styledItem.parentGridSignalStyle, padding: 0 }}>
      <Grid2 sx={{ ...styledItem.parentGridSignalStyle, border: 0, margin: 0 }}>
        <Box sx={styledItem.parentBoxSignalStyle}>
          <Typography sx={styledItem.headSignalStyle}>Edit grading</Typography>
          <Button
            variant="contained"
            sx={{ ...styledItem.signalButtonStyle, padding: "3px 20px" }}
          >
            Save
          </Button>
        </Box>
      </Grid2>
      <Typography component="hr" sx={{ border: "1px solid #EBEBEB" }} />
      <Grid2 sx={{ ...styledItem.parentGridSignalStyle, border: 0, margin: 0 }}>
        <Grid2 sx={{ paddingTop: "0px" }}>
          <Typography
            sx={{
              fontSize: "14px",
              textAlign: "left",
              color: "#484759",
              letterSpacing: "0px",
              fontFamily: "Poppins",
            }}
          >
            Grading is a framework which you can use while giving feedback (Eg.
            Inefficient, Neutral...)
          </Typography>
        </Grid2>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "32px",
          }}
        >
          {datas.map((element, index) => {
            return (
              <Box
                sx={{
                  border: "1px solid #EBEBEB",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "450px",
                  padding: "12px",
                  marginBottom: "8px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: "10px",
                  }}
                >
                  <Chart Size="small" value={element.value} />
                  <Typography
                    sx={{
                      ...styledItem.dataStyle,
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    {element.chartDesc}
                  </Typography>
                </Box>
                <CloseRoundedIcon />
              </Box>
            );
          })}
        </Box>
      </Grid2>
    </Grid2>
  );
}
