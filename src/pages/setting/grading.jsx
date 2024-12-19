import { Box, Button, Grid2, Typography } from "@mui/material";
import { styledItem } from "./style";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Chart from "../profile/chart";
import { useDispatch, useSelector } from "react-redux";
import { removeFeedBackType } from "./slices/feedbackslice";

export function Grading() {
  const feedBack = useSelector((state) => state.feedBackType);
  const dispatch = useDispatch();
  const styles = styledItem();
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
  function DeleteGrading(index) {
    dispatch(removeFeedBackType(index));
  }
  return (
    <Grid2>
      <Grid2
        sx={{
          ...styles.parentGridSignalStyleWeb,
          padding: 0,
          overflowX: "auto",
        }}
      >
        <Grid2
          sx={{ ...styles.parentGridSignalStyleWeb, border: 0, margin: 0 }}
        >
          <Box sx={styles.parentBoxSignalStyle}>
            <Typography sx={styles.headSignalStyle}>Edit grading</Typography>
            <Button
              variant="contained"
              sx={{ ...styles.signalButtonStyle, padding: "3px 20px" }}
            >
              Save
            </Button>
          </Box>
        </Grid2>
        <Typography component="hr" sx={{ border: "1px solid #EBEBEB" }} />
        <Grid2
          sx={{ ...styles.parentGridSignalStyleWeb, border: 0, margin: 0 }}
        >
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
              Grading is a framework which you can use while giving feedback
              (Eg. Inefficient, Neutral...)
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
            {feedBack.map((element, index) => {
              return (
                <Box
                  sx={{
                    border: "1px solid #EBEBEB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px",
                    marginBottom: "10px",
                    width: "-webkit-fill-available",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: "12px",
                      overflow: "auto",
                    }}
                  >
                    <Chart Size="small" value={element.value} />
                    <Typography
                      sx={{
                        ...styles.dataStyle,
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      {element.chartDesc}
                    </Typography>
                  </Box>
                  <Box
                    sx={{ cursor: "pointer" }}
                    onClick={() => DeleteGrading(index)}
                  >
                    <CloseRoundedIcon />
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Grid2>
      </Grid2>
      <Grid2
        sx={{
          ...styles.parentGridSignalStyleMob,
          padding: 0,
          overflowX: "auto",
        }}
      >
        <Grid2
          sx={{ ...styles.parentGridSignalStyleMob, border: 0, margin: 0 }}
        >
          <Box sx={styles.parentBoxSignalStyle}>
            <Typography sx={styles.headSignalStyle}>Edit grading</Typography>
            <Button
              variant="contained"
              sx={{ ...styles.signalButtonStyle, padding: "3px 20px" }}
            >
              Save
            </Button>
          </Box>
        </Grid2>
        <Typography component="hr" sx={{ border: "1px solid #EBEBEB" }} />
        <Grid2
          sx={{ ...styles.parentGridSignalStyleMob, border: 0, margin: 0 }}
        >
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
              Grading is a framework which you can use while giving feedback
              (Eg. Inefficient, Neutral...)
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
            {feedBack.map((element, index) => {
              return (
                <Box
                  sx={{
                    border: "1px solid #EBEBEB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px",
                    marginBottom: "8px",
                    width: "-webkit-fill-available",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: "10px",
                      overflow: "hidden",
                    }}
                  >
                    <Chart Size="small" value={element.value} />
                    <Typography
                      sx={{
                        ...styles.dataStyle,
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      {element.chartDesc}
                    </Typography>
                  </Box>
                  <Box
                    sx={{ cursor: "pointer" }}
                    onClick={() => DeleteGrading(index)}
                  >
                    <CloseRoundedIcon />
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Grid2>
      </Grid2>
    </Grid2>
  );
}
