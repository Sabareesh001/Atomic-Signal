import { Avatar, Box, Button, Grid2, Stack, Typography } from "@mui/material";
import { styledItem } from "./style";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useState } from "react";

export default function Feedback() {
  const [selectedItem, setSelectedItem] = useState(0);
  const [colour, setColour] = useState("");
  const toggleHighlight = (id) => {
    setSelectedItem(id);
    setColour("#49C792");
  };
  const FeedbackButton = [
    {
      id: 0,
      imageSrc: "/multicast.png",
      imageSrc1: "/multicast1.png",
      feebackText: "Reporting to",
    },
    {
      id: 1,
      imageSrc: "/torrent.png",
      imageSrc1: "/torrent1.png",
      feebackText: "Peer to peer",
    },
    {
      id: 2,
      imageSrc: "/blockchain.png",
      imageSrc1: "/blockchain1.png",
      feebackText: "360°",
    },
  ];
  const FeedbackDesc = [
    "Only reporting managers can give feedback",
    "Team members can give feedback to another team member except the reporting manager",
    "Team members can give feedback to another team member including the reporting manager",
  ];

  return (
    <Grid2
      sx={{ ...styledItem.parentGridSignalStyle, padding: 0, height: "85vh" }}
    >
      <Grid2 sx={{ ...styledItem.parentGridSignalStyle, border: 0, margin: 0 }}>
        <Box sx={styledItem.parentBoxSignalStyle}>
          <Typography sx={styledItem.headSignalStyle}>
            Edit feedback structure type
          </Typography>
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
            What type of feedback structure have you implemented or would like
            to implement?
          </Typography>
          <Box sx={{ marginTop: "12px", width: "399px" }}>
            <Stack direction="row" spacing={2}>
              {FeedbackButton.map((item, index) => {
                return (
                  <>
                    <Box
                      key={index}
                      onClick={() => toggleHighlight(index)}
                      sx={{
                        border:
                          index === selectedItem
                            ? "1px solid #49C792"
                            : "1px solid #EBEBEB",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "4px",
                        height: "109px",
                        width: "119px",
                        background: index === selectedItem ? "#EEFBF6" : "",
                        cursor: "pointer",
                      }}
                    >
                      <Avatar
                        src={
                          selectedItem === index
                            ? item.imageSrc1
                            : item.imageSrc
                        }
                        sx={{
                          height: "28px",
                          width: "28px",
                          overflow: "visible",
                        }}
                      />
                      <Typography
                        sx={{
                          ...styledItem.dataStyle,
                          fontSize: "14px",
                          fontWeight: "500",
                          marginTop: "7px",
                        }}
                      >
                        {item.feebackText}
                      </Typography>
                    </Box>
                  </>
                );
              })}
            </Stack>
            <Box sx={{ display: "flex", columnGap: "8px", marginTop: "12px" }}>
              <InfoOutlinedIcon
                fontSize="verysmall"
                sx={{ color: "#49C792" }}
              />
              <Typography sx={{ ...styledItem.dataStyle, fontSize: "12px" }}>
                {FeedbackDesc[selectedItem]}
              </Typography>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Grid2>
  );
}
