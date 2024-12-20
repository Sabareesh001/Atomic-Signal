import { Avatar, Box, Grid2, Stack, Typography } from "@mui/material";
import { styledItem } from "../../pages/setting/style";
import { useState } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export function FeedBackTypes(props) {
  const styles = styledItem();
  const [selectedItem, setSelectedItem] = useState(0);
  const toggleHighlight = (id) => {
    setSelectedItem(id);
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
    <Grid2 sx={{ ...styles.parentGridSignalStyle, border: 0, margin: 0 }}>
      <Grid2 sx={{ paddingTop: "0px" }}>
        <Typography sx={styles.feedbackTypeInfoText}>
          {props.heading}
        </Typography>
        <Box sx={{ marginTop: "12px", overflowX: "auto" }}>
          <Box
            direction="row"
            alignItems="center"
            sx={{
              display: "inline-flex",
              columnGap: "16px",
            }}
          >
            {FeedbackButton.map((item, index) => {
              return (
                <>
                  <Box
                    key={index}
                    onClick={() => toggleHighlight(index)}
                    sx={{
                      ...styles.feedbackTypeBox,
                      border:
                        index === selectedItem
                          ? "1px solid #49C792"
                          : "1px solid #EBEBEB",
                      background: index === selectedItem ? "#EEFBF6" : "",
                    }}
                  >
                    <Avatar
                      src={
                        selectedItem === index ? item.imageSrc1 : item.imageSrc
                      }
                      sx={styles.feedbackAvatarBox}
                    />
                    <Typography
                      sx={{
                        ...styles.dataStyle,
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
          </Box>
          <Box sx={styles.feedbackInfoBox}>
            <InfoOutlinedIcon fontSize="verysmall" sx={{ color: "#49C792" }} />
            <Typography
              sx={{
                ...styles.dataStyle,
                fontSize: "14px",
              }}
            >
              {FeedbackDesc[selectedItem]}
            </Typography>
          </Box>
        </Box>
      </Grid2>
    </Grid2>
  );
}
