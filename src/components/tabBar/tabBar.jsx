import { Box, createTheme, Tab, Tabs, ThemeProvider } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import Signals from "../../pages/setting/signals";
import { Grading } from "../../pages/setting/grading";
import Feedback from "../../pages/setting/feedBackType";
import ProfileCard from "../profileCard/profileCard";
import Department from "../../pages/setting/department";
import CollabrationIcon from "../../assets/icons/collabrating_circle.svg";
import CollabrationIconMale from "../../assets/icons/collaborator_male.svg";
import ManagerIcon from "../../assets/icons/manager.svg";
import { PasswordContainer } from "./style";
import { styledItem } from "../../pages/setting/style";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: "16px",
          fontFamily: "Poppins",
          textTransform: "capitalize",
          "&.Mui-selected": {
            color: "#353448",
          },
        },
      },
    },
  },
});

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const styles = styledItem();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const ProfileData = {
    userData: {
      name: "Jennifer",
      image: "",
      period_of_service: "3 yrs 6 Mon",
    },
    others: [
      {
        name: "Human Resources",
        icon: CollabrationIcon,
      },
      {
        name: "Talent Manager",
        icon: CollabrationIconMale,
      },
      {
        image: "eded",
        name: "Samuel Guererro",
        icon: ManagerIcon,
      },
    ],
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <ThemeProvider theme={theme}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="scrollable"
            sx={styles.StyledTabs}
          >
            <Tab label="Signals" {...a11yProps(0)} />
            <Tab label="Grading" {...a11yProps(1)} />
            <Tab label="Feedback type" {...a11yProps(2)} />
            <Tab label="Department" {...a11yProps(3)} />
            <Tab label="Password" {...a11yProps(4)} />
          </Tabs>
        </ThemeProvider>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Signals />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Grading />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Feedback />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Department />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <PasswordContainer>
          <ProfileCard ProfileData={ProfileData} isSetting />
        </PasswordContainer>
      </CustomTabPanel>
    </Box>
  );
}
